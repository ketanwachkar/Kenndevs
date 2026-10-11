"use client";

import SectionWrapper from '@/components/shared/SectionWrapper';
import FadeIn from '@/components/shared/FadeIn';
import GlassCard from '@/components/shared/GlassCard';
import CyberBackground from '@/components/shared/CyberBackground';
import PortfolioVisual from '@/components/portfolio/PortfolioVisual';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ExternalLink, Sparkles, Trophy, ArrowRight } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  description: string;
  visualType: "ecommerce" | "healthcare" | "cloud" | "cybersecurity";
  tags: string[];
  impactMetric: string;
  caseStudyLink: string;
  liveLink?: string;
}

const projects: Project[] = [
  {
    title: "E-commerce Platform Overhaul",
    category: "Web Development",
    description: "Revitalized a major online retailer's platform with Next.js 15, sub-second page loads, and real-time checkout conversion optimization.",
    visualType: "ecommerce",
    tags: ["Next.js", "GraphQL", "Stripe API", "Tailwind CSS"],
    impactMetric: "+40% Conversion Boost",
    caseStudyLink: "/portfolio/ecommerce-overhaul",
    liveLink: "https://example.com",
  },
  {
    title: "AI-Powered Healthcare App",
    category: "Mobile & AI",
    description: "Developed an innovative mobile application for real-time patient ECG monitoring using custom neural networks and automated alert triggers.",
    visualType: "healthcare",
    tags: ["React Native", "PyTorch", "Biometrics", "WebSockets"],
    impactMetric: "99.4% Diagnostic Accuracy",
    caseStudyLink: "/portfolio/healthcare-app",
    liveLink: "https://example.com",
  },
  {
    title: "Cloud Migration for Fintech",
    category: "Cloud Solutions",
    description: "Successfully migrated a financial institution's legacy mainframe systems to a multi-region zero-downtime AWS Kubernetes cluster.",
    visualType: "cloud",
    tags: ["AWS", "Kubernetes", "Terraform", "PostgreSQL"],
    impactMetric: "99.999% SLA Uptime",
    caseStudyLink: "/portfolio/fintech-cloud-migration",
    liveLink: "https://example.com",
  },
  {
    title: "Zero-Trust Cybersecurity Shield",
    category: "Security Engineering",
    description: "Built an enterprise-grade automated threat prevention & SOC2 compliance monitoring matrix for high-growth SaaS platforms.",
    visualType: "cybersecurity",
    tags: ["Zero-Trust", "Go", "eBPF", "SOC2 Compliance"],
    impactMetric: "1.2M Threats Blocked",
    caseStudyLink: "/portfolio/cybersecurity-shield",
    liveLink: "https://example.com",
  },
];

export default function PortfolioPage() {
  return (
    <div className="relative">
      <CyberBackground />

      <SectionWrapper>
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4 ring-1 ring-inset ring-primary/30">
              <Trophy className="h-4 w-4 text-primary" />
              <span>Proven Track Record of Excellence</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
              Our <span className="text-primary">Featured Work</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-foreground/80 max-w-2xl mx-auto">
              Explore our showcase of production-ready digital products, cloud architecture migrations, and AI solutions engineered for market leaders.
            </p>
          </FadeIn>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1}>
              <GlassCard className="flex flex-col h-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 group rounded-2xl">
                {/* Animated Interactive Visual Component Header */}
                <div className="relative w-full h-[220px]">
                  <PortfolioVisual type={project.visualType} />
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
                        {project.category}
                      </span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {project.impactMetric}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-headline text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-foreground/75 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-foreground/70">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <Button variant="outline" size="sm" asChild className="text-primary border-primary/40 hover:bg-primary/10">
                        <Link href={project.caseStudyLink}>
                          View Case Study
                        </Link>
                      </Button>
                      
                      {project.liveLink && (
                        <Button size="sm" asChild className="bg-primary hover:bg-accent text-primary-foreground">
                          <Link href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                            <span>Live Demo</span>
                            <ExternalLink className="h-3.5 w-3.5" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <FadeIn className="mt-20 text-center">
          <div className="p-8 md:p-12 rounded-3xl bg-card/60 border border-white/10 backdrop-blur-xl relative overflow-hidden max-w-3xl mx-auto">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
            <h3 className="text-2xl font-bold text-foreground mb-3 font-headline">Have a unique vision for your product?</h3>
            <p className="text-foreground/70 mb-6 max-w-lg mx-auto text-sm">
              We partner with startups and enterprises to prototype, build, and deploy custom software tailored to exact specifications.
            </p>
            <Button size="lg" asChild className="bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg shadow-primary/25">
              <Link href="/contact" className="flex items-center gap-2">
                Discuss Your Project <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </SectionWrapper>
    </div>
  );
}
