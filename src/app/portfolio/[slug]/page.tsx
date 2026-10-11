import SectionWrapper from '@/components/shared/SectionWrapper';
import FadeIn from '@/components/shared/FadeIn';
import CyberBackground from '@/components/shared/CyberBackground';
import PortfolioVisual from '@/components/portfolio/PortfolioVisual';
import { 
  Trophy, ArrowLeft, ArrowRight, ExternalLink, Sparkles, 
  CheckCircle2, Server, TrendingUp, ShieldCheck 
} from 'lucide-react';
import type { Metadata, ResolvingMetadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { notFound } from 'next/navigation';

interface CaseStudyDetail {
  title: string;
  category: string;
  client: string;
  duration: string;
  impactMetric: string;
  visualType: "ecommerce" | "healthcare" | "cloud" | "cybersecurity";
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
}

const projectsData: Record<string, CaseStudyDetail> = {
  "ecommerce-overhaul": {
    title: "E-commerce Platform Overhaul & Checkout Acceleration",
    category: "Web Development",
    client: "Global Retail Enterprise",
    duration: "4 Months",
    impactMetric: "+40.2% Revenue Boost",
    visualType: "ecommerce",
    summary: "Revitalized a major online retailer's platform using Next.js 15, sub-second edge rendering, and real-time checkout conversion optimization.",
    challenge: "The client was suffering from 4.2-second page load times, high cart abandonment rates during peak sales events, and legacy database bottlenecks.",
    solution: "We re-architected the frontend using Next.js 15 App Router, implemented GraphQL caching, optimized product images with responsive WebP formatting, and automated Stripe checkout workflows.",
    results: [
      "Page load speed improved from 4.2s to sub-0.4s",
      "Checkout conversion rate increased by +40.2%",
      "Handled 100,000+ concurrent users during Black Friday peak with 0 downtime"
    ],
    techStack: ["Next.js 15", "GraphQL", "Stripe API", "Tailwind CSS", "Redis", "AWS"]
  },
  "healthcare-app": {
    title: "AI-Powered Biometric Healthcare Monitoring App",
    category: "Mobile & AI",
    client: "HealthTech Innovations",
    duration: "6 Months",
    impactMetric: "99.4% Diagnostic Accuracy",
    visualType: "healthcare",
    summary: "Developed an innovative mobile application for real-time patient ECG monitoring using custom neural networks and automated alert triggers.",
    challenge: "Remote patient monitoring required real-time Bluetooth sensor data streaming with ultra-low latency and instant AI diagnostic alert generation.",
    solution: "We built a native 60 FPS mobile app using React Native, integrated PyTorch AI inference models directly on edge devices, and configured secure HIPAA-compliant cloud synchronization.",
    results: [
      "Real-time ECG streaming latency reduced to < 50ms",
      "Achieved 99.4% accuracy in preliminary anomaly detection",
      "Deployed across 50+ hospital networks with 10,000+ active patients"
    ],
    techStack: ["React Native", "PyTorch", "Biometrics", "WebSockets", "iOS", "Android"]
  },
  "fintech-cloud-migration": {
    title: "Zero-Downtime Cloud Migration for Fintech Mainframe",
    category: "Cloud Solutions",
    client: "National Banking Institution",
    duration: "5 Months",
    impactMetric: "99.999% SLA Uptime",
    visualType: "cloud",
    summary: "Successfully migrated a financial institution's legacy mainframe systems to a multi-region zero-downtime AWS Kubernetes cluster.",
    challenge: "Legacy on-premise servers faced high maintenance costs, rigid scaling limits, and strict regulatory security requirements.",
    solution: "We designed a multi-region active-active Kubernetes topology on AWS, engineered automated database replication pipelines, and enforced zero-trust security access controls.",
    results: [
      "Migrated 100% of core banking workloads with zero data loss or service downtime",
      "Reduced monthly infrastructure operational costs by 42%",
      "Achieved SOC2 Type II and PCI-DSS compliance certification"
    ],
    techStack: ["AWS", "Kubernetes", "Terraform", "PostgreSQL", "Docker", "Go"]
  },
  "cybersecurity-shield": {
    title: "Enterprise Zero-Trust Cybersecurity Defense Shield",
    category: "Security Engineering",
    client: "SaaS Enterprise Corp",
    duration: "3 Months",
    impactMetric: "1.2M Threats Neutralized",
    visualType: "cybersecurity",
    summary: "Built an enterprise-grade automated threat prevention & SOC2 compliance monitoring matrix for high-growth SaaS platforms.",
    challenge: "Rapid expansion exposed internal API endpoints to automated DDoS probes and credential stuffing attacks.",
    solution: "We deployed an eBPF zero-trust security mesh, automated OAuth 2.0 token rotation, and configured real-time SIEM threat detection alerts.",
    results: [
      "Blocked over 1.2M automated attack probes without impacting legitimate user traffic",
      "Zero critical security vulnerabilities detected across all audit cycles",
      "Automated SOC2 compliance evidence collection saving 200+ engineering hours"
    ],
    techStack: ["Zero-Trust", "Go", "eBPF", "SOC2 Compliance", "OAuth 2.0", "AWS"]
  }
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData[slug] || projectsData["ecommerce-overhaul"];

  return {
    title: `${project.title} | Case Study`,
    description: project.summary,
  };
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData[slug] || projectsData["ecommerce-overhaul"];

  if (!project) {
    notFound();
  }

  return (
    <div className="relative">
      <CyberBackground />

      <SectionWrapper>
        <FadeIn>
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Navigation Back Link */}
            <Link
              href="/portfolio"
              className="inline-flex items-center space-x-2 text-xs font-mono text-primary hover:underline group"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Portfolio</span>
            </Link>

            {/* Header Box */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30">
                  {project.category}
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {project.impactMetric}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground font-headline leading-tight">
                {project.title}
              </h1>

              <p className="text-lg text-foreground/80 leading-relaxed font-headline">
                {project.summary}
              </p>
            </div>

            {/* Interactive Visual Showcase Replacing Grey Placeholder */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-primary/30 shadow-2xl shadow-primary/20">
              <PortfolioVisual type={project.visualType} />
            </div>

            {/* Client Metadata Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-card/70 border border-white/10 text-xs font-mono">
              <div>
                <span className="text-muted-foreground block">Client:</span>
                <span className="text-foreground font-bold">{project.client}</span>
              </div>
              <div>
                <span className="text-muted-foreground block">Timeline:</span>
                <span className="text-primary font-bold">{project.duration}</span>
              </div>
              <div>
                <span className="text-muted-foreground block">Key Result:</span>
                <span className="text-emerald-400 font-bold">{project.impactMetric}</span>
              </div>
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-card/50 border border-white/10 space-y-3">
                <h3 className="text-xl font-bold text-foreground font-headline">The Challenge</h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card/50 border border-primary/30 space-y-3">
                <h3 className="text-xl font-bold text-foreground font-headline">The Solution</h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Results & Key Outcomes */}
            <div className="p-8 rounded-2xl bg-card/70 border border-primary/40 space-y-6 shadow-xl">
              <h3 className="text-2xl font-bold text-foreground font-headline flex items-center gap-2">
                <span>Key Quantifiable Outcomes</span>
                <Trophy className="h-5 w-5 text-primary" />
              </h3>

              <div className="space-y-3">
                {project.results.map((res, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-sm text-foreground/90">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="space-y-4">
              <h4 className="text-sm font-mono uppercase tracking-wider text-muted-foreground">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map(t => (
                  <span key={t} className="px-3 py-1 rounded-lg bg-primary/10 border border-primary/30 text-primary font-mono text-xs font-semibold">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom CTA Banner */}
            <div className="p-8 rounded-3xl bg-gradient-to-r from-primary/20 via-accent/20 to-card border border-primary/40 text-center space-y-4 shadow-2xl">
              <h3 className="text-2xl font-bold text-foreground font-headline">Want similar outcomes for your enterprise?</h3>
              <p className="text-sm text-foreground/80 max-w-lg mx-auto">
                Our engineering teams in Indore & Pune build resilient software solutions customized for scale.
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-accent text-primary-foreground font-semibold shadow-lg shadow-primary/25">
                <Link href="/contact" className="flex items-center gap-2">
                  Discuss Your Project <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </SectionWrapper>
    </div>
  );
}
