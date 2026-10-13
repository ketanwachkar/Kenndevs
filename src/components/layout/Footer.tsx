import Link from 'next/link';
import { NAV_LINKS, SOCIAL_LINKS, COMPANY_NAME } from '@/lib/constants';
import Logo from '@/components/icons/Logo';
import { Button } from '@/components/ui/button';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  const footerNavLinks = NAV_LINKS.filter(link => ['About Us', 'Privacy Policy', 'Terms of Service', 'Contact Us'].includes(link.label));

  return (
    <footer className="bg-background/50 border-t border-white/10 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1 */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4" aria-label={`${COMPANY_NAME} Home`}>
              <Logo className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Crafting digital experiences that inspire and innovate. {COMPANY_NAME} is your enterprise partner in building high-performance software.
            </p>
          </div>
          
          {/* Col 2 */}
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

          {/* Col 3: Office Locations */}
          <div>
            <h3 className="text-lg font-headline font-semibold text-foreground mb-4">Our Office (India)</h3>
            <div className="space-y-3 text-xs text-foreground/70 leading-relaxed">
              <div>
                <strong className="text-cyan-400 block">Pune Tech Hub:</strong>
                World Trade Center, Kharadi / Baner IT Park, Pune, MH 411014
              </div>
            </div>
          </div>

          {/* Col 4 */}
          <div>
            <h3 className="text-lg font-headline font-semibold text-foreground mb-4">Connect With Us</h3>
            <div className="flex space-x-3 mb-4">
              {SOCIAL_LINKS.map((social) => (
                <Button key={social.label} variant="outline" size="icon" asChild className="rounded-full border-primary/50 hover:bg-primary/20">
                  <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon className="h-4 w-4 text-primary" />
                  </Link>
                </Button>
              ))}
            </div>
            <p className="text-sm text-foreground/80 font-mono flex items-center gap-1.5 mb-1">
              <Mail className="h-3.5 w-3.5 text-primary" />
              <a href="mailto:ketanwachar2000@gmail.com" className="hover:text-primary transition-colors">ketanwachar2000@gmail.com</a>
            </p>
            <p className="text-sm text-foreground/70 font-mono flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-emerald-400" />
              <a href="tel:+919039904938" className="hover:text-primary">+91 90399 04938</a>
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-foreground/60">
            &copy; {year} {COMPANY_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
