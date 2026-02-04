"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RESUME_TEMPLATES } from "@/lib/templates";

export default function TemplatesPage() {
    // Helper to format key into title (e.g., "software-developer" -> "Software Developer")
    const formatTitle = (key: string) => {
        return key
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">Resume Templates</h1>
                <p className="text-muted-foreground mb-8">
                    Choose a template to get started with a pre-filled structure tailored to your role.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(RESUME_TEMPLATES).map(([key, template]) => (
                        <div key={key} className="border rounded-lg p-4 space-y-4 hover:shadow-lg transition-shadow">
                            <div className="aspect-[210/297] bg-muted/20 rounded flex items-center justify-center text-muted-foreground border border-dashed">
                                Preview: {formatTitle(key)}
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">{formatTitle(key)}</h3>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                    {template.personalInfo.summary}
                                </p>
                            </div>
                            <Button className="w-full" asChild>
                                <Link href={`/builder?template=${key}`}>Use Template</Link>
                            </Button>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
