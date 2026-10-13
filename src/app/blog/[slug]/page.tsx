import SectionWrapper from '@/components/shared/SectionWrapper';
import FadeIn from '@/components/shared/FadeIn';
import CyberBackground from '@/components/shared/CyberBackground';
import BlogVisualHeader from '@/components/blog/BlogVisualHeader';
import { CalendarDays, UserCircle, Clock, Sparkles, ArrowLeft, Share2, CheckCircle2, ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface PostArticle {
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  role: string;
  highlights: string[];
  content: string;
}

const postsData: Record<string, PostArticle> = {
  "mastering-ui-ux-design": {
    title: "Mastering UI/UX: Principles for High-Converting Digital Products",
    category: "Design Systems & UX",
    readTime: "7 Min Read",
    date: "July 1, 2026",
    author: "John Smith",
    role: "UI/UX Lead Architect",
    highlights: [
      "Micro-animations reduce cognitive friction and increase user retention by 34%",
      "Dark glassmorphism with dynamic radial spotlights provides a premium visual impression",
      "Designing responsive layout math without arbitrary fixed pixel offsets ensures cross-device consistency",
      "Accessibility & WCAG 2.1 AA compliance boost overall product conversion rates"
    ],
    content: `
      <p class="lead">Creating digital products that users love requires combining visual aesthetics with functional simplicity. In 2026, modern UI/UX design has evolved beyond basic wireframes into dynamic, micro-animated design systems.</p>
      
      <h2 class="text-2xl font-bold my-6 text-foreground font-headline flex items-center gap-2">
        <span class="text-primary">01.</span> The Power of Micro-Interactions
      </h2>
      <p>Micro-interactions are subtle visual responses when a user hovers over a button, toggles a state, or submits a form. When executed thoughtfully, micro-interactions build trust and make digital tools feel responsive and alive.</p>

      <h2 class="text-2xl font-bold my-6 text-foreground font-headline flex items-center gap-2">
        <span class="text-primary">02.</span> Dark Mode Glassmorphism & Neon Spotlights
      </h2>
      <p>Modern dark-mode interfaces rely on layered glassmorphism (backdrop-blur, subtle HSL border glow, ambient particle lights) to establish visual depth. Radial spotlights that track mouse movements guide user attention toward call-to-action buttons without overwhelming the content.</p>

      <h2 class="text-2xl font-bold my-6 text-foreground font-headline flex items-center gap-2">
        <span class="text-primary">03.</span> Performance-First UI Architecture
      </h2>
      <p>Stunning visuals should never sacrifice speed. By leveraging server components, CSS keyframe animations, and optimized vector assets, enterprise products can deliver 60 FPS animations while maintaining sub-second initial page loads.</p>
    `
  },
  "future-of-web-development": {
    title: "The Future of Web Development: Trends & AI Agents in 2026",
    category: "Web Engineering",
    readTime: "5 Min Read",
    date: "July 15, 2026",
    author: "Jane Doe",
    role: "Lead Full-Stack Architect",
    highlights: [
      "Next.js 15 Server Actions simplify data mutation and eliminate client bundle bloat",
      "Agentic AI assistants automate code review, testing, and continuous deployment",
      "Sub-10ms edge routing brings serverless execution closer to global users"
    ],
    content: `
      <p class="lead">The landscape of web development is undergoing a rapid transformation. With Next.js 15, serverless edge networks, and agentic AI tools, developers can ship high-scale applications in record time.</p>
      
      <h2 class="text-2xl font-bold my-6 text-foreground font-headline flex items-center gap-2">
        <span class="text-primary">01.</span> Autonomous AI Coding Agents
      </h2>
      <p>AI assistants have evolved from autocomplete tools into autonomous agentic coding partners capable of refactoring microservices, diagnosing runtime stack traces, and validating end-to-end integration tests.</p>

      <h2 class="text-2xl font-bold my-6 text-foreground font-headline flex items-center gap-2">
        <span class="text-primary">02.</span> Serverless & Multi-Region Mesh
      </h2>
      <p>Modern applications leverage global edge nodes to execute server actions within single-digit milliseconds of the user, whether in Pune, San Francisco, or Tokyo.</p>
    `
  },
  "demystifying-cloud-native": {
    title: "Demystifying Cloud-Native & Kubernetes Auto-Scaling",
    category: "DevOps & Cloud Architecture",
    readTime: "6 Min Read",
    date: "June 20, 2026",
    author: "Alice Brown",
    role: "Principal Cloud Architect",
    highlights: [
      "Zero-trust security mesh protects multi-region microservice deployments",
      "Automated Kubernetes pod auto-scaling optimizes cloud infrastructure spend by 45%",
      "Sub-5ms database latency with distributed caching and failover replication"
    ],
    content: `
      <p class="lead">Migrating legacy monolithic applications to cloud-native Kubernetes clusters unlocks unparalleled scalability, fault tolerance, and cost efficiency for growing enterprises.</p>
      
      <h2 class="text-2xl font-bold my-6 text-foreground font-headline flex items-center gap-2">
        <span class="text-primary">01.</span> Zero-Downtime Multi-Region Deployments
      </h2>
      <p>Blue-green deployment strategies combined with automated infrastructure as code (Terraform & Helm) enable enterprise engineering teams to push updates continuous without risking uptime.</p>
    `
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
  const post = postsData[slug] || postsData["mastering-ui-ux-design"];

  return {
    title: `${post.title} | KennStack Insights`,
    description: `Read "${post.title}" by ${post.author} on KennStack Blog.`,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = postsData[slug] || postsData["mastering-ui-ux-design"];

  if (!post) {
    notFound();
  }

  const otherPosts = Object.keys(postsData)
    .filter((s) => s !== slug)
    .map((s) => ({ slug: s, ...postsData[s] }));

  return (
    <div className="relative">
      <CyberBackground />

      <SectionWrapper>
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            {/* Back to Blog Navigation Link */}
            <Link
              href="/blog"
              className="inline-flex items-center space-x-2 text-xs font-mono text-primary hover:underline mb-8 group"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Blog Articles</span>
            </Link>

            {/* Article Category & Title Header */}
            <header className="mb-10 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30">
                  {post.category}
                </span>
                <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-primary" />
                  {post.readTime}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground font-headline leading-tight">
                {post.title}
              </h1>

              {/* Author & Date Bar */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono text-foreground/80">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-primary/20 ring-2 ring-primary/40 text-primary">
                    <UserCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{post.author}</div>
                    <div className="text-[11px] text-muted-foreground">{post.role}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-muted-foreground">
                  <CalendarDays className="h-4 w-4 text-primary" />
                  <span>Published {post.date}</span>
                </div>
              </div>
            </header>

            {/* High-Tech Animated Cover Visual replacing grey placeholder */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-primary/30 shadow-2xl shadow-primary/20 mb-10 group">
              <BlogVisualHeader slug={slug} />
            </div>

            {/* Key Highlights Callout Box */}
            <div className="p-6 md:p-8 rounded-2xl bg-card/70 border border-primary/40 backdrop-blur-xl mb-12 shadow-xl space-y-4">
              <div className="flex items-center space-x-2 text-primary font-bold text-sm font-headline">
                <Sparkles className="h-4 w-4" />
                <span>Key Executive Takeaways</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {post.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-foreground/85">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Body HTML Content */}
            <div
              className="prose prose-invert prose-lg max-w-none 
                         prose-headings:font-headline prose-headings:text-foreground
                         prose-p:text-foreground/80 prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-accent
                         prose-strong:text-foreground prose-blockquote:border-primary prose-blockquote:bg-white/5 prose-blockquote:p-4 prose-blockquote:rounded-lg"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author Footer & Share Bar */}
            <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs font-mono text-muted-foreground">
                <span>Written by KennStack Senior Engineering Editorial</span>
              </div>

              <Link
                href="/contact"
                className="px-4 py-2 rounded-xl bg-primary hover:bg-accent text-primary-foreground font-semibold text-xs transition-all shadow-lg shadow-primary/25 flex items-center gap-1.5"
              >
                <span>Consult Our Team</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Related Articles Cards Section */}
            <div className="mt-20 pt-12 border-t border-white/10 space-y-6">
              <h3 className="text-2xl font-bold font-headline text-foreground">Explore Related Articles</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {otherPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="p-5 rounded-2xl bg-card/60 border border-white/10 hover:border-primary/50 transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[11px] font-mono text-primary font-semibold block mb-2">{related.category}</span>
                      <h4 className="text-lg font-bold text-foreground font-headline group-hover:text-primary transition-colors line-clamp-2">
                        {related.title}
                      </h4>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-primary font-semibold">
                      <span>Read Article →</span>
                      <span className="text-[10px] text-muted-foreground">{related.readTime}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </SectionWrapper>
    </div>
  );
}
