
"use client";

import GlassCard from '@/components/shared/GlassCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// Export IconName to be used in the page component for type safety
export type IconName = keyof Omit<typeof LucideIcons,
  | 'createLucideIcon'
  | 'icons'
  | 'LucideIcon'
  | 'LucideProps'
  | 'IconNode'
  | 'IconWeight'
  | 'default'
  // Add any other exports from lucide-react that are not icons if necessary
>;

interface ServiceCardProps {
  iconName: IconName;
  title: string;
  description: string;
  learnMoreLink?: string;
}

const ServiceCard = ({ iconName, title, description, learnMoreLink = "#" }: ServiceCardProps) => {
  const IconComponent = LucideIcons[iconName] as LucideIcon | undefined;

  return (
    <GlassCard
      className="h-full flex flex-col transition-all duration-300 hover:shadow-primary/40"
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center mb-4">
        <div className={`p-3 rounded-full mr-4 ring-1 ring-inset ${IconComponent ? 'bg-primary/10 ring-primary/30' : 'bg-destructive/10 ring-destructive/30'}`}>
          {IconComponent ? (
            <IconComponent className="h-7 w-7 text-primary" />
          ) : (
            <AlertTriangle className="h-7 w-7 text-destructive" />
          )}
        </div>
        <h3 className="text-xl font-bold font-headline text-foreground">{title}</h3>
      </div>
      <p className="text-foreground/70 text-sm mb-6 flex-grow">
        {description}
        {!IconComponent && (
          <span className="block text-destructive text-xs mt-1">(Icon '{iconName}' not found)</span>
        )}
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
