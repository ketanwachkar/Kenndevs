
"use client";

import GlassCard from '@/components/shared/GlassCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import Service3DIcon, { type Service3DIconType } from './Service3DIcon'; // Import 3D icon and its type

interface ServiceCardProps {
  iconType: Service3DIconType; // Changed from iconName to iconType
  title: string;
  description: string;
  learnMoreLink?: string;
}

const ServiceCard = ({ iconType, title, description, learnMoreLink = "#" }: ServiceCardProps) => {
  return (
    <GlassCard
      className="h-full flex flex-col transition-all duration-300 hover:shadow-primary/40"
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center mb-4">
        {/* Replace 2D icon with 3D icon component */}
        <Service3DIcon iconType={iconType} className="mr-4" />
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
// Export Service3DIconType if it's needed by other components, though it's primarily used here and in service/page.tsx
export type { Service3DIconType };
