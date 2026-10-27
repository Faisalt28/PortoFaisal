import { motion } from 'framer-motion';
import { type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define the props interface for type safety and reusability
interface MinimalistHeroProps {
  logoText?: string;
  navLinks?: { label: string; href: string }[];
  mainText: string;
  readMoreLink?: string;
  imageSrc: string;
  imageAlt: string;
  stackedTitle?: string;
  socialLinks?: { icon: LucideIcon; href: string; label?: string }[];
  locationText?: string;
  className?: string;
}

// Helper component for social media icons
const SocialIcon = ({ href, icon: Icon, label }: { href: string; icon: LucideIcon; label?: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-foreground/60 transition-colors hover:text-foreground"
  >
    <Icon className="h-5 w-5" />
  </a>
);

// The main reusable Hero Section component
export const MinimalistHero = ({
  mainText,
  readMoreLink,
  imageSrc,
  imageAlt,
  stackedTitle,
  socialLinks,
  locationText,
  className,
}: MinimalistHeroProps) => {
  return (
    <section
      id="home"
      className={cn(
        // min-h-svh (not h-screen) keeps the hero stable on mobile browsers with dynamic toolbars
        'relative mx-auto flex min-h-svh w-full flex-col items-center justify-between overflow-hidden bg-background px-4 py-6 font-sans sm:px-6 md:px-8 lg:px-12 md:py-10',
        className
      )}
    >
      {/* Top Spacer to preserve vertical balance under fixed navbar */}
      <div className="h-14 sm:h-16 w-full shrink-0" aria-hidden="true" />

      {/* Main Content Area */}
      <div className="grid w-full max-w-[1400px] flex-grow grid-cols-1 content-end items-center gap-6 py-6 md:grid-cols-3 md:content-center md:gap-4 md:py-0">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="z-20 order-3 text-center md:order-1 md:text-left"
        >
          {stackedTitle && (
            <h1 className="flex flex-col items-center md:items-start -space-y-1 sm:-space-y-1.5 md:-space-y-2 lg:-space-y-2.5 font-black italic tracking-tighter text-3xl min-[400px]:text-4xl sm:text-5xl md:text-3xl lg:text-5xl xl:text-6xl select-none leading-none">
              <span className="block opacity-20 transition-opacity duration-300 hover:opacity-35">
                {stackedTitle}
              </span>
              <span className="block text-foreground drop-shadow-sm">
                {stackedTitle}
              </span>
              <span className="block opacity-20 transition-opacity duration-300 hover:opacity-35">
                {stackedTitle}
              </span>
            </h1>
          )}
          {readMoreLink && (
            <a
              href={readMoreLink}
              className="mt-4 inline-block text-sm font-medium text-foreground underline decoration-from-font"
            >
              Read More
            </a>
          )}
        </motion.div>

        {/* Spacer keeping the middle grid column empty on desktop (photo is a background layer) */}
        <div className="hidden md:order-2 md:block" aria-hidden="true"></div>

        {/* Full-height photo layer, anchored to the hero (the grid is not positioned) */}
        <div className="pointer-events-none absolute inset-0 z-10 flex items-end justify-center">
          {/* Square wrapper: as tall as the hero, but never wider than 160vw (keeps the subject in frame on phones).
              On mobile it is nudged left so the face (≈42% across the photo) sits near the screen center. */}
          <div className="relative aspect-square h-[min(100%,160vw)] max-w-none shrink-0 translate-x-0">
            {/* Circle is centered on the photo and scales with it (66% of the photo size) */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="absolute inset-0 z-0 m-auto aspect-square w-[66%] rounded-full bg-amber-400"
            ></motion.div>
            <motion.img
              src={imageSrc}
              alt={imageAlt}
              className="relative z-10 block h-full w-full object-cover"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              fetchPriority="high"
              decoding="async"
            />
            {/* Solid background-colored fade: hides the hard bottom cut without letting the circle bleed through */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 z-20 h-[20%] bg-linear-to-b from-transparent to-background"
            ></div>
          </div>
        </div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="z-20 order-2 flex items-center justify-center text-center md:order-3 md:justify-end md:text-right"
        >
          <div className="flex flex-col items-center md:items-end -space-y-1 sm:-space-y-1.5 md:-space-y-2 lg:-space-y-2.5 font-black italic tracking-tighter text-2xl min-[400px]:text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl whitespace-nowrap select-none leading-none uppercase">
            <span className="block opacity-20 transition-opacity duration-300 hover:opacity-35">
              {mainText}
            </span>
            <span className="block text-foreground drop-shadow-sm">
              {mainText}
            </span>
            <span className="block opacity-20 transition-opacity duration-300 hover:opacity-35">
              {mainText}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Footer Elements (rendered only when social links or location are provided) */}
      {(socialLinks?.length || locationText) && (
        <footer className="z-30 flex w-full max-w-7xl items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex items-center space-x-4"
          >
            {socialLinks?.map((link, index) => (
              <SocialIcon key={index} href={link.href} icon={link.icon} label={link.label} />
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="text-sm font-medium text-foreground/80"
          >
            {locationText}
          </motion.div>
        </footer>
      )}
    </section>
  );
};
