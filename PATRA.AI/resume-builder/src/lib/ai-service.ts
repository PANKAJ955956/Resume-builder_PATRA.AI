import { ResumeData } from "./types";

interface AIResponse {
    text: string;
    data?: Partial<ResumeData>;
}

export async function generateResumeContent(prompt: string): Promise<AIResponse> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const lowerPrompt = prompt.toLowerCase();

    // --- 1. Generic Role Parser ---
    // Look for patterns like "resume for a [Role]" or "profile for [Role]"
    const roleMatch = lowerPrompt.match(/(?:for a|profile for|resume for|position of) ([a-z\s]+)/i);

    if (roleMatch || lowerPrompt.split(" ").length < 10) {
        // Did we find a role? If not, maybe the whole short prompt is the role (e.g. "Software Engineer")
        const detectedRole = roleMatch ? roleMatch[1].trim() : prompt.trim();

        // Capitalize Role
        const formattedRole = detectedRole.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        // Return generic data filling in the role
        return {
            text: `I've generated a tailored resume draft for a ${formattedRole}. You can apply this data to the builder instantly.`,
            data: {
                personalInfo: {
                    fullName: "Alex Candidate",
                    email: "alex.candidate@example.com",
                    phone: "+1 (555) 123-4567",
                    address: "City, State",
                    linkedin: `linkedin.com/in/${detectedRole.replace(/\s+/g, '')}`,
                    website: `${detectedRole.replace(/\s+/g, '')}-portfolio.com`,
                    summary: `Motivated and results-oriented ${formattedRole} with a strong proven track record in the industry. Passionate about leveraging skills to drive business success and deliver high-quality results. Committed to continuous learning and professional growth.`,
                },
                experience: [
                    {
                        id: crypto.randomUUID(),
                        company: "Company A",
                        position: `Senior ${formattedRole}`,
                        startDate: "01/2022",
                        endDate: "Present",
                        current: true,
                        description: `• Led key initiatives as a ${formattedRole}, improving team efficiency by 20%.\n• Collaborated with cross-functional teams to deliver projects on time.\n• Mentored junior staff and implemented best practices.`,
                    },
                    {
                        id: crypto.randomUUID(),
                        company: "Company B",
                        position: `Junior ${formattedRole}`,
                        startDate: "06/2019",
                        endDate: "12/2021",
                        current: false,
                        description: `• Assisted in daily operations associated with being a ${formattedRole}.\n• Contributed to successful project completions and client satisfaction.\n• Developed core competencies in industry-standard tools.`,
                    }
                ],
                education: [
                    {
                        id: crypto.randomUUID(),
                        institution: "State University",
                        degree: "Bachelor's Degree",
                        field: "Related Field",
                        startDate: "2015",
                        endDate: "2019",
                        current: false,
                        description: "",
                    }
                ],
                skills: [
                    { id: crypto.randomUUID(), name: "Industry Skill 1", level: "Expert" },
                    { id: crypto.randomUUID(), name: "Industry Skill 2", level: "Advanced" },
                    { id: crypto.randomUUID(), name: "Communication", level: "Advanced" },
                ],
                projects: [
                    {
                        id: crypto.randomUUID(),
                        name: "Key Portfolio Project",
                        description: `A significant project demonstrating core ${formattedRole} capabilities.`,
                        link: "github.com/project",
                    }
                ],
                achievements: [],
            }
        };
    }

    // Default response if it's too complex or weird
    return {
        text: "I can help you write your resume! Try asking me to 'generate a resume for a [Role]' to get started.",
    };
}
