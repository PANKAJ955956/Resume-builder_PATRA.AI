"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ResumeData } from "@/lib/types";
import { PersonalForm } from "./PersonalForm";
import { ExperienceForm } from "./ExperienceForm";
import { EducationForm } from "./EducationForm";
import { SkillsForm } from "./SkillsForm";
import { ProjectsForm } from "./ProjectsForm";
import { AchievementsForm } from "./AchievementsForm";
import { User, Briefcase, GraduationCap, Lightbulb, FolderGit2, Trophy } from "lucide-react";

interface ResumeFormProps {
    data: ResumeData;
    updateData: (data: ResumeData) => void;
}

export function ResumeForm({ data, updateData }: ResumeFormProps) {
    return (
        <div className="space-y-4">
            <Accordion type="single" collapsible defaultValue="personal" className="w-full">
                <AccordionItem value="personal">
                    <AccordionTrigger>
                        <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            Personal Information
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <PersonalForm data={data} updateData={updateData} />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="experience">
                    <AccordionTrigger>
                        <div className="flex items-center gap-2">
                            <Briefcase className="h-4 w-4" />
                            Work Experience
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <ExperienceForm data={data} updateData={updateData} />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="education">
                    <AccordionTrigger>
                        <div className="flex items-center gap-2">
                            <GraduationCap className="h-4 w-4" />
                            Education
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <EducationForm data={data} updateData={updateData} />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="skills">
                    <AccordionTrigger>
                        <div className="flex items-center gap-2">
                            <Lightbulb className="h-4 w-4" />
                            Skills
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <SkillsForm data={data} updateData={updateData} />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="projects">
                    <AccordionTrigger>
                        <div className="flex items-center gap-2">
                            <FolderGit2 className="h-4 w-4" />
                            Projects
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <ProjectsForm data={data} updateData={updateData} />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="achievements">
                    <AccordionTrigger>
                        <div className="flex items-center gap-2">
                            <Trophy className="h-4 w-4" />
                            Achievements
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <AchievementsForm data={data} updateData={updateData} />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
