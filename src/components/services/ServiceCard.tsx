
"use client";

import GlassCard from '@/components/shared/GlassCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, type LucideIcon } from 'lucide-react'; // Import LucideIcon type
import Link from 'next/link';

interface ServiceCardProps {
  icon: LucideIcon; // Changed from iconType to icon, expecting a Lucide component
  title: string;
  description: string;
  learnMoreLink?: string;
}

const ServiceCard = ({ icon: Icon, title, description, learnMoreLink = "#" }: ServiceCardProps) => {
  return (
    <GlassCard
      className="h-full flex flex-col transition-all duration-300 hover:shadow-primary/40"
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-primary/10 rounded-full mr-4 ring-1 ring-inset ring-primary/30">
          <Icon className="h-7 w-7 text-primary" /> {/* Render the passed Icon component */}
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
