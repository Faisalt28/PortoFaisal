import { useState, useEffect } from 'react';
import { TopNavbar } from '@/components/TopNavbar';
import { HeroSection } from '@/sections/HeroSection';
import { AboutSection } from '@/sections/AboutSection';
import { SkillsSection } from '@/sections/SkillsSection';
import { ProjectsSection } from '@/sections/ProjectsSection';
import { ProjectDetailPage } from '@/components/ProjectDetailPage';
import { initialProjects } from '@/data/projects';
import type { SlideData } from '@/components/ui/carousel';

function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(() => {
    if (typeof window !== 'undefined' && window.location.hash.startsWith('#project-')) {
      return window.location.hash.replace('#project-', '');
    }
    return null;
  });

  // Handle browser Back / Forward navigation
  useEffect(() => {
    const handlePopState = () => {
      if (window.location.hash.startsWith('#project-')) {
        setSelectedProjectId(window.location.hash.replace('#project-', ''));
      } else {
        setSelectedProjectId(null);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleSelectProject = (project: SlideData) => {
    if (project.id) {
      window.history.pushState({ projectId: project.id }, '', `#project-${project.id}`);
      setSelectedProjectId(project.id);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const handleBackToPortfolio = () => {
    window.history.pushState(null, '', '#projects');
    setSelectedProjectId(null);
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 60);
  };

  const currentProject = initialProjects.find((p) => p.id === selectedProjectId) || null;

  // Render Full Page Project Detail if a project is selected
  if (currentProject) {
    return (
      <ProjectDetailPage
        project={currentProject}
        allProjects={initialProjects}
        onBack={handleBackToPortfolio}
        onSelectProject={handleSelectProject}
      />
    );
  }

  // Render Main Portfolio Page
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <TopNavbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection onSelectProject={handleSelectProject} />
      </main>
    </div>
  );
}

export default App;
