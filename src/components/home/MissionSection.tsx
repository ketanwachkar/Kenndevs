"use client";

import SectionWrapper from "@/components/shared/SectionWrapper";
import FadeIn from "@/components/shared/FadeIn";
import { Target } from "lucide-react";

const MissionSection = () => {
  return (
    <SectionWrapper className="bg-background/30">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6 ring-1 ring-inset ring-primary/30">
            <Target className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Our Mission
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            At NebulaCode, our mission is to empower businesses with transformative technology. We strive to deliver innovative, reliable, and scalable software solutions that drive growth, efficiency, and competitive advantage for our clients worldwide.
          </p>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
};

export default MissionSection;
