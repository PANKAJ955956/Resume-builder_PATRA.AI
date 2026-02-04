"use client";

import { ResumeData, Achievement } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
    data: ResumeData;
    updateData: (data: ResumeData) => void;
}

export function AchievementsForm({ data, updateData }: Props) {
    const addAchievement = () => {
        const newAchievement: Achievement = {
            id: crypto.randomUUID(),
            title: "",
            description: "",
        };
        updateData({
            ...data,
            achievements: [...data.achievements, newAchievement],
        });
    };

    const removeAchievement = (id: string) => {
        updateData({
            ...data,
            achievements: data.achievements.filter((a) => a.id !== id),
        });
    };

    const updateAchievement = (id: string, field: keyof Achievement, value: any) => {
        updateData({
            ...data,
            achievements: data.achievements.map((a) =>
                a.id === id ? { ...a, [field]: value } : a
            ),
        });
    };

    return (
        <div className="space-y-4 py-4">
            {data.achievements.map((achievement) => (
                <Card key={achievement.id} className="relative">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-2 text-destructive hover:text-destructive hover:bg-destructive/10"
                        onClick={() => removeAchievement(achievement.id)}
                    >
                        <Trash2 className="h-4 w-4" />
                    </Button>
                    <CardContent className="pt-6 space-y-4">
                        <div className="space-y-2">
                            <Label>Title</Label>
                            <Input
                                value={achievement.title}
                                onChange={(e) => updateAchievement(achievement.id, "title", e.target.value)}
                                placeholder="Achievement Title"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Description</Label>
                            <Textarea
                                value={achievement.description}
                                onChange={(e) => updateAchievement(achievement.id, "description", e.target.value)}
                                placeholder="Details about what you achieved..."
                                className="min-h-[80px]"
                            />
                        </div>
                    </CardContent>
                </Card>
            ))}
            <Button onClick={addAchievement} variant="outline" className="w-full border-dashed">
                <Plus className="mr-2 h-4 w-4" /> Add Achievement
            </Button>
        </div>
    );
}
