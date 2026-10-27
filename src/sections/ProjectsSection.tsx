import { motion } from 'framer-motion';
import { Carousel, type SlideData } from '@/components/ui/carousel';
import { initialProjects } from '@/data/projects';

const reveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

interface ProjectsSectionProps {
  onSelectProject?: (project: SlideData) => void;
}

export const ProjectsSection = ({ onSelectProject }: ProjectsSectionProps) => {
  return (
    <section id="projects" aria-label="Projects" className="bg-background overflow-hidden px-4 pt-6 pb-12 sm:px-6 md:px-8 lg:px-12 md:pt-8 md:pb-16">
      <div className="mx-auto w-full max-w-[1400px]">
        {/* Header Label */}
        <motion.div {...reveal} className="mb-6">
          <p className="flex items-center gap-2.5 text-xs font-semibold tracking-widest text-foreground/60 sm:text-sm">
            <span className="h-0.5 w-6 bg-amber-400"></span>
            PROYEK
          </p>
        </motion.div>

        {/* 3D Interactive Carousel */}
        <motion.div {...reveal} className="relative overflow-visible">
          <Carousel
            slides={initialProjects}
            onSelectProject={onSelectProject}
          />
        </motion.div>
      </div>
    </section>
  );
};
