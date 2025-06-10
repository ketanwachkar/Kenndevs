
import SectionWrapper from '@/components/shared/SectionWrapper';
import FadeIn from '@/components/shared/FadeIn';
import GlassCard from '@/components/shared/GlassCard';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Portfolio',
  description: 'Explore a selection of our successful projects and case studies, showcasing NebulaCode\'s expertise in delivering impactful software solutions.',
};

const projects = [
  {
    title: "E-commerce Platform Overhaul",
    category: "Web Development",
    description: "Revitalized a major online retailer's platform, resulting in a 40% increase in conversions and improved user experience.",
    imageUrl: "https://placehold.co/800x600.png",
    altText: "Mockup of a modern e-commerce website interface on a laptop screen.",
    dataAiHint: "ecommerce website", // Added dataAiHint
    liveLink: "#",
    caseStudyLink: "/portfolio/ecommerce-overhaul",
  },
  {
    title: "AI-Powered Healthcare App",
    category: "Mobile & AI",
    description: "Developed an innovative mobile application for patient monitoring using AI, enhancing remote healthcare capabilities.",
    imageUrl: "https://placehold.co/800x600.png",
    altText: "Smartphone displaying an AI-powered healthcare application interface.",
    dataAiHint: "mobile health", // Added dataAiHint
    liveLink: "#",
    caseStudyLink: "/portfolio/healthcare-app",
  },
  {
    title: "Cloud Migration for Fintech",
    category: "Cloud Solutions",
    description: "Successfully migrated a financial institution's legacy systems to a secure and scalable cloud infrastructure.",
    imageUrl: "https://placehold.co/800x600.png",
    altText: "Abstract representation of cloud data security for a fintech company.",
    dataAiHint: "cloud fintech", // Added dataAiHint
    liveLink: "#",
    caseStudyLink: "/portfolio/fintech-cloud-migration",
  },
];

export default function PortfolioPage() {
  return (
    <SectionWrapper>
      <div className="text-center mb-16">
        <FadeIn>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
            Our Work
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 max-w-2xl mx-auto">
            We take pride in the solutions we deliver. Explore some of our featured projects that demonstrate our commitment to quality, innovation, and client success.
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <FadeIn key={project.title} delay={index * 0.1}>
            <GlassCard className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-primary/40 group">
              <div className="relative aspect-video w-full">
                <Image
                  src={project.imageUrl}
                  alt={project.altText || project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={project.dataAiHint}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">{project.category}</span>
                <h3 className="text-xl font-bold font-headline text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-foreground/70 mb-4 flex-grow line-clamp-3">{project.description}</p>
                <div className="mt-auto flex space-x-2">
                  <Button variant="outline" asChild className="text-primary border-primary/50 hover:bg-primary/10">
                    <Link href={project.caseStudyLink}>
                      Case Study
                    </Link>
                  </Button>
                  {project.liveLink !== "#" && (
                    <Button variant="default" asChild className="bg-primary hover:bg-accent text-primary-foreground">
                      <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </GlassCard>
          </FadeIn>
        ))}
      </div>
      
      <FadeIn className="mt-16 text-center">
        <p className="text-lg text-foreground/70">
          Interested in learning more about how we can help your business?
        </p>
        <Button size="lg" asChild className="mt-4 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground">
          <Link href="/contact">
            Contact Us Today
          </Link>
        </Button>
      </FadeIn>
    </SectionWrapper>
  );
}
