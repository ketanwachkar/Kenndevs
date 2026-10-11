import SectionWrapper from '@/components/shared/SectionWrapper';
import FadeIn from '@/components/shared/FadeIn';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read KennStack\'s Terms of Service governing the use of our website and services.',
};

export default function TermsOfServicePage() {
  return (
    <SectionWrapper>
      <FadeIn>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-8 font-headline text-center">
            Terms of Service
          </h1>

          <div className="prose prose-invert prose-lg max-w-none 
                         prose-headings:font-headline prose-headings:text-foreground
                         prose-p:text-foreground/80 prose-a:text-primary hover:prose-a:text-accent
                         prose-strong:text-foreground/90 prose-blockquote:border-primary
                         prose-ul:text-foreground/80 prose-li:marker:text-primary">
            <p className="text-sm text-foreground/70">Last updated: July 18, 2024</p>

            <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the KennStack website (the "Service") operated by KennStack ("us", "we", or "our").</p>
            <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.</p>
            <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>

            <h2 className="font-headline">Intellectual Property</h2>
            <p>The Service and its original content, features, and functionality are and will remain the exclusive property of KennStack and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.</p>
            <p>[Placeholder for more detailed sections: Links To Other Web Sites, Termination, Limitation Of Liability, Disclaimer, Governing Law, Changes, Contact Us]</p>
            
            <h2 className="font-headline">Changes</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

            <h2 className="font-headline">Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us:</p>
            <ul>
              <li>By email: legal@KennStack.com</li>
              <li>By visiting this page on our website: <a href="/contact">www.KennStack.com/contact</a></li>
            </ul>
          </div>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
