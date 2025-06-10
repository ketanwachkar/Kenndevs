import Link from 'next/link';
import { NAV_LINKS, SOCIAL_LINKS, COMPANY_NAME } from '@/lib/constants';
import Logo from '@/components/icons/Logo';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerNavLinks = NAV_LINKS.filter(link => ['About Us', 'Privacy Policy', 'Terms of Service', 'Contact Us'].includes(link.label));


  return (
    <footer className="bg-background/50 border-t border-white/10 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4" aria-label={`${COMPANY_NAME} Home`}>
              <Logo className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Crafting digital experiences that inspire and innovate. {COMPANY_NAME} is your partner in building the future of software.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-headline font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerNavLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-headline font-semibold text-foreground mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              {SOCIAL_LINKS.map((social) => (
                <Button key={social.label} variant="outline" size="icon" asChild className="rounded-full border-primary/50 hover:bg-primary/20">
                  <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon className="h-5 w-5 text-primary" />
                  </Link>
                </Button>
              ))}
            </div>
            <p className="text-sm text-foreground/70">
              <a href="mailto:info@nebulacode.com" className="hover:text-primary">info@nebulacode.com</a>
            </p>
            <p className="text-sm text-foreground/70">
              <a href="tel:+1234567890" className="hover:text-primary_">+1 (234) 567-890</a>
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-foreground/60">
            &copy; {currentYear} {COMPANY_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
