"use client";

import SectionWrapper from '@/components/shared/SectionWrapper';
import ServiceCard from '@/components/services/ServiceCard';
import FadeIn from '@/components/shared/FadeIn';
import CyberBackground from '@/components/shared/CyberBackground';
import { 
  Code, Smartphone, Cloud, Brain, PenTool, 
  Database, ShieldCheck, BarChartBig, type LucideIcon, Sparkles, CheckCircle, ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  learnMoreLink: string;
  tags: string[];
  metricsBadge: string;
}

const services: Service[] = [
  {
    icon: Code,
    title: "Custom Web Development",
    description: "Bespoke web applications and platforms built with Next.js, React, and Node.js to deliver seamless user experiences and robust performance.",
    learnMoreLink: "/services/web-development",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    metricsBadge: "Ultra Fast",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps for iOS and Android built with React Native and Flutter, designed for high user engagement.",
    learnMoreLink: "/services/mobile-apps",
    tags: ["React Native", "Flutter", "iOS", "Android"],
    metricsBadge: "60 FPS Native",
  },
  {
    icon: Cloud,
    title: "Cloud Engineering",
    description: "Architecting, migrating, and managing cloud infrastructure on AWS, Azure, and GCP for optimal scalability, resilience, and security.",
    learnMoreLink: "/services/cloud-solutions",
    tags: ["AWS", "Kubernetes", "Docker", "Terraform"],
    metricsBadge: "99.99% SLA",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent solutions leveraging LLMs, PyTorch, and RAG pipelines to automate processes, derive deep insights, and build smart AI products.",
    learnMoreLink: "/services/ai-ml",
    tags: ["PyTorch", "LLMs", "RAG", "Python"],
    metricsBadge: "GenAI Powered",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description: "User-centric design system creation and interactive prototyping that combines visual aesthetics with high conversion rates.",
    learnMoreLink: "/services/ui-ux-design",
    tags: ["Figma", "Design Systems", "Prototyping", "UX"],
    metricsBadge: "Award Winning",
  },
  {
    icon: Database,
    title: "Data Engineering & Analytics",
    description: "Building robust real-time data pipelines, Snowflake warehouses, and analytics platforms for data-driven enterprise growth.",
    learnMoreLink: "/services/data-analytics",
    tags: ["Snowflake", "PostgreSQL", "Kafka", "Spark"],
    metricsBadge: "Real-Time ETL",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Solutions",
    description: "Protecting digital assets with zero-trust architecture, penetration testing, compliance audits, and real-time threat monitoring.",
    learnMoreLink: "/services/cybersecurity",
    tags: ["Zero-Trust", "SOC2", "PenTesting", "Encryption"],
    metricsBadge: "Bank-Grade",
  },
  {
    icon: BarChartBig,
    title: "DevOps & Automation",
    description: "Streamlining development lifecycles with automated CI/CD pipelines, automated testing, and zero-downtime blue/green deployments.",
    learnMoreLink: "/services/devops",
    tags: ["CI/CD", "GitHub Actions", "ArgoCD", "Helm"],
    metricsBadge: "Auto-Scale",
  },
];

export default function ServicesPage() {
  return (
    <div className="relative">
      <CyberBackground />
      
      <SectionWrapper>
        <div className="text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4 ring-1 ring-inset ring-primary/30">
              <Sparkles className="h-4 w-4 animate-spin text-primary" />
              <span>Tailored Digital Engineering</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
              Our <span className="text-primary">Services</span> & Capabilities
            </h1>
            <p className="mt-6 text-lg leading-8 text-foreground/80 max-w-2xl mx-auto">
              KennStack offers a comprehensive suite of software development services. We combine technical expertise with creative problem-solving to deliver solutions that drive real business value.
            </p>
          </FadeIn>
        </div>

        {/* Services Grid with Cursor Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.08}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                learnMoreLink={service.learnMoreLink}
                tags={service.tags}
                metricsBadge={service.metricsBadge}
              />
            </FadeIn>
          ))}
        </div>

        {/* Dynamic Interactive Callout Section to fill empty space */}
        <FadeIn className="mt-20">
          <div className="relative rounded-3xl overflow-hidden border border-primary/40 bg-gradient-to-r from-primary/15 via-accent/10 to-background p-8 md:p-12 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2 space-y-4">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
                  Custom Architecture Advisory
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground font-headline">
                  Need a Custom Enterprise Solution or AI Architecture?
                </h3>
                <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
                  Our senior architects work directly with your engineering team to design custom microservices, conduct cloud audits, and prototype AI workflows.
                </p>
                <div className="flex flex-wrap gap-4 pt-2 text-xs font-medium text-foreground/90">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    <span>24/7 Dedicated Support</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    <span>Fixed Scope or Staff Augmentation</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    <span>Free Architectural Audit</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-1 flex flex-col items-center justify-center space-y-4 text-center border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
                <span className="text-sm text-foreground/70">Ready to start?</span>
                <Button size="lg" asChild className="w-full bg-primary hover:bg-accent text-primary-foreground font-semibold shadow-lg shadow-primary/25">
                  <Link href="/contact" className="flex items-center justify-center gap-2">
                    Book Free Consultation <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </SectionWrapper>
    </div>
  );
}
