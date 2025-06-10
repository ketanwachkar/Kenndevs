
import SectionWrapper from '@/components/shared/SectionWrapper';
import FadeIn from '@/components/shared/FadeIn';
import Image from 'next/image';
import { CalendarDays, UserCircle } from 'lucide-react';
import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next';

// Placeholder data - in a real app, this would come from a CMS or database
const postsData: { [key: string]: any } = {
  "future-of-web-development": {
    title: "The Future of Web Development: Trends to Watch in 2024",
    date: "July 15, 2024",
    author: "Jane Doe, Lead Developer",
    imageUrl: "https://placehold.co/1200x600.png",
    altText: "Abstract image representing the future of web development and technology trends.",
    dataAiHint: "technology web",
    content: `
      <p>The landscape of web development is constantly evolving. As we move further into 2024, several key trends are emerging that promise to reshape how we build and interact with websites and web applications. Staying ahead of these trends is crucial for developers and businesses alike.</p>
      <h2 class="text-2xl font-bold my-4 font-headline">AI-Powered Development Tools</h2>
      <p>Artificial intelligence is no longer a futuristic concept but a practical tool in the developer's arsenal. AI-powered code assistants, automated testing tools, and intelligent project management platforms are becoming increasingly common. These tools can significantly boost productivity, reduce errors, and even help in optimizing code for performance and security.</p>
      <h2 class="text-2xl font-bold my-4 font-headline">Serverless Architectures and Edge Computing</h2>
      <p>Serverless computing continues to gain traction, offering scalability, cost-efficiency, and reduced operational overhead. Combined with edge computing, which brings computation closer to the user, serverless architectures can deliver lightning-fast experiences with lower latency. This is particularly important for global applications and real-time services.</p>
      <p class="mt-4">This is a placeholder content for the blog post. In a real application, this content would be fetched from a CMS and would be much more detailed.</p>
    `
  },
  // Add other posts here if needed for testing links
};

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const post = postsData[slug];

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: `Read the article "${post.title}" on the NebulaCode blog.`,
    openGraph: {
      images: [post.imageUrl],
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = postsData[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <SectionWrapper>
      <FadeIn>
        <article className="max-w-3xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4 font-headline">{post.title}</h1>
            <div className="flex items-center space-x-4 text-sm text-foreground/70">
              <div className="flex items-center space-x-1">
                <CalendarDays className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <UserCircle className="h-4 w-4" />
                <span>By {post.author}</span>
              </div>
            </div>
          </header>

          {post.imageUrl && (
            <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden mb-8 shadow-lg">
              <Image
                src={post.imageUrl}
                alt={post.altText || post.title}
                layout="fill"
                objectFit="cover"
                priority
                data-ai-hint={post.dataAiHint}
              />
            </div>
          )}

          <div
            className="prose prose-invert prose-lg max-w-none 
                       prose-headings:font-headline prose-headings:text-foreground
                       prose-p:text-foreground/80 prose-a:text-primary hover:prose-a:text-accent
                       prose-strong:text-foreground/90 prose-blockquote:border-primary
                       prose-code:text-primary/90 prose-code:bg-primary/10 prose-code:p-1 prose-code:rounded-md"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </FadeIn>
    </SectionWrapper>
  );
}

// Function to generate static paths if using SSG for blog posts
// export async function generateStaticParams() {
//   return Object.keys(postsData).map((slug) => ({
//     slug,
//   }));
// }
