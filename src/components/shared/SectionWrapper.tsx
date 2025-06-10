import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  ariaLabelledby?: string;
}

const SectionWrapper = ({ children, className, id, ariaLabelledby }: SectionWrapperProps) => {
  return (
    <section 
      id={id} 
      aria-labelledby={ariaLabelledby}
      className={cn("py-16 md:py-24", className)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
