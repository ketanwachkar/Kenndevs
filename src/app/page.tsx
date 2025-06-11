import HeroSection from '@/components/home/HeroSection';
import MissionSection from '@/components/home/MissionSection';
import ServiceHighlights from '@/components/home/ServiceHighlights';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KennStack - Innovative Software Solutions',
  description: 'Welcome to KennStack. We build cutting-edge software solutions for web, mobile, cloud, and AI. Discover how we can transform your business.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ServiceHighlights />
      {/* Additional sections like Portfolio Highlights, Testimonials can be added here */}
    </>
  );
}
