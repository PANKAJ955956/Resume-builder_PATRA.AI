"use client";

import { ResumeData, Skill } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Props {
    data: ResumeData;
    updateData: (data: ResumeData) => void;
}

export function SkillsForm({ data, updateData }: Props) {
    const addSkill = () => {
        const newSkill: Skill = {
            id: crypto.randomUUID(),
            name: "",
            level: "Intermediate",
        };
        updateData({
            ...data,
            skills: [...data.skills, newSkill],
        });
    };

    const removeSkill = (id: string) => {
        updateData({
            ...data,
            skills: data.skills.filter((s) => s.id !== id),
        });
    };

    const updateSkill = (id: string, name: string) => {
        updateData({
            ...data,
            skills: data.skills.map((s) => (s.id === id ? { ...s, name } : s)),
        });
    };

    return (
        <div className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-4">
                {data.skills.map((skill) => (
                    <div key={skill.id} className="flex items-center gap-2">
                        <Input
                            value={skill.name}
                            onChange={(e) => updateSkill(skill.id, e.target.value)}
                            placeholder="Skill (e.g. React)"
                            className="h-9"
                        />
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-9 w-9 text-muted-foreground hover:text-destructive"
                            onClick={() => removeSkill(skill.id)}
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                ))}
            </div>
            <Button onClick={addSkill} variant="outline" size="sm" className="w-full border-dashed">
                <Plus className="mr-2 h-4 w-4" /> Add Skill
            </Button>
        </div>
    );
}
