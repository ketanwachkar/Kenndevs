
"use client"; 

import SectionWrapper from '@/components/shared/SectionWrapper';
import ServiceCard from '@/components/services/ServiceCard';
import FadeIn from '@/components/shared/FadeIn';
import type { Service3DIconType } from '@/components/services/Service3DIcon'; // Import the 3D icon type

interface Service {
  iconType: Service3DIconType; // Use the 3D icon type
  title: string;
  description: string;
  learnMoreLink: string;
}

const services: Service[] = [
  {
    iconType: "Code",
    title: "Custom Web Development",
    description: "Bespoke web applications and platforms built with modern technologies to deliver seamless user experiences and robust performance.",
    learnMoreLink: "/services/web-development" 
  },
  {
    iconType: "Smartphone",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps for iOS and Android, designed for engagement and built for scale.",
    learnMoreLink: "/services/mobile-apps"
  },
  {
    iconType: "Cloud",
    title: "Cloud Engineering",
    description: "Architecting, migrating, and managing cloud infrastructure on AWS, Azure, and GCP for optimal scalability and security.",
    learnMoreLink: "/services/cloud-solutions"
  },
  {
    iconType: "Brain",
    title: "AI & Machine Learning",
    description: "Intelligent solutions leveraging AI and ML to automate processes, derive insights, and create innovative products.",
    learnMoreLink: "/services/ai-ml"
  },
  {
    iconType: "PenTool",
    title: "UI/UX Design",
    description: "User-centric design that combines aesthetics with usability to create intuitive and delightful digital products.",
    learnMoreLink: "/services/ui-ux-design"
  },
  {
    iconType: "Database",
    title: "Data Engineering & Analytics",
    description: "Building robust data pipelines and analytics platforms to unlock the power of your data for informed decision-making.",
    learnMoreLink: "/services/data-analytics"
  },
  {
    iconType: "ShieldCheck",
    title: "Cybersecurity Solutions",
    description: "Protecting your digital assets with comprehensive security assessments, strategies, and implementations.",
    learnMoreLink: "/services/cybersecurity"
  },
  {
    iconType: "BarChartBig",
    title: "DevOps & Automation",
    description: "Streamlining development lifecycle with CI/CD pipelines, infrastructure as code, and automated testing.",
    learnMoreLink: "/services/devops"
  },
];

export default function ServicesPage() {
  return (
    <SectionWrapper>
      <div className="text-center mb-16">
        <FadeIn>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
            Our Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 max-w-2xl mx-auto">
            NebulaCode offers a comprehensive suite of software development services. We combine technical expertise with creative problem-solving to deliver solutions that drive real business value.
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <FadeIn key={service.title} delay={index * 0.1}>
            <ServiceCard
              iconType={service.iconType}
              title={service.title}
              description={service.description}
              learnMoreLink={service.learnMoreLink}
            />
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}
