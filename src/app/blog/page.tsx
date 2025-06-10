
import SectionWrapper from '@/components/shared/SectionWrapper';
import BlogPostCard from '@/components/blog/BlogPostCard';
import FadeIn from '@/components/shared/FadeIn';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read the latest insights, news, and articles from the NebulaCode team on software development, technology trends, and industry best practices.',
};

const posts = [
  {
    slug: "future-of-web-development",
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Discover the emerging technologies and methodologies shaping the future of web development, from AI-powered tools to serverless architectures.",
    imageUrl: "https://placehold.co/800x450.png",
    altText: "Illustration of futuristic web development concepts and technology.",
    dataAiHint: "web development", // Added dataAiHint
    date: "July 15, 2024",
    author: "Jane Doe, Lead Developer",
  },
  {
    slug: "mastering-ui-ux-design",
    title: "Mastering UI/UX: Principles for Creating Intuitive Digital Products",
    excerpt: "A deep dive into the core principles of UI/UX design that help create user-friendly and engaging digital experiences.",
    imageUrl: "https://placehold.co/800x450.png",
    altText: "Abstract representation of UI/UX design principles for digital products.",
    dataAiHint: "ui ux", // Added dataAiHint
    date: "July 1, 2024",
    author: "John Smith, UI/UX Lead",
  },
  {
    slug: "demystifying-cloud-native",
    title: "Demystifying Cloud-Native: A Guide for Businesses",
    excerpt: "Understand what cloud-native architecture means and how it can benefit your business by enabling scalability, resilience, and agility.",
    imageUrl: "https://placehold.co/800x450.png",
    altText: "Cloud-native architecture and its benefits for business scalability.",
    dataAiHint: "cloud native", // Added dataAiHint
    date: "June 20, 2024",
    author: "Alice Brown, Cloud Architect",
  },
];

export default function BlogPage() {
  return (
    <SectionWrapper>
      <div className="text-center mb-16">
        <FadeIn>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
            NebulaCode Blog
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 max-w-2xl mx-auto">
            Stay updated with the latest insights, trends, and news from the world of software development.
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <FadeIn key={post.slug} delay={index * 0.1}>
            <BlogPostCard {...post} />
          </FadeIn>
        ))}
      </div>

      {/* Placeholder for Pagination or Load More button */}
      <FadeIn className="mt-16 text-center">
        {/* <Button variant="outline" size="lg">Load More Posts</Button> */}
      </FadeIn>
    </SectionWrapper>
  );
}
