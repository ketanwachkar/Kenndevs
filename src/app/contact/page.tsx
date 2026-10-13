"use client";

import SectionWrapper from '@/components/shared/SectionWrapper';
import ContactForm from '@/components/contact/ContactForm';
import SocialLinks from '@/components/contact/SocialLinks';
import FadeIn from '@/components/shared/FadeIn';
import CyberBackground from '@/components/shared/CyberBackground';
import GlobalPresenceMap from '@/components/contact/GlobalPresenceMap';
import { Mail, Phone, MapPin, MessageSquare, type LucideIcon, Sparkles } from 'lucide-react';

const ContactInfoItem = ({ icon: Icon, title, children }: { icon: LucideIcon; title: string; children: React.ReactNode }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 mt-1 p-2.5 bg-primary/10 rounded-xl ring-1 ring-inset ring-primary/30">
      <Icon className="h-5 w-5 text-primary" />
    </div>
    <div>
      <h4 className="text-base font-bold text-foreground font-headline">{title}</h4>
      <div className="text-foreground/75 text-sm leading-relaxed mt-0.5">{children}</div>
    </div>
  </div>
);

export default function ContactPage() {
  return (
    <div className="relative">
      <CyberBackground />

      <SectionWrapper>
        {/* Page Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4 ring-1 ring-inset ring-primary/30">
              <MessageSquare className="h-4 w-4 text-primary" />
              <span>Direct Engineering & Consultation Access</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
              Let's <span className="text-primary">Connect</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-foreground/80 max-w-2xl mx-auto">
              Have a complex software challenge, cloud migration inquiry, or AI project? Reach out directly to our engineering leadership in <strong className="text-primary font-semibold">Pune</strong>.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Contact Form */}
          <FadeIn delay={0.1}>
            <ContactForm />
          </FadeIn>
          
          {/* Right Side: Contact Info & Interactive Global Map */}
          <FadeIn delay={0.2} className="space-y-8">
            <div className="p-8 rounded-2xl bg-card/60 backdrop-blur-xl border border-white/10 shadow-2xl space-y-6">
              <h3 className="text-2xl font-bold font-headline text-foreground flex items-center gap-2">
                <span>Contact Information</span>
                <Sparkles className="h-4 w-4 text-primary" />
              </h3>

              <div className="space-y-6">
                <ContactInfoItem icon={Mail} title="Direct Email Support">
                  <a href="mailto:ketanwachar2000@gmail.com" className="hover:text-primary transition-colors font-mono font-semibold text-primary">
                    ketanwachar2000@gmail.com
                  </a>
                </ContactInfoItem>

                <ContactInfoItem icon={Phone} title="Direct Phone Hotline">
                  <a href="tel:+919039904938" className="hover:text-primary transition-colors font-mono">
                    +91 90399 04938
                  </a>
                </ContactInfoItem>

                <ContactInfoItem icon={MapPin} title="Pune Technology Hub (India)">
                  World Trade Center, Kharadi & Baner IT Park,<br />
                  Pune, Maharashtra 411014, India
                </ContactInfoItem>
              </div>
            </div>

            {/* Global Operations & Office Locations Map */}
            <GlobalPresenceMap />

            <SocialLinks />
          </FadeIn>
        </div>
      </SectionWrapper>
    </div>
  );
}
