"use client";

import { ResumeData, Project } from "@/lib/types";
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

export function ProjectsForm({ data, updateData }: Props) {
    const addProject = () => {
        const newProject: Project = {
            id: crypto.randomUUID(),
            name: "",
            description: "",
            link: "",
        };
        updateData({
            ...data,
            projects: [...data.projects, newProject],
        });
    };

    const removeProject = (id: string) => {
        updateData({
            ...data,
            projects: data.projects.filter((p) => p.id !== id),
        });
    };

    const updateProject = (id: string, field: keyof Project, value: any) => {
        updateData({
            ...data,
            projects: data.projects.map((p) =>
                p.id === id ? { ...p, [field]: value } : p
            ),
        });
    };

    return (
        <div className="space-y-4 py-4">
            {data.projects.map((project) => (
                <Card key={project.id} className="relative">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-2 text-destructive hover:text-destructive hover:bg-destructive/10"
                        onClick={() => removeProject(project.id)}
                    >
                        <Trash2 className="h-4 w-4" />
                    </Button>
                    <CardContent className="pt-6 space-y-4">
                        <div className="space-y-2">
                            <Label>Project Name</Label>
                            <Input
                                value={project.name}
                                onChange={(e) => updateProject(project.id, "name", e.target.value)}
                                placeholder="Project Title"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Link</Label>
                            <Input
                                value={project.link}
                                onChange={(e) => updateProject(project.id, "link", e.target.value)}
                                placeholder="https://github.com/..."
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Description</Label>
                            <Textarea
                                value={project.description}
                                onChange={(e) => updateProject(project.id, "description", e.target.value)}
                                placeholder="Brief description of the project..."
                                className="min-h-[80px]"
                            />
                        </div>
                    </CardContent>
                </Card>
            ))}
            <Button onClick={addProject} variant="outline" className="w-full border-dashed">
                <Plus className="mr-2 h-4 w-4" /> Add Project
            </Button>
        </div>
    );
}
