"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Send, User, Sparkles, X } from "lucide-react";
import { generateResumeContent } from "@/lib/ai-service";
import { ResumeData } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ChatMessage {
    role: "user" | "ai";
    content: string;
    data?: Partial<ResumeData>;
}

interface AIChatProps {
    onApplyData: (data: Partial<ResumeData>) => void;
    isOpen: boolean;
    onClose: () => void;
}

export function AIChat({ onApplyData, isOpen, onClose }: AIChatProps) {
    const [messages, setMessages] = useState<ChatMessage[]>([
        { role: "ai", content: "Hi! I'm your AI Resume Assistant. Tell me your role and experience (e.g., 'Data Analyst fresher'), and I'll generate a resume for you." }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage: ChatMessage = { role: "user", content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const response = await generateResumeContent(userMessage.content);
            const aiMessage: ChatMessage = {
                role: "ai",
                content: response.text,
                data: response.data
            };
            setMessages((prev) => [...prev, aiMessage]);
        } catch (error) {
            setMessages((prev) => [...prev, { role: "ai", content: "Sorry, I encountered an error. Please try again." }]);
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <Card className="fixed bottom-4 right-4 w-96 h-[600px] flex flex-col shadow-2xl border-primary/20 bg-background z-50">
            <CardHeader className="flex flex-row items-center justify-between pb-2 border-b">
                <CardTitle className="flex items-center gap-2 text-lg">
                    <Bot className="h-5 w-5 text-primary" />
                    AI Resume Writer
                </CardTitle>
                <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
                    <X className="h-4 w-4" />
                </Button>
            </CardHeader>
            <CardContent className="flex-1 overflow-hidden p-0 flex flex-col">
                <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={cn("flex gap-3", msg.role === "user" ? "flex-row-reverse" : "")}>
                            <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0", msg.role === "ai" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground")}>
                                {msg.role === "ai" ? <Bot className="h-5 w-5" /> : <User className="h-5 w-5" />}
                            </div>
                            <div className={cn("rounded-lg p-3 text-sm max-w-[80%]", msg.role === "ai" ? "bg-muted/50" : "bg-primary text-primary-foreground")}>
                                <p>{msg.content}</p>
                                {msg.data && (
                                    <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                                        <div className="text-xs font-semibold mb-2 opacity-70">Generated Content Available</div>
                                        <Button
                                            size="sm"
                                            variant={msg.role === "ai" ? "outline" : "secondary"}
                                            className="w-full gap-2"
                                            onClick={() => onApplyData(msg.data!)}
                                        >
                                            <Sparkles className="h-3 w-3" /> Apply to Resume
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex gap-3">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary/10 text-primary">
                                <Bot className="h-5 w-5" />
                            </div>
                            <div className="bg-muted/50 rounded-lg p-3 text-sm flex items-center gap-2">
                                <span className="animate-pulse">Thinking...</span>
                            </div>
                        </div>
                    )}
                </div>
                <div className="p-4 border-t mt-auto">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSend();
                        }}
                        className="flex gap-2"
                    >
                        <Input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type a message..."
                            disabled={isLoading}
                        />
                        <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                            <Send className="h-4 w-4" />
                        </Button>
                    </form>
                </div>
            </CardContent>
        </Card>
    );
}
