import SectionWrapper from '@/components/shared/SectionWrapper';
import FadeIn from '@/components/shared/FadeIn';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Find answers to frequently asked questions about KennStack\'s services, processes, pricing, and more.',
};

const faqItems = [
  {
    question: "What types of software development services do you offer?",
    answer: "KennStack offers a wide range_of services including custom web development, mobile app development (iOS & Android), cloud solutions (AWS, Azure, GCP), AI/ML development, UI/UX design, data engineering, cybersecurity, and DevOps automation."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have experience working with clients across various industries, including finance, healthcare, e-commerce, education, and technology startups. Our adaptable approach allows us to tailor solutions to specific industry needs."
  },
  {
    question: "How do you approach a new project?",
    answer: "Our project approach typically involves an initial consultation and discovery phase, followed by detailed planning, UI/UX design, iterative development sprints, rigorous testing, deployment, and ongoing support and maintenance. We emphasize clear communication and collaboration throughout the process."
  },
  {
    question: "What is your pricing model?",
    answer: "Our pricing models are flexible and depend on the project scope, complexity, and engagement model. We offer fixed-price contracts for well-defined projects, time and materials for evolving requirements, and dedicated team retainers for long-term partnerships. We provide detailed proposals after understanding your needs."
  },
  {
    question: "How long does it take to develop a software product?",
    answer: "The timeline for software development varies greatly depending on the project's complexity, features, and scale. A simple website might take a few weeks, while a complex enterprise application could take several months or more. We provide estimated timelines after the initial planning phase."
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    answer: "Yes, we offer various support and maintenance packages to ensure your software remains up-to-date, secure, and performs optimally after launch. We can discuss ongoing support options tailored to your needs."
  }
];

export default function FAQPage() {
  return (
    <SectionWrapper>
      <div className="text-center mb-16">
        <FadeIn>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 max-w-2xl mx-auto">
            Find answers to common questions about our services, processes, and how we can help your business.
          </p>
        </FadeIn>
      </div>

      <FadeIn delay={0.2}>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-background/50 border border-white/10 rounded-lg overflow-hidden glassmorphic !border-b-0">
                <AccordionTrigger className="p-6 text-left text-lg font-medium text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0 text-foreground/80">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </FadeIn>
      
      <FadeIn delay={0.4} className="mt-16 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl font-headline">
          Still have questions?
        </h2>
        <p className="mt-4 text-lg text-foreground/80">
          If you can't find the answer you're looking for, please don't hesitate to contact us.
        </p>
        <div className="mt-6">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-sm hover:bg-accent"
          >
            Contact Us
          </a>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
