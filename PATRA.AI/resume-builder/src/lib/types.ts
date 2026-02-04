export interface PersonalInfo {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    linkedin: string;
    website: string; // GitHub/Portfolio
    summary: string;
}

export interface Experience {
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
}

export interface Education {
    id: string;
    institution: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
}

export interface Skill {
    id: string;
    name: string;
    level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

export interface Project {
    id: string;
    name: string;
    description: string;
    link: string;
}

export interface Achievement {
    id: string;
    title: string;
    description: string;
}

export interface ResumeData {
    personalInfo: PersonalInfo;
    experience: Experience[];
    education: Education[];
    skills: Skill[];
    projects: Project[];
    achievements: Achievement[];
}

export const initialResumeData: ResumeData = {
    personalInfo: {
        fullName: "",
        email: "",
        phone: "",
        address: "",
        linkedin: "",
        website: "",
        summary: "",
    },
    experience: [],
    education: [],
    skills: [],
    projects: [],
    achievements: [],
};
