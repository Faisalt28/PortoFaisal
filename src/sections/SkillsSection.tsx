import { motion } from 'framer-motion';
import {
  Brain,
  Code2,
  Cpu,
  GitBranch,
  Globe,
  Layers,
  Server,
  Smartphone,
  Terminal,
} from 'lucide-react';
import { hardSkills, softSkills, toolsCategories } from '@/data/skills';

const reveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

// Map icons to categories
const getCategoryIcon = (title: string) => {
  switch (title) {
    case 'Mobile Development':
      return <Smartphone className="h-4 w-4 text-amber-500" />;
    case 'Web Development':
      return <Globe className="h-4 w-4 text-amber-500" />;
    case 'Backend & Cloud':
      return <Server className="h-4 w-4 text-amber-500" />;
    case 'Data & AI':
      return <Brain className="h-4 w-4 text-amber-500" />;
    case 'Bahasa Pemrograman':
      return <Code2 className="h-4 w-4 text-amber-500" />;
    case 'Metodologi':
      return <GitBranch className="h-4 w-4 text-amber-500" />;
    case 'Technical & Development':
      return <Terminal className="h-4 w-4 text-amber-500" />;
    case 'Productivity':
      return <Layers className="h-4 w-4 text-amber-500" />;
    default:
      return <Cpu className="h-4 w-4 text-amber-500" />;
  }
};

export const SkillsSection = () => {
  return (
    <section id="skills" aria-label="Skills and Tools" className="bg-background px-4 py-6 sm:px-6 md:px-8 lg:px-12 md:py-8">
      <div className="mx-auto w-full max-w-[1400px]">
        {/* Header Label */}
        <motion.div {...reveal} className="mb-6">
          <p className="flex items-center gap-2.5 text-xs font-semibold tracking-widest text-foreground/60 sm:text-sm">
            <span className="h-0.5 w-6 bg-amber-400"></span>
            KEAHLIAN
          </p>
        </motion.div>

        {/* 1. Hard Skills Grid */}
        <motion.div {...reveal} className="mb-10">
          <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-foreground/50 sm:text-sm">
            Hard Skills
          </h3>
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            {hardSkills.map((category) => (
              <div
                key={category.title}
                className="group rounded-xl border border-foreground/10 bg-foreground/[0.02] p-2.5 md:p-4 transition-all duration-300 hover:border-foreground/30 hover:bg-foreground/[0.04]"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-foreground/5 transition-colors group-hover:bg-amber-400/20">
                    {getCategoryIcon(category.title)}
                  </span>
                  <h4 className="text-sm font-bold text-foreground sm:text-base">
                    {category.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-foreground/15 bg-foreground/5 px-2.5 py-1 text-xs sm:text-sm font-semibold text-foreground/80 transition-colors hover:border-foreground/30 hover:text-foreground shadow-2xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 2. Soft Skills & Tools Row (Urutan: Soft Skills -> Tools) */}
        <div className="grid grid-cols-12 gap-3 md:gap-6">
          {/* Soft Skills */}
          <motion.div {...reveal} className="col-span-5">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-foreground/50 sm:text-sm">
              Soft Skills
            </h3>
            <div className="grid grid-cols-1 gap-2.5">
              {softSkills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-3 rounded-xl border border-foreground/10 bg-foreground/[0.02] p-2.5 md:p-3.5 transition-all duration-300 hover:border-foreground/30 hover:bg-foreground/[0.04]"
                >
                  <span className="h-2 w-2 rounded-full bg-amber-400"></span>
                  <span className="text-sm font-semibold text-foreground">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div {...reveal} className="col-span-7">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-foreground/50 sm:text-sm">
              Tools
            </h3>
            <div className="space-y-2.5 md:space-y-4">
              {toolsCategories.map((category) => (
                <div
                  key={category.title}
                  className="rounded-xl border border-foreground/10 bg-foreground/[0.02] p-2.5 md:p-4 transition-all duration-300 hover:border-foreground/30 hover:bg-foreground/[0.04]"
                >
                  <div className="mb-2.5 flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-foreground/5">
                      {getCategoryIcon(category.title)}
                    </span>
                    <h4 className="text-sm font-bold text-foreground sm:text-base">
                      {category.title}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-foreground/10 bg-background px-2.5 py-1 text-xs font-medium text-foreground/85 transition-colors hover:border-foreground/30 hover:text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
