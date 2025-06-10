import SectionWrapper from '@/components/shared/SectionWrapper';
import ContactForm from '@/components/contact/ContactForm';
import SocialLinks from '@/components/contact/SocialLinks';
import FadeIn from '@/components/shared/FadeIn';
import { Mail, Phone, MapPin } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with NebulaCode. We are here to answer your questions about our software development services and discuss your project needs.',
};

const ContactInfoItem = ({ icon: Icon, title, children }: { icon: LucideIcon; title: string; children: React.ReactNode }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 mt-1 p-2 bg-primary/10 rounded-full ring-1 ring-inset ring-primary/30">
      <Icon className="h-5 w-5 text-primary" />
    </div>
    <div>
      <h4 className="text-lg font-semibold text-foreground">{title}</h4>
      <div className="text-foreground/70">{children}</div>
    </div>
  </div>
);

export default function ContactPage() {
  return (
    <SectionWrapper>
      <div className="text-center mb-16">
        <FadeIn>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
            Let's Connect
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 max-w-2xl mx-auto">
            Have a project in mind, a question about our services, or just want to say hello? We'd love to hear from you.
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <FadeIn delay={0.1}>
          <ContactForm />
        </FadeIn>
        
        <FadeIn delay={0.2} className="space-y-8">
          <div className="p-6 rounded-lg bg-background/50 border border-white/10">
            <h3 className="text-2xl font-bold mb-6 font-headline text-foreground">Contact Information</h3>
            <div className="space-y-6">
              <ContactInfoItem icon={Mail} title="Email Us">
                <a href="mailto:hello@nebulacode.com" className="hover:text-primary">hello@nebulacode.com</a>
              </ContactInfoItem>
              <ContactInfoItem icon={Phone} title="Call Us">
                <a href="tel:+12345678900" className="hover:text-primary">+1 (234) 567-8900</a>
              </ContactInfoItem>
              <ContactInfoItem icon={MapPin} title="Our Office">
                123 Innovation Drive, Tech City, TX 75001, USA <br />
                (Visits by appointment only)
              </ContactInfoItem>
            </div>
          </div>
          <SocialLinks />
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
