import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'BERANDA', href: '#home' },
  { label: 'PROFIL', href: '#about' },
  { label: 'KEAHLIAN', href: '#skills' },
  { label: 'PROYEK', href: '#projects' },
];

export const TopNavbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isClickScrolling, setIsClickScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);

      if (isClickScrolling) return;

      // If user reaches near the bottom of page, always highlight the last section ('projects')
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60;
      if (isAtBottom) {
        setActiveSection('projects');
        return;
      }

      // Check sections from bottom to top using getBoundingClientRect
      const sectionIds = ['projects', 'skills', 'about', 'home'];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 260) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClickScrolling]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');

    // Instantly set active section & yellow indicator on click
    setActiveSection(targetId);

    // Prevent scroll listener from briefly overriding during smooth scroll
    setIsClickScrolling(true);
    setTimeout(() => {
      setIsClickScrolling(false);
    }, 850);

    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 select-none">
      {/* Top Navbar Bar dengan Opacity Rendah, Glassmorphism, dan Bottom Fade */}
      <div
        className={`relative w-full border-b transition-all duration-300 ${
          hasScrolled
            ? 'bg-background/20 backdrop-blur-sm border-foreground/[0.05]'
            : 'bg-background/10 backdrop-blur-[2px] border-transparent'
        }`}
      >
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-end">
            {/* Desktop Navigation Links */}
            <nav className="hidden items-center gap-8 md:flex" aria-label="Main Navigation">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative py-1 text-xs sm:text-sm font-semibold tracking-widest transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? 'text-amber-500'
                        : 'text-foreground/60 hover:text-foreground'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-amber-400"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-end text-foreground/80 hover:text-foreground md:hidden cursor-pointer"
              aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Soft Bottom Fade Effect */}
        <div className="absolute inset-x-0 bottom-0 h-2 translate-y-full bg-gradient-to-b from-background/15 via-background/5 to-transparent pointer-events-none" />
      </div>

      {/* Mobile Dropdown Navigation with matching low-opacity & blur */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="border-b border-foreground/10 bg-background/80 backdrop-blur-xl px-6 py-6 sm:px-8 md:px-12 md:hidden shadow-xl"
          >
            <div className="mx-auto w-full max-w-7xl">
              <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.href.replace('#', '');
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold tracking-wider transition-colors ${
                        isActive
                          ? 'bg-amber-400/15 text-amber-500'
                          : 'text-foreground/70 hover:bg-foreground/5 hover:text-foreground'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />}
                    </a>
                  );
                })}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
