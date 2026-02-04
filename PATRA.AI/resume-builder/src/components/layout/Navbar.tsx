"use strict";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText, Sparkles } from "lucide-react";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center mx-auto px-4">
                <div className="mr-4 flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <div className="bg-primary/10 p-1.5 rounded-lg">
                            <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <span className="hidden font-bold sm:inline-block bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                            ResumeFlow AI
                        </span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        <Link
                            href="/builder"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Builder
                        </Link>
                        <Link
                            href="/templates"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Templates
                        </Link>
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-2">
                    <Link href="/builder">
                        <Button size="sm" className="hidden sm:flex gap-2">
                            <Sparkles className="h-4 w-4" />
                            Create Resume
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
