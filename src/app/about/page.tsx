
import SectionWrapper from '@/components/shared/SectionWrapper';
import FadeIn from '@/components/shared/FadeIn';
import Image from 'next/image';
import { Users, Target, Eye, ShieldCheck, Zap } from 'lucide-react';
import GlassCard from '@/components/shared/GlassCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about NebulaCode\'s story, mission, vision, and the talented team dedicated to delivering exceptional software solutions.',
};

const teamMembers = [
  { name: "Alice Johnson", role: "CEO & Founder", imageUrl: "https://source.unsplash.com/featured/400x400/?woman,professional,portrait,ceo", altText: "Alice Johnson, CEO and Founder of NebulaCode" },
  { name: "Bob Williams", role: "CTO", imageUrl: "https://source.unsplash.com/featured/400x400/?man,tech,professional,cto", altText: "Bob Williams, CTO of NebulaCode" },
  { name: "Carol Davis", role: "Lead Designer", imageUrl: "https://source.unsplash.com/featured/400x400/?woman,creative,designer,portrait", altText: "Carol Davis, Lead Designer at NebulaCode" },
  { name: "David Miller", role: "Head of Engineering", imageUrl: "https://source.unsplash.com/featured/400x400/?man,engineer,professional,portrait", altText: "David Miller, Head of Engineering at NebulaCode" },
];

const values = [
  { icon: Zap, title: "Innovation", description: "We constantly explore new technologies and approaches to deliver cutting-edge solutions." },
  { icon: ShieldCheck, title: "Integrity", description: "We operate with transparency and honesty in all our interactions." },
  { icon: Users, title: "Collaboration", description: "We believe in the power of teamwork, both internally and with our clients." },
  { icon: Target, title: "Excellence", description: "We are committed to delivering high-quality work that exceeds expectations." },
];

export default function AboutPage() {
  return (
    <>
      <SectionWrapper className="bg-gradient-to-b from-background via-accent/5 to-background">
        <div className="text-center">
          <FadeIn>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
              About NebulaCode
            </h1>
            <p className="mt-6 text-lg leading-8 text-foreground/80 max-w-3xl mx-auto">
              We are a passionate team of innovators, thinkers, and creators dedicated to crafting exceptional digital experiences and robust software solutions that drive business success.
            </p>
          </FadeIn>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline mb-6">Our Story</h2>
              <p className="text-foreground/80 mb-4">
                Founded in [Year], NebulaCode was born from a shared vision to bridge the gap between complex business challenges and elegant technological solutions. Our journey began with a small team of dedicated professionals and has since grown into a dynamic company serving clients across various industries.
              </p>
              <p className="text-foreground/80">
                We believe that technology, when applied thoughtfully, can be a powerful catalyst for change and growth. Our commitment is to not just build software, but to build partnerships and deliver lasting value.
              </p>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
              <Image src="https://source.unsplash.com/featured/800x600/?team,collaboration,office,software,tech" alt="NebulaCode team collaborating in a modern office setting" layout="fill" objectFit="cover" />
            </div>
          </div>
        </FadeIn>
      </SectionWrapper>
      
      <SectionWrapper className="bg-background/30">
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center text-primary mb-3">
                <Target className="h-8 w-8 mr-3" />
                <h3 className="text-2xl font-bold font-headline">Our Mission</h3>
              </div>
              <p className="text-foreground/80">To empower businesses with transformative technology, delivering innovative, reliable, and scalable software solutions that drive growth and competitive advantage.</p>
            </div>
            <div>
              <div className="flex items-center text-primary mb-3">
                <Eye className="h-8 w-8 mr-3" />
                <h3 className="text-2xl font-bold font-headline">Our Vision</h3>
              </div>
              <p className="text-foreground/80">To be a globally recognized leader in software innovation, known for our commitment to excellence, client success, and ethical practices.</p>
            </div>
          </div>
        </FadeIn>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center mb-12">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Our Core Values</h2>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <FadeIn key={value.title} delay={index * 0.1}>
              <GlassCard className="text-center h-full">
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 ring-1 ring-inset ring-primary/30">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-headline text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-foreground/70">{value.description}</p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-background/30">
        <div className="text-center mb-12">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Meet Our Team</h2>
            <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
              The driving force behind NebulaCode's success is our talented and dedicated team of professionals.
            </p>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <FadeIn key={member.name} delay={index * 0.1}>
              <GlassCard className="text-center">
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-2 border-primary/50">
                  <Image src={member.imageUrl} alt={member.altText} layout="fill" objectFit="cover" />
                </div>
                <h3 className="text-lg font-semibold font-headline text-foreground">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
