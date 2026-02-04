"use client";

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Wand2, FileText, Share2, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 overflow-hidden relative">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/10 text-primary hover:bg-primary/20">
                <Sparkles className="mr-2 h-3.5 w-3.5 inline" />
                New: AI-Powered Generation
              </Badge>
            </motion.div>

            <motion.h1
              className="font-heading text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Build Your Dream Resume <br /> in <span className="text-primary">Minutes</span>
            </motion.h1>

            <motion.p
              className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Create professional, ATS-friendly resumes with the help of AI.
              Export to PDF and land your next job faster.
            </motion.p>

            <motion.div
              className="space-x-4 flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link href="/builder">
                <Button size="lg" className="h-12 px-8 gap-2 text-md shadow-lg shadow-primary/20">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/templates">
                <Button variant="outline" size="lg" className="h-12 px-8 text-md bg-background/50 backdrop-blur-sm">
                  View Templates
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Trusted By Mock */}
          <motion.div
            className="mt-12 pt-8 border-t border-muted/40 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-center text-sm font-medium text-muted-foreground mb-6 uppercase tracking-widest">Trusted by candidates applying to</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
              {/* Mock Logos - Text for simplicity/performance */}
              <span className="text-xl font-bold">GOOGLE</span>
              <span className="text-xl font-bold">MICROSOFT</span>
              <span className="text-xl font-bold">AMAZON</span>
              <span className="text-xl font-bold">NETFLIX</span>
              <span className="text-xl font-bold">META</span>
            </div>
          </motion.div>
        </section>

        {/* How It Works Section */}
        <section className="container py-12 md:py-24 space-y-12 mx-auto px-4 border-t bg-muted/30">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl font-bold md:text-5xl">How It Works</h2>
            <p className="text-muted-foreground text-lg">Three simple steps to your professional resume.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard
              number="01"
              title="Choose a Template"
              description="Select from our tailored templates for Software, Data, and more."
              icon={<FileText className="h-8 w-8 text-primary" />}
            />
            <StepCard
              number="02"
              title="Fill & AI Generate"
              description="Enter your details or let our AI write your summary and points."
              icon={<Wand2 className="h-8 w-8 text-primary" />}
            />
            <StepCard
              number="03"
              title="Download & Apply"
              description="Export as a perfectly formatted PDF and start applying."
              icon={<Share2 className="h-8 w-8 text-primary" />}
            />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container space-y-12 py-12 md:py-24 mx-auto px-4">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
              Features
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Everything you need to create a top-tier resume.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <FeatureCard
              icon={<Wand2 className="h-10 w-10 text-primary" />}
              title="AI Writer"
              description="Generate responsibility points and summaries tailored to your role."
            />
            <FeatureCard
              icon={<CheckCircle2 className="h-10 w-10 text-primary" />}
              title="ATS Friendly"
              description="Templates designed to pass Applicant Tracking Systems easily."
            />
            <FeatureCard
              icon={<Sparkles className="h-10 w-10 text-primary" />}
              title="Premium Design"
              description="Stand out with modern, clean, and professional layouts."
            />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container py-12 md:py-24 mx-auto px-4 bg-primary/5 rounded-3xl my-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-heading text-3xl font-bold md:text-5xl">What Users Say</h2>
            <p className="text-muted-foreground text-lg">Join thousands of successful job seekers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              name="Sarah J."
              role="Data Analyst"
              text="The AI writer is a game changer! It helped me phrase my experience perfectly. I got hired in 2 weeks."
            />
            <TestimonialCard
              name="Mike T."
              role="Software Engineer"
              text="I love the dark mode templates. They look so professional and unique compared to standard Word docs."
            />
            <TestimonialCard
              name="Emily R."
              role="Marketing Manager"
              text="Simple, fast, and effective. The PDF export works flawlessly. Highly recommended!"
            />
          </div>
        </section>

        {/* Blog / Resources Section */}
        <section className="container py-12 md:py-24 mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div className="space-y-4">
              <h2 className="font-heading text-3xl font-bold md:text-4xl">Latest Articles</h2>
              <p className="text-muted-foreground">Expert advice to help you get hired.</p>
            </div>
            <Button variant="ghost" className="hidden md:flex">View all articles <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BlogCard
              title="Top 10 Resume Mistakes to Avoid in 2024"
              category="Career Tips"
              image="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80"
            />
            <BlogCard
              title="How to optimize your resume for ATS"
              category="Technical"
              image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
            />
            <BlogCard
              title="Writing a summary that grabs attention"
              category="Guides"
              image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
            />
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow transition-all hover:shadow-md hover:-translate-y-1">
      <div className="flex flex-col justify-between rounded-md p-6 h-full">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          {icon}
        </div>
        <div className="space-y-2">
          <h3 className="font-bold text-xl">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}

function StepCard({ number, title, description, icon }: { number: string, title: string, description: string, icon: React.ReactNode }) {
  return (
    <Card className="border-none shadow-none bg-transparent">
      <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-background border flex items-center justify-center shadow-sm mb-2 relative">
          {icon}
          <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm border-4 border-muted">
            {number}
          </span>
        </div>
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

function TestimonialCard({ name, role, text }: { name: string, role: string, text: string }) {
  return (
    <Card className="border shadow-sm">
      <CardContent className="pt-6 space-y-4">
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
          ))}
        </div>
        <p className="text-muted-foreground italic">"{text}"</p>
        <div className="flex items-center gap-3 pt-4 border-t">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
            {name[0]}
          </div>
          <div>
            <p className="font-semibold text-sm">{name}</p>
            <p className="text-xs text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function BlogCard({ title, category, image }: { title: string, category: string, image: string }) {
  return (
    <Card className="overflow-hidden border-none shadow-md group cursor-pointer h-full">
      <div className="aspect-video relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${image})` }} />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
        <Badge className="absolute top-4 left-4">{category}</Badge>
      </div>
      <CardContent className="pt-6">
        <h3 className="font-bold text-lg group-hover:text-primary transition-colors line-clamp-2">{title}</h3>
        <Button variant="link" className="px-0 mt-2 text-primary">Read More <ArrowRight className="ml-1 h-3 w-3" /></Button>
      </CardContent>
    </Card>
  )
}
