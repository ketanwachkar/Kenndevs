"use client";

import SectionWrapper from "@/components/shared/SectionWrapper";
import ServiceCard from "@/components/services/ServiceCard";
import AnimatedButton from "@/components/shared/AnimatedButton";
import { Code, Smartphone, Cloud, ArrowRight, Sparkles } from "lucide-react";
import FadeIn from "../shared/FadeIn";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Crafting responsive, high-performance web applications tailored to enterprise scale.",
    learnMoreLink: "/services",
    tags: ["Next.js", "React", "TypeScript"],
    metricsBadge: "Sub-Second Speed",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Building intuitive and engaging native & cross-platform mobile apps for iOS and Android.",
    learnMoreLink: "/services",
    tags: ["React Native", "iOS", "Android"],
    metricsBadge: "60 FPS Native",
  },
  {
    icon: Cloud,
    title: "Cloud Engineering",
    description: "Architecting scalable cloud infrastructure on AWS, Azure, and GCP for optimal reliability.",
    learnMoreLink: "/services",
    tags: ["AWS", "Kubernetes", "Docker"],
    metricsBadge: "99.99% Availability",
  },
];

const ServiceHighlights = () => {
  return (
    <SectionWrapper>
      <div className="text-center mb-12">
        <FadeIn>
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-3 ring-1 ring-inset ring-primary/30">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>Core Capabilities</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Our Core Expertise
          </h2>
          <p className="mt-4 text-lg leading-8 text-foreground/80 max-w-2xl mx-auto">
            We offer a comprehensive suite of software development services designed to elevate your business.
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <FadeIn key={service.title} delay={index * 0.1}>
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

      <FadeIn className="mt-12 text-center">
        <AnimatedButton href="/services" icon={ArrowRight}>
          Discover All Services
        </AnimatedButton>
      </FadeIn>
    </SectionWrapper>
  );
};

export default ServiceHighlights;
