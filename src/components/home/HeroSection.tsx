
"use client";

import AnimatedButton from '@/components/shared/AnimatedButton';
import FadeIn from '@/components/shared/FadeIn';
import { ArrowRight, Zap } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import dynamic from 'next/dynamic';

// Dynamically import Hero3DScene with SSR disabled and a loading placeholder
const Hero3DScene = dynamic(() => import('./Hero3DScene'), {
  ssr: false,
  loading: () => <div style={{ position: 'absolute', inset: 0, zIndex: 0, background: 'transparent' }} aria-hidden="true" />,
});

const HeroSection = () => {
  return (
    <div className="relative isolate overflow-hidden min-h-[calc(100vh-5rem)] flex items-center justify-center py-20">
      {/* 3D Scene */}
      <Hero3DScene />

      {/* Subtle animated background elements - kept for layering if desired, adjust z-index if needed */}
      <div className="absolute inset-0 -z-10 overflow-hidden [mask-image:radial-gradient(closest-side,white,transparent)]">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-primary/10 "
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-accent/5">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"> {/* Ensure content is above 3D scene */}
        <FadeIn yOffset={0} duration={0.8}>
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6 ring-1 ring-inset ring-primary/30">
            <Zap className="h-4 w-4" />
            <span>Powering Digital Transformation</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} duration={0.8}>
          <h1 className="text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/70 sm:text-7xl lg:text-8xl font-headline">
            Build Better, <span className="text-primary">Faster</span>.
          </h1>
        </FadeIn>

        <FadeIn delay={0.4} duration={0.8}>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-foreground/80 sm:text-xl">
            NebulaCode translates complex challenges into elegant software solutions. We partner with businesses to innovate, scale, and lead in the digital era.
          </p>
        </FadeIn>

        <FadeIn delay={0.6} duration={0.8} className="mt-10 flex items-center justify-center gap-x-6">
          <AnimatedButton href="/services" size="lg" icon={ArrowRight}>
            Explore Services
          </AnimatedButton>
          <Button variant="outline" size="lg" asChild className="text-foreground/80 hover:bg-white/5 hover:border-primary/50 hover:text-primary transition-colors">
            <a href="/contact">Learn More</a>
          </Button>
        </FadeIn>

        <FadeIn delay={0.8} duration={1} className="mt-16 sm:mt-24">
           <div className="relative group aspect-[2/1] w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl shadow-primary/20 glassmorphic">
            <Image
                src="https://placehold.co/1200x600.png"
                alt="Abstract visual representing cutting-edge technology and digital innovation."
                width={1200}
                height={600}
                priority
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 opacity-50 group-hover:opacity-75" // Adjusted opacity for 3D visibility
                data-ai-hint="abstract technology"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent"></div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default HeroSection;
