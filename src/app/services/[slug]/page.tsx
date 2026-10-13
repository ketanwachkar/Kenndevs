import SectionWrapper from '@/components/shared/SectionWrapper';
import FadeIn from '@/components/shared/FadeIn';
import CyberBackground from '@/components/shared/CyberBackground';
import { 
  Code, Smartphone, Cloud, Brain, PenTool, Database, ShieldCheck, 
  BarChartBig, CheckCircle2, ArrowLeft, ArrowRight, Sparkles, Zap, Server
} from 'lucide-react';
import type { Metadata, ResolvingMetadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { notFound } from 'next/navigation';

interface ServiceDetail {
  title: string;
  category: string;
  tagline: string;
  description: string;
  tags: string[];
  features: string[];
  metrics: { label: string; val: string }[];
  process: { step: string; title: string; desc: string }[];
}

const servicesData: Record<string, ServiceDetail> = {
  "web-development": {
    title: "Custom Web Application Development",
    category: "Web Engineering",
    tagline: "Bespoke, high-performance web platforms built with Next.js 15, React, and Node.",
    description: "We craft scalable, ultra-fast web applications tailored for growing enterprises and ambitious startups. Our team combines modern frontend frameworks with resilient cloud backends to deliver sub-second page loads and high user conversion rates.",
    tags: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "GraphQL", "Node.js"],
    features: [
      "Sub-second page rendering with Next.js Server Components",
      "Full-stack API development & microservices integration",
      "Progressive Web App (PWA) capabilities & offline caching",
      "Enterprise SEO optimization & WCAG accessibility"
    ],
    metrics: [
      { label: "Avg Page Load", val: "< 0.4s" },
      { label: "SEO Rating", val: "99 / 100" },
      { label: "Client Conversion Boost", val: "+40%" }
    ],
    process: [
      { step: "01", title: "Discovery & Architecture", desc: "Define business goals, user personas, and component architecture." },
      { step: "02", title: "Agile Sprints", desc: "Build modular features with automated continuous integration tests." },
      { step: "03", title: "Global Deployment", desc: "Deploy to multi-region cloud edge networks with 99.99% uptime." }
    ]
  },
  "mobile-apps": {
    title: "Mobile App Development (iOS & Android)",
    category: "Mobile Engineering",
    tagline: "Native & cross-platform mobile apps designed for 60 FPS performance.",
    description: "Build intuitive, high-engagement mobile applications using React Native and Flutter. We transform your product vision into responsive iOS and Android experiences with seamless offline sync and biometric authentication.",
    tags: ["React Native", "Flutter", "iOS Swift", "Android Kotlin", "WebSockets"],
    features: [
      "Smooth 60 FPS native UI components & custom animations",
      "Real-time push notifications & background synchronization",
      "Biometric security (FaceID / Fingerprint) integration",
      "App Store & Google Play submission management"
    ],
    metrics: [
      { label: "UI Frame Rate", val: "60 FPS" },
      { label: "App Store Rating", val: "4.9 / 5" },
      { label: "User Retention", val: "+55%" }
    ],
    process: [
      { step: "01", title: "UI Prototype", desc: "Interactive Figma prototypes and native component wireframes." },
      { step: "02", title: "Cross-Platform Build", desc: "Unified codebase targeting iOS & Android simultaneously." },
      { step: "03", title: "Store Launch", desc: "Automated CI/CD release to Apple App Store & Google Play." }
    ]
  },
  "cloud-solutions": {
    title: "Cloud Infrastructure & Engineering",
    category: "Cloud Architecture",
    tagline: "Multi-cloud architecture, migration, and zero-downtime Kubernetes scaling.",
    description: "Architect, migrate, and manage high-availability cloud infrastructure on AWS, Azure, and GCP. Our cloud engineers optimize infrastructure spend while enforcing bank-grade security and auto-scaling.",
    tags: ["AWS", "Kubernetes", "Docker", "Terraform", "GCP", "Azure"],
    features: [
      "Multi-region auto-scaling Kubernetes cluster management",
      "Zero-downtime blue/green infrastructure deployments",
      "Infrastructure as Code (IaC) with Terraform & Helm",
      "Cloud cost optimization saving up to 45% on compute"
    ],
    metrics: [
      { label: "Guaranteed SLA", val: "99.999%" },
      { label: "Deployment Latency", val: "< 2.4ms" },
      { label: "Compute Savings", val: "Up to 45%" }
    ],
    process: [
      { step: "01", title: "Cloud Audit", desc: "Comprehensive audit of existing infrastructure & security gaps." },
      { step: "02", title: "Zero-Downtime Migration", desc: "Seamless database and service migration without service interruption." },
      { step: "03", title: "24/7 Monitoring", desc: "Real-time threat monitoring and auto-healing cluster nodes." }
    ]
  },
  "ai-ml": {
    title: "AI & Machine Learning Engineering",
    category: "Artificial Intelligence",
    tagline: "Custom LLMs, RAG pipelines, and intelligent neural inference systems.",
    description: "Leverage Generative AI, Retrieval-Augmented Generation (RAG), and custom PyTorch models to automate complex business workflows, extract deep insights, and build next-generation AI agents.",
    tags: ["PyTorch", "LLMs", "RAG Pipelines", "Python", "Vector DB", "LangChain"],
    features: [
      "Custom RAG knowledge base integration with Vector databases",
      "Autonomous AI agent creation for customer support & workflow automation",
      "Fine-tuned open-source LLM deployment on private cloud GPU nodes",
      "Real-time AI inference API development"
    ],
    metrics: [
      { label: "Diagnostic Accuracy", val: "99.4%" },
      { label: "Inference Time", val: "< 120ms" },
      { label: "Workflow Automation", val: "85%" }
    ],
    process: [
      { step: "01", title: "Data Preparation", desc: "Clean, tokenize, and index enterprise data into vector embeddings." },
      { step: "02", title: "Model Tuning", desc: "Fine-tune neural models and establish RAG pipeline accuracy thresholds." },
      { step: "03", title: "API Integration", desc: "Expose secure REST/gRPC endpoints for production consume." }
    ]
  },
  "ui-ux-design": {
    title: "UI/UX Design & Design Systems",
    category: "Design Systems",
    tagline: "User-centered design systems combining aesthetics with conversion optimization.",
    description: "Craft intuitive, delightful user experiences. Our design team creates comprehensive design systems, interactive prototypes, and glassmorphic micro-animations that turn casual visitors into loyal power users.",
    tags: ["Figma", "Design Systems", "Prototyping", "UX Audit", "Micro-Interactions"],
    features: [
      "Comprehensive design system creation with reusable component tokens",
      "Interactive high-fidelity Figma prototypes for user testing",
      "Dark mode glassmorphic UI patterns & subtle micro-animations",
      "UX audit and conversion rate optimization (CRO) analysis"
    ],
    metrics: [
      { label: "User Engagement", val: "+65%" },
      { label: "Design Token Adoption", val: "100%" },
      { label: "WCAG Compliance", val: "AA Certified" }
    ],
    process: [
      { step: "01", title: "User Research", desc: "Analyze user behaviors, pain points, and competitive landscapes." },
      { step: "02", title: "Design Systems", desc: "Build scalable Figma component libraries and token guides." },
      { step: "03", title: "Developer Handoff", desc: "Seamless CSS token export and developer handoff specs." }
    ]
  },
  "data-analytics": {
    title: "Data Engineering & Real-Time Analytics",
    category: "Data Platforms",
    tagline: "Robust real-time data pipelines, Snowflake warehouses, and executive dashboards.",
    description: "Build robust ETL pipelines and enterprise data platforms. Unlock the full value of your raw data through real-time streaming pipelines, Snowflake data warehouses, and interactive dashboards.",
    tags: ["Snowflake", "PostgreSQL", "Kafka", "Spark", "dbt", "PowerBI"],
    features: [
      "Real-time event streaming pipelines with Apache Kafka",
      "Cloud data warehousing on Snowflake & BigQuery",
      "Automated data quality validation and dbt transformations",
      "Executive BI dashboard design with real-time refresh"
    ],
    metrics: [
      { label: "Pipeline Latency", val: "< 1s" },
      { label: "Data Quality Rate", val: "99.9%" },
      { label: "Query Speed", val: "10x Faster" }
    ],
    process: [
      { step: "01", title: "Schema Design", desc: "Model star schemas and event streaming architectures." },
      { step: "02", title: "Pipeline Build", desc: "Construct dbt transformations and Kafka event producers." },
      { step: "03", title: "Dashboard Launch", desc: "Deliver intuitive executive dashboards and automated report triggers." }
    ]
  },
  "cybersecurity": {
    title: "Cybersecurity & Zero-Trust Engineering",
    category: "Security Engineering",
    tagline: "Zero-trust architecture, SOC2 compliance, and automated penetration testing.",
    description: "Protect your enterprise digital assets with zero-trust architecture, penetration testing, compliance automation, and real-time threat detection matrices.",
    tags: ["Zero-Trust", "SOC2", "Penetration Testing", "Encryption", "OAuth 2.0"],
    features: [
      "Zero-trust network architecture and identity verification",
      "Automated vulnerability scanning and penetration testing",
      "SOC2 Type II & ISO 27001 compliance audit preparation",
      "End-to-end data encryption in transit and at rest"
    ],
    metrics: [
      { label: "Threats Blocked", val: "1.2M+" },
      { label: "Compliance Rate", val: "100% SOC2" },
      { label: "Vulnerabilities", val: "0 Critical" }
    ],
    process: [
      { step: "01", title: "Security Assessment", desc: "Audit infrastructure vulnerabilities and access permissions." },
      { step: "02", title: "Zero-Trust Mesh", desc: "Implement microsegmentation and strict IAM access controls." },
      { step: "03", title: "Continuous Monitoring", desc: "24/7 SIEM monitoring and automated incident response." }
    ]
  },
  "devops": {
    title: "DevOps & Continuous Automation",
    category: "DevOps",
    tagline: "Streamlined CI/CD pipelines, automated testing, and infrastructure automation.",
    description: "Streamline software delivery with automated CI/CD pipelines, GitHub Actions, and GitOps deployments. Speed up release cycles from weeks to minutes.",
    tags: ["CI/CD", "GitHub Actions", "ArgoCD", "Docker", "Helm", "Kubernetes"],
    features: [
      "Automated CI/CD pipelines with GitHub Actions & GitLab CI",
      "GitOps deployment automation using ArgoCD & Flux",
      "Containerization & microservice orchestration",
      "Automated unit, integration, and security testing gates"
    ],
    metrics: [
      { label: "Deploy Frequency", val: "10x / Day" },
      { label: "Build Duration", val: "< 3 Mins" },
      { label: "Change Failure Rate", val: "< 0.1%" }
    ],
    process: [
      { step: "01", title: "Pipeline Audit", desc: "Analyze build bottlenecks and deployment risks." },
      { step: "02", title: "Automation Sprint", desc: "Build automated test gates and blue/green release pipelines." },
      { step: "03", title: "GitOps Execution", desc: "Enable 1-click deployments driven by Git repository commits." }
    ]
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
  const service = servicesData[slug] || servicesData["web-development"];

  return {
    title: `${service.title} | KennStack Services`,
    description: service.tagline,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData[slug] || servicesData["web-development"];

  if (!service) {
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
              href="/services"
              className="inline-flex items-center space-x-2 text-xs font-mono text-primary hover:underline group"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to All Services</span>
            </Link>

            {/* Header Box */}
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-mono font-semibold border border-primary/30">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{service.category}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground font-headline leading-tight">
                {service.title}
              </h1>

              <p className="text-lg text-foreground/80 leading-relaxed font-headline">
                {service.tagline}
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-4 p-6 rounded-2xl bg-card/70 border border-primary/30 backdrop-blur-xl shadow-xl">
              {service.metrics.map((m, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-primary font-headline">{m.val}</div>
                  <div className="text-xs text-muted-foreground font-mono mt-1">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Service Overview */}
            <div className="p-8 rounded-2xl bg-card/50 border border-white/10 backdrop-blur-md space-y-4">
              <h3 className="text-2xl font-bold text-foreground font-headline">Service Overview</h3>
              <p className="text-foreground/80 text-base leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Key Features Checklist */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground font-headline flex items-center gap-2">
                <span>Key Capabilities & Deliverables</span>
                <Zap className="h-5 w-5 text-primary" />
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feat, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/85">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="space-y-4">
              <h4 className="text-sm font-mono uppercase tracking-wider text-muted-foreground">Technology Stack & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {service.tags.map(t => (
                  <span key={t} className="px-3 py-1 rounded-lg bg-primary/10 border border-primary/30 text-primary font-mono text-xs font-semibold">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Engineering Process Steps */}
            <div className="space-y-6 pt-6 border-t border-white/10">
              <h3 className="text-2xl font-bold text-foreground font-headline">Our Engineering Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.process.map((p) => (
                  <div key={p.step} className="p-5 rounded-2xl bg-card/60 border border-white/10 space-y-2">
                    <span className="text-xs font-mono font-bold text-primary">{p.step}.</span>
                    <h4 className="text-base font-bold text-foreground font-headline">{p.title}</h4>
                    <p className="text-xs text-foreground/70 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA Banner */}
            <div className="p-8 rounded-3xl bg-gradient-to-r from-primary/20 via-accent/20 to-card border border-primary/40 text-center space-y-4 shadow-2xl">
              <h3 className="text-2xl font-bold text-foreground font-headline">Ready to build your next product with {service.title}?</h3>
              <p className="text-sm text-foreground/80 max-w-lg mx-auto">
                Consult with our senior solution architects in Pune to prototype your architecture.
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-accent text-primary-foreground font-semibold shadow-lg shadow-primary/25">
                <Link href="/contact" className="flex items-center gap-2">
                  Get Free Consultation <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </SectionWrapper>
    </div>
  );
}
