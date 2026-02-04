"use client";

import { useState, useEffect, Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { ResumeForm } from "@/components/resume-form/ResumeForm";
import { ResumePreview } from "@/components/preview/ResumePreview";
import { ResumeData, initialResumeData } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Download, Eye, Bot } from "lucide-react";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { useSearchParams } from "next/navigation";
import { RESUME_TEMPLATES } from "@/lib/templates";
import { AIChat } from "@/components/ai-writer/AIChat";

function BuilderContent() {
    const searchParams = useSearchParams();
    const templateId = searchParams.get("template");
    const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
    const [isChatOpen, setIsChatOpen] = useState(false);

    useEffect(() => {
        if (templateId && RESUME_TEMPLATES[templateId]) {
            setResumeData(RESUME_TEMPLATES[templateId]);
        }
    }, [templateId]);
    const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");
    const printRef = useRef<HTMLDivElement>(null);

    const handlePrint = useReactToPrint({
        contentRef: printRef,
        documentTitle: `${resumeData.personalInfo.fullName || "Resume"}`,
    });

    const handleAIApply = (data: Partial<ResumeData>) => {
        setResumeData((prev) => ({
            ...prev,
            ...data,
            // Merge arrays instead of replacing if needed, but for now we replace for simplicity or check if empty
            personalInfo: { ...prev.personalInfo, ...data.personalInfo },
        }));
    };

    return (
        <div className="flex min-h-screen flex-col bg-muted/30">
            <Navbar />
            <div className="flex-1 container mx-auto p-4 md:p-8 relative">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-3xl font-bold tracking-tight">Resume Builder</h1>
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            className="bg-primary/5 border-primary/20 hover:bg-primary/10 text-primary gap-2"
                            onClick={() => setIsChatOpen(true)}
                        >
                            <Bot className="h-4 w-4" /> AI Assistant
                        </Button>
                        <Button
                            variant="outline"
                            className="md:hidden"
                            onClick={() => setActiveTab(activeTab === "edit" ? "preview" : "edit")}
                        >
                            {activeTab === "edit" ? <Eye className="mr-2 h-4 w-4" /> : "Edit"}
                            {activeTab === "edit" ? "Preview" : "Edit"}
                        </Button>
                        <Button onClick={handlePrint} className="gap-2">
                            <Download className="h-4 w-4" /> Export PDF
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[calc(100vh-140px)]">
                    {/* Form Section */}
                    <div className={`flex flex-col space-y-4 overflow-y-auto pr-2 custom-scrollbar ${activeTab === "preview" ? "hidden md:flex" : "flex"}`}>
                        <ResumeForm data={resumeData} updateData={setResumeData} />
                    </div>

                    {/* Preview Section */}
                    <div className={`border rounded-lg bg-white shadow-lg overflow-hidden ${activeTab === "edit" ? "hidden md:block" : "block"}`}>
                        <div className="h-full overflow-y-auto p-8 custom-scrollbar bg-white text-black" ref={printRef}>
                            <ResumePreview data={resumeData} />
                        </div>
                    </div>
                </div>

                {/* AI Chat Widget */}
                <AIChat
                    isOpen={isChatOpen}
                    onClose={() => setIsChatOpen(false)}
                    onApplyData={handleAIApply}
                />
            </div>
        </div>
    );
}

export default function BuilderPage() {
    return (
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <BuilderContent />
        </Suspense>
    );
}
