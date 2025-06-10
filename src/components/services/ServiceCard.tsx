
"use client";

import GlassCard from '@/components/shared/GlassCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';

// Define a type for the icon names we expect to use from lucide-react
// This provides better type safety than just 'string'.
// We filter out non-component exports like 'LucideIcon' type itself.
type IconName = keyof Omit<typeof LucideIcons, 
  | 'createLucideIcon' 
  | 'icons' 
  | 'LucideIcon' 
  | 'LucideProps' 
  | 'IconNode' 
  | 'IconWeight' 
  | 'default'
>;

interface ServiceCardProps {
  iconName: IconName;
  title: string;
  description: string;
  learnMoreLink?: string;
}

const ServiceCard = ({ iconName, title, description, learnMoreLink = "#" }: ServiceCardProps) => {
  const IconComponent = LucideIcons[iconName] as LucideIcons.LucideIcon;

  if (!IconComponent) {
    // Fallback or error handling if iconName is invalid
    console.warn(\`Icon "\${iconName}" not found in lucide-react library.\`);
    return (
      <GlassCard 
        className="h-full flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-primary/40"
        whileHover={{ y: -5 }}
      >
        <div className="flex items-center mb-4">
          <div className="p-3 bg-destructive/10 rounded-full mr-4 ring-1 ring-inset ring-destructive/30">
            <LucideIcons.AlertTriangle className="h-7 w-7 text-destructive" />
          </div>
          <h3 className="text-xl font-bold font-headline text-foreground">{title}</h3>
        </div>
        <p className="text-foreground/70 text-sm mb-6 flex-grow">
          {description} (Icon not found: {iconName})
        </p>
        <Button variant="link" asChild className="text-primary hover:text-accent p-0 self-start">
          <Link href={learnMoreLink}>
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </GlassCard>
    );
  }

  return (
    <GlassCard 
      className="h-full flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-primary/40"
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-primary/10 rounded-full mr-4 ring-1 ring-inset ring-primary/30">
          <IconComponent className="h-7 w-7 text-primary" />
        </div>
        <h3 className="text-xl font-bold font-headline text-foreground">{title}</h3>
      </div>
      <p className="text-foreground/70 text-sm mb-6 flex-grow">
        {description}
      </p>
      <Button variant="link" asChild className="text-primary hover:text-accent p-0 self-start">
        <Link href={learnMoreLink}>
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </GlassCard>
  );
};

export default ServiceCard;
