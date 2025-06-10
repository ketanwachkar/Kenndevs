"use client";

import { SOCIAL_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import GlassCard from '../shared/GlassCard';

const SocialLinks = () => {
  return (
    <GlassCard className="mt-12">
      <h3 className="text-2xl font-bold text-center mb-6 font-headline text-foreground">Follow Us</h3>
      <div className="flex justify-center space-x-4">
        {SOCIAL_LINKS.map((social) => (
          <Button key={social.label} variant="outline" size="icon" asChild className="rounded-full border-primary/50 hover:bg-primary/20 hover:border-primary transition-all duration-300 transform hover:scale-110">
            <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
              <social.icon className="h-6 w-6 text-primary" />
            </Link>
          </Button>
        ))}
      </div>
    </GlassCard>
  );
};

export default SocialLinks;
