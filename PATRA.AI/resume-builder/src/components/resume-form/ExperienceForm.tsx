"use client";

import { ResumeData, Experience } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Wand2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
    data: ResumeData;
    updateData: (data: ResumeData) => void;
}

export function ExperienceForm({ data, updateData }: Props) {
    const addExperience = () => {
        const newExp: Experience = {
            id: crypto.randomUUID(),
            company: "",
            position: "",
            startDate: "",
            endDate: "",
            current: false,
            description: "",
        };
        updateData({
            ...data,
            experience: [...data.experience, newExp],
        });
    };

    const removeExperience = (id: string) => {
        updateData({
            ...data,
            experience: data.experience.filter((exp) => exp.id !== id),
        });
    };

    const updateExperience = (id: string, field: keyof Experience, value: any) => {
        updateData({
            ...data,
            experience: data.experience.map((exp) =>
                exp.id === id ? { ...exp, [field]: value } : exp
            ),
        });
    };

    const generateDescription = (id: string, role: string) => {
        // Mock AI generation
        const mockDescriptions = [
            `• Led a team of developers to deliver high-quality software solutions.`,
            `• Optimized application performance, reducing load times by 40%.`,
            `• Collaborated with cross-functional teams to define project requirements.`,
            `• Implemented CI/CD pipelines to streamline deployment processes.`,
        ];
        const randomDesc = mockDescriptions.join("\n");
        updateExperience(id, "description", randomDesc);
    };

    return (
        <div className="space-y-4 py-4">
            {data.experience.map((exp, index) => (
                <Card key={exp.id} className="relative">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-2 text-destructive hover:text-destructive hover:bg-destructive/10"
                        onClick={() => removeExperience(exp.id)}
                    >
                        <Trash2 className="h-4 w-4" />
                    </Button>
                    <CardContent className="pt-6 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Company</Label>
                                <Input
                                    value={exp.company}
                                    onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                                    placeholder="Company Name"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Position</Label>
                                <Input
                                    value={exp.position}
                                    onChange={(e) => updateExperience(exp.id, "position", e.target.value)}
                                    placeholder="Job Title"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Start Date</Label>
                                <Input
                                    value={exp.startDate}
                                    onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)}
                                    placeholder="MM/YYYY"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>End Date</Label>
                                <Input
                                    value={exp.endDate}
                                    onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)}
                                    placeholder="Present or MM/YYYY"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <Label>Description</Label>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-6 text-xs text-primary gap-1"
                                    onClick={() => generateDescription(exp.id, exp.position)}
                                >
                                    <Wand2 className="h-3 w-3" /> AI Generate
                                </Button>
                            </div>
                            <Textarea
                                value={exp.description}
                                onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
                                placeholder="• Key responsibility..."
                                className="min-h-[100px]"
                            />
                        </div>
                    </CardContent>
                </Card>
            ))}
            <Button onClick={addExperience} variant="outline" className="w-full border-dashed">
                <Plus className="mr-2 h-4 w-4" /> Add Experience
            </Button>
        </div>
    );
}
