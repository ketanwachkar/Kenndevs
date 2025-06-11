
import SectionWrapper from '@/components/shared/SectionWrapper';
import FadeIn from '@/components/shared/FadeIn';
import GlassCard from '@/components/shared/GlassCard';
import AnimatedButton from '@/components/shared/AnimatedButton';
import Image from 'next/image';
import { Briefcase, Users, Coffee, ArrowRight, Zap } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join the KennStack team! Explore exciting career opportunities and learn about our company culture.',
};

const jobOpenings = [
  {
    title: "Senior Full-Stack Developer",
    location: "Remote / Tech City, TX",
    type: "Full-time",
    description: "We are seeking an experienced Full-Stack Developer to build and maintain scalable web applications. Proficiency in Next.js, Node.js, and cloud platforms is a must.",
    applyLink: "#"
  },
  {
    title: "UI/UX Designer",
    location: "Tech City, TX",
    type: "Full-time",
    description: "Join our creative team to design intuitive and visually appealing user interfaces for web and mobile applications. Strong portfolio required.",
    applyLink: "#"
  },
  {
    title: "DevOps Engineer",
    location: "Remote",
    type: "Contract",
    description: "Experienced DevOps engineer needed to manage CI/CD pipelines, automate infrastructure, and ensure system reliability.",
    applyLink: "#"
  }
];

const perks = [
  { icon: Coffee, title: "Competitive Salary & Benefits" },
  { icon: Users, title: "Collaborative Culture" },
  { icon: Briefcase, title: "Professional Growth Opportunities" },
  { icon: Zap, title: "Work on Cutting-Edge Tech" }
];


export default function CareersPage() {
  return (
    <>
      <SectionWrapper className="bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="text-center">
          <FadeIn>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
              Join Our Team
            </h1>
            <p className="mt-6 text-lg leading-8 text-foreground/80 max-w-3xl mx-auto">
              At KennStack, we're building the future of software, and we're looking for talented, passionate individuals to join us on our mission. If you're driven by innovation and thrive in a collaborative environment, we'd love to hear from you.
            </p>
          </FadeIn>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Why Work With Us?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {perks.map((perk, index) => (
              <GlassCard key={perk.title} className="text-center h-full">
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 ring-1 ring-inset ring-primary/30">
                  <perk.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold font-headline text-foreground">{perk.title}</h3>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
      </SectionWrapper>

      <SectionWrapper className="bg-background/30">
        <div className="text-center mb-12">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Current Openings</h2>
            <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
              Find your next challenge and opportunity to grow with KennStack.
            </p>
          </FadeIn>
        </div>
        <div className="space-y-8 max-w-3xl mx-auto">
          {jobOpenings.length > 0 ? jobOpenings.map((job, index) => (
            <FadeIn key={job.title} delay={index * 0.1}>
              <GlassCard className="p-6">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                  <h3 className="text-xl font-bold font-headline text-foreground">{job.title}</h3>
                  <span className="text-sm text-primary bg-primary/10 px-2 py-0.5 rounded-full mt-2 sm:mt-0">{job.type}</span>
                </div>
                <p className="text-sm text-foreground/70 mb-1">{job.location}</p>
                <p className="text-sm text-foreground/70 mb-4">{job.description}</p>
                <AnimatedButton href={job.applyLink} icon={ArrowRight} size="sm">
                  Apply Now
                </AnimatedButton>
              </GlassCard>
            </FadeIn>
          )) : (
            <FadeIn>
              <p className="text-center text-foreground/70 text-lg">
                We don't have any open positions at the moment, but we're always interested in hearing from talented individuals. Feel free to send your resume to <a href="mailto:careers@KennStack.com" className="text-primary hover:underline">careers@KennStack.com</a>.
              </p>
            </FadeIn>
          )}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <FadeIn className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl font-headline">Our Culture</h2>
            <div className="relative aspect-video max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg my-8">
              <Image src="https://placehold.co/1000x560.png" alt="KennStack team working in a vibrant and collaborative modern office environment." layout="fill" objectFit="cover" data-ai-hint="office team" />
            </div>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              We foster a culture of innovation, learning, and mutual respect. At KennStack, you'll work with cutting-edge technologies, solve challenging problems, and make a real impact.
            </p>
        </FadeIn>
      </SectionWrapper>
    </>
  );
}
