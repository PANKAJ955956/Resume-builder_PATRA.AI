import { ResumeData } from "@/lib/types";
import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

interface Props {
    data: ResumeData;
}

export function ResumePreview({ data }: Props) {
    const { personalInfo, experience, education, skills } = data;

    return (
        <div className="w-full h-full p-2 bg-white text-black" id="resume-preview">
            {/* Header */}
            <div className="border-b-2 border-gray-800 pb-4 mb-6">
                <h1 className="text-4xl font-bold uppercase tracking-wider mb-2 text-gray-900">
                    {personalInfo.fullName || "Your Name"}
                </h1>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-2">
                    {personalInfo.email && (
                        <div className="flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            <span>{personalInfo.email}</span>
                        </div>
                    )}
                    {personalInfo.phone && (
                        <div className="flex items-center gap-1">
                            <Phone className="h-3 w-3" />
                            <span>{personalInfo.phone}</span>
                        </div>
                    )}
                    {personalInfo.address && (
                        <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span>{personalInfo.address}</span>
                        </div>
                    )}
                    {personalInfo.linkedin && (
                        <div className="flex items-center gap-1">
                            <Linkedin className="h-3 w-3" />
                            <span className="truncate max-w-[150px]">{personalInfo.linkedin}</span>
                        </div>
                    )}
                    {personalInfo.website && (
                        <div className="flex items-center gap-1">
                            <Globe className="h-3 w-3" />
                            <span className="truncate max-w-[150px]">{personalInfo.website}</span>
                        </div>
                    )}
                </div>
                {personalInfo.summary && (
                    <p className="mt-4 text-gray-700 leading-relaxed text-sm">
                        {personalInfo.summary}
                    </p>
                )}
            </div>

            <div className="grid grid-cols-1 gap-6">
                {/* Experience Section */}
                {experience.length > 0 && (
                    <section>
                        <h2 className="text-lg font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-3 text-gray-800">
                            Professional Experience
                        </h2>
                        <div className="space-y-4">
                            {experience.map((exp) => (
                                <div key={exp.id}>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h3 className="font-bold text-gray-900">{exp.position}</h3>
                                        <span className="text-sm text-gray-600 whitespace-nowrap">
                                            {exp.startDate} - {exp.endDate || "Present"}
                                        </span>
                                    </div>
                                    <div className="text-sm font-semibold text-gray-700 mb-2">
                                        {exp.company}
                                    </div>
                                    <div className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                                        {exp.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Education Section */}
                {education.length > 0 && (
                    <section>
                        <h2 className="text-lg font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-3 text-gray-800">
                            Education
                        </h2>
                        <div className="space-y-3">
                            {education.map((edu) => (
                                <div key={edu.id}>
                                    <div className="flex justify-between items-baseline">
                                        <h3 className="font-bold text-gray-900">{edu.institution}</h3>
                                        <span className="text-sm text-gray-600">
                                            {edu.startDate} - {edu.endDate || "Present"}
                                        </span>
                                    </div>
                                    <div className="text-sm text-gray-700">
                                        <span className="font-semibold">{edu.degree}</span>, {edu.field}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Skills Section */}
                {skills.length > 0 && (
                    <section>
                        <h2 className="text-lg font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-3 text-gray-800">
                            Skills
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <span
                                    key={skill.id}
                                    className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded font-medium border border-gray-200"
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </section>
                )}

                {/* Projects Section */}
                {data.projects.length > 0 && (
                    <section>
                        <h2 className="text-lg font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-3 text-gray-800">
                            Projects
                        </h2>
                        <div className="space-y-4">
                            {data.projects.map((project) => (
                                <div key={project.id}>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h3 className="font-bold text-gray-900">
                                            {project.name}
                                            {project.link && (
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="ml-2 text-xs text-blue-600 hover:underline font-normal">
                                                    {project.link}
                                                </a>
                                            )}
                                        </h3>
                                    </div>
                                    <div className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                                        {project.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Achievements Section */}
                {data.achievements.length > 0 && (
                    <section>
                        <h2 className="text-lg font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-3 text-gray-800">
                            Achievements
                        </h2>
                        <ul className="list-disc pl-5 space-y-2">
                            {data.achievements.map((achievement) => (
                                <li key={achievement.id} className="text-sm text-gray-700">
                                    <span className="font-bold">{achievement.title}</span>
                                    {achievement.description && `: ${achievement.description}`}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}
            </div>
        </div>
    );
}
