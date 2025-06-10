import SectionWrapper from '@/components/shared/SectionWrapper';
import FadeIn from '@/components/shared/FadeIn';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read NebulaCode\'s Privacy Policy to understand how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <SectionWrapper>
      <FadeIn>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-8 font-headline text-center">
            Privacy Policy
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none 
                         prose-headings:font-headline prose-headings:text-foreground
                         prose-p:text-foreground/80 prose-a:text-primary hover:prose-a:text-accent
                         prose-strong:text-foreground/90 prose-blockquote:border-primary
                         prose-ul:text-foreground/80 prose-li:marker:text-primary">
            <p className="text-sm text-foreground/70">Last updated: July 18, 2024</p>

            <p>NebulaCode ("us", "we", or "our") operates the NebulaCode website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>

            <h2 className="font-headline">Information Collection and Use</h2>
            <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
            {/* Add more placeholder sections as needed */}
            <p>[Placeholder for Types of Data Collected: Personal Data, Usage Data, Tracking & Cookies Data]</p>

            <h2 className="font-headline">Use of Data</h2>
            <p>NebulaCode uses the collected data for various purposes:</p>
            <ul>
              <li>To provide and maintain the Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
              <li>To provide customer care and support</li>
              <li>To provide analysis or valuable information so that we can improve the Service</li>
              <li>To monitor the usage of the Service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>

            <h2 className="font-headline">Security of Data</h2>
            <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
            <p>[Placeholder for more detailed sections: Data Transfer, Disclosure of Data, Your Data Protection Rights, Service Providers, Links to Other Sites, Children's Privacy, Changes to This Privacy Policy, Contact Us]</p>
            
            <h2 className="font-headline">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul>
              <li>By email: privacy@nebulacode.com</li>
              <li>By visiting this page on our website: <a href="/contact">www.nebulacode.com/contact</a></li>
            </ul>
          </div>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
