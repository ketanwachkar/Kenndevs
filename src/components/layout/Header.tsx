
"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { NAV_LINKS, COMPANY_NAME } from '@/lib/constants';
import Logo from '@/components/icons/Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import AnimatedButton from '../shared/AnimatedButton';
import { motion } from 'framer-motion';
import ThemeToggleButton from '../shared/ThemeToggleButton';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkVariants = {
    initial: { scaleX: 0 },
    hover: { scaleX: 1 }
  };

  const navLinkTransition = { duration: 0.3, ease: "easeOut" };

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-lg shadow-lg border-b border-white/10" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2" aria-label={`${COMPANY_NAME} Home`}>
            <Logo className="h-8 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {NAV_LINKS.filter(link => ['Home', 'Services', 'Portfolio', 'Blog', 'Contact Us'].includes(link.label)).map((link) => (
              <motion.div
                key={link.label}
                className="relative"
                whileHover="hover"
                initial="initial"
              >
                <Button
                  variant="ghost"
                  asChild
                  className={cn(
                    "text-sm font-medium",
                    "hover:bg-transparent focus-visible:bg-transparent", // Override hover/focus for custom anim
                    "transition-colors duration-200 ease-out", 
                    pathname === link.href 
                      ? "text-primary" 
                      : "text-foreground/80 hover:text-primary focus-visible:text-primary"
                  )}
                >
                  <Link href={link.href}>{link.label}</Link>
                </Button>
                <motion.span
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                  variants={navLinkVariants}
                  transition={navLinkTransition}
                  style={{ originX: 0.5 }} 
                />
              </motion.div>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggleButton />
            <AnimatedButton href="/contact">Get a Quote</AnimatedButton>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggleButton />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-background/90 backdrop-blur-xl p-0 flex flex-col">
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <Link href="/" className="flex items-center space-x-2" aria-label={`${COMPANY_NAME} Home`}>
                     <Logo className="h-8 w-auto" />
                  </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" aria-label="Close menu">
                      <X className="h-6 w-6" />
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex-grow p-6 space-y-2 overflow-y-auto">
                  {NAV_LINKS.map((link) => (
                    <SheetClose asChild key={link.label}>
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center space-x-3 px-3 py-3 rounded-md text-base font-medium hover:bg-primary/10 transition-colors",
                          pathname === link.href ? "bg-primary/20 text-primary" : "text-foreground/80 hover:text-foreground"
                        )}
                      >
                        {link.icon && <link.icon className="h-5 w-5" />}
                        <span>{link.label}</span>
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="p-6 border-t border-border mt-auto flex flex-col items-center space-y-4">
                  <ThemeToggleButton />
                  <AnimatedButton href="/contact" className="w-full">
                    Get a Quote
                  </AnimatedButton>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
