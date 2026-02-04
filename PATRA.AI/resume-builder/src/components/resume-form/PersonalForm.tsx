"use client";

import { ResumeData } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Wand2 } from "lucide-react";

interface Props {
    data: ResumeData;
    updateData: (data: ResumeData) => void;
}

export function PersonalForm({ data, updateData }: Props) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        updateData({
            ...data,
            personalInfo: {
                ...data.personalInfo,
                [name]: value,
            },
        });
    };

    const generateSummary = () => {
        const summary = `Experienced professional with a strong background in ${data.experience[0]?.position || "your field"}. Proven track record of success in ${data.experience[0]?.company || "various organizations"}. Skilled in ${data.skills.map(s => s.name).join(", ") || "various technologies"}. Committed to delivering high-quality results.`;
        updateData({
            ...data,
            personalInfo: {
                ...data.personalInfo,
                summary,
            },
        });
    };



    return (
        <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                        id="fullName"
                        name="fullName"
                        value={data.personalInfo.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        value={data.personalInfo.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                        id="phone"
                        name="phone"
                        value={data.personalInfo.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                        id="address"
                        name="address"
                        value={data.personalInfo.address}
                        onChange={handleChange}
                        placeholder="City, Country"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn</Label>
                    <Input
                        id="linkedin"
                        name="linkedin"
                        value={data.personalInfo.linkedin}
                        onChange={handleChange}
                        placeholder="linkedin.com/in/johndoe"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="website">Website / Portfolio</Label>
                    <Input
                        id="website"
                        name="website"
                        value={data.personalInfo.website}
                        onChange={handleChange}
                        placeholder="johndoe.com"
                    />
                </div>
            </div>
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <Label htmlFor="summary">Professional Summary</Label>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 text-xs text-primary gap-1"
                        onClick={generateSummary}
                    >
                        <Wand2 className="h-3 w-3" /> AI Generate
                    </Button>
                </div>
                <Textarea
                    id="summary"
                    name="summary"
                    value={data.personalInfo.summary}
                    onChange={handleChange}
                    placeholder="Brief summary of your professional background..."
                    className="min-h-[100px]"
                />
            </div>
        </div>
    );
}
