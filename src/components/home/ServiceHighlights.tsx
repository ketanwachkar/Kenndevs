"use client";

import SectionWrapper from "@/components/shared/SectionWrapper";
import GlassCard from "@/components/shared/GlassCard";
import AnimatedButton from "@/components/shared/AnimatedButton";
import { Code, Smartphone, Cloud, Brain, PenTool, ArrowRight } from "lucide-react";
import FadeIn from "../shared/FadeIn";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Crafting responsive, high-performance websites and web applications tailored to your business needs.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Building intuitive and engaging mobile applications for iOS and Android platforms.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Leveraging cloud platforms to provide scalable, secure, and cost-effective infrastructure and services.",
  },
];

const ServiceHighlights = () => {
  return (
    <SectionWrapper>
      <div className="text-center mb-12">
        <FadeIn>
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
            <GlassCard className="h-full flex flex-col items-center text-center hover:shadow-primary/30 transition-shadow duration-300">
              <div className="p-3 bg-primary/10 rounded-full mb-6 inline-block ring-1 ring-inset ring-primary/30">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-headline text-foreground mb-2">{service.title}</h3>
              <p className="text-foreground/70 text-sm flex-grow">{service.description}</p>
            </GlassCard>
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
