"use client";

import { ResumeData, Education } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
    data: ResumeData;
    updateData: (data: ResumeData) => void;
}

export function EducationForm({ data, updateData }: Props) {
    const addEducation = () => {
        const newEdu: Education = {
            id: crypto.randomUUID(),
            institution: "",
            degree: "",
            field: "",
            startDate: "",
            endDate: "",
            current: false,
            description: "",
        };
        updateData({
            ...data,
            education: [...data.education, newEdu],
        });
    };

    const removeEducation = (id: string) => {
        updateData({
            ...data,
            education: data.education.filter((edu) => edu.id !== id),
        });
    };

    const updateEducation = (id: string, field: keyof Education, value: any) => {
        updateData({
            ...data,
            education: data.education.map((edu) =>
                edu.id === id ? { ...edu, [field]: value } : edu
            ),
        });
    };

    return (
        <div className="space-y-4 py-4">
            {data.education.map((edu, index) => (
                <Card key={edu.id} className="relative">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-2 text-destructive hover:text-destructive hover:bg-destructive/10"
                        onClick={() => removeEducation(edu.id)}
                    >
                        <Trash2 className="h-4 w-4" />
                    </Button>
                    <CardContent className="pt-6 space-y-4">
                        <div className="space-y-2">
                            <Label>Institution</Label>
                            <Input
                                value={edu.institution}
                                onChange={(e) => updateEducation(edu.id, "institution", e.target.value)}
                                placeholder="University Name"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Degree</Label>
                                <Input
                                    value={edu.degree}
                                    onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                                    placeholder="Bachelor's"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Field of Study</Label>
                                <Input
                                    value={edu.field}
                                    onChange={(e) => updateEducation(edu.id, "field", e.target.value)}
                                    placeholder="Computer Science"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Start Date</Label>
                                <Input
                                    value={edu.startDate}
                                    onChange={(e) => updateEducation(edu.id, "startDate", e.target.value)}
                                    placeholder="YYYY"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>End Date</Label>
                                <Input
                                    value={edu.endDate}
                                    onChange={(e) => updateEducation(edu.id, "endDate", e.target.value)}
                                    placeholder="YYYY"
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
            <Button onClick={addEducation} variant="outline" className="w-full border-dashed">
                <Plus className="mr-2 h-4 w-4" /> Add Education
            </Button>
        </div>
    );
}
