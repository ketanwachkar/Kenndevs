import type { LucideIcon } from 'lucide-react';
import { Github, Linkedin, Twitter, Home, Info, Briefcase, Mail, FileText, Users, MessageSquare, BookOpen, Search } from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
  icon?: LucideIcon;
};

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About Us', icon: Info },
  { href: '/services', label: 'Services', icon: Briefcase },
  { href: '/portfolio', label: 'Portfolio', icon: BookOpen },
  { href: '/blog', label: 'Blog', icon: FileText },
  { href: '/careers', label: 'Careers', icon: Users },
  { href: '/faq', label: 'FAQ', icon: MessageSquare },
  { href: '/contact', label: 'Contact Us', icon: Mail },
];

export type SocialLink = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export const SOCIAL_LINKS: SocialLink[] = [
  { href: 'https://github.com', label: 'GitHub', icon: Github },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://twitter.com', label: 'Twitter', icon: Twitter },
];

export const COMPANY_NAME = "KennStack";
