
"use client";

import GlassCard from '@/components/shared/GlassCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, type LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  learnMoreLink?: string;
}

const ServiceCard = ({ icon: Icon, title, description, learnMoreLink = "#" }: ServiceCardProps) => {
  if (!Icon) {
    // Basic fallback or error logging if an icon is somehow not provided, though TypeScript should catch this.
    console.error("ServiceCard: Icon component is missing for title:", title);
    return (
      <GlassCard className="h-full flex flex-col items-center justify-center text-destructive">
        Error: Icon missing
      </GlassCard>
    );
  }

  return (
    <GlassCard
      className="h-full flex flex-col transition-all duration-300 hover:shadow-primary/40"
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-primary/10 rounded-full mr-4 ring-1 ring-inset ring-primary/30">
          <Icon className="h-7 w-7 text-primary" />
        </div>
        <h3 className="text-xl font-bold font-headline text-foreground">{title}</h3>
      </div>
      <p className="text-foreground/70 text-sm mb-6 flex-grow">
        {description}
      </p>
      <Button variant="link" asChild className="text-primary hover:text-accent p-0 self-start mt-auto">
        <Link href={learnMoreLink}>
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </GlassCard>
  );
};

export default ServiceCard;
