import React, { useState } from 'react';
import {
  ArrowLeft,
  ExternalLink,
  Globe,
  Play,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import type { SlideData } from '@/components/ui/carousel';

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className={className}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

interface ProjectDetailPageProps {
  project: SlideData;
  allProjects?: SlideData[];
  onBack: () => void;
  onSelectProject?: (project: SlideData) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  project,
  allProjects = [],
  onBack,
  onSelectProject,
}) => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const { title, category, src, tags, details, collageImages } = project;

  // Find previous and next projects for pagination
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex >= 0 && currentIndex < allProjects.length - 1
      ? allProjects[currentIndex + 1]
      : null;

  return (
    <div className="min-h-screen w-full bg-background text-foreground antialiased selection:bg-amber-400 selection:text-black">
      {/* Sticky Top Header with Back Button and Quick Category */}
      <header className="sticky top-0 z-40 w-full border-b border-foreground/10 bg-background/80 backdrop-blur-md transition-all duration-300">
        <div className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Back to Portfolio Button */}
          <button
            onClick={onBack}
            className="group flex items-center gap-2 rounded-xl py-2 pr-4 text-xs sm:text-sm font-semibold text-foreground/75 transition-all hover:text-foreground cursor-pointer"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-foreground/15 bg-foreground/5 transition-transform group-hover:-translate-x-1 group-hover:border-foreground/30">
              <ArrowLeft className="h-4 w-4" />
            </div>
            <span>Kembali ke Portofolio</span>
          </button>

          {/* Quick Header Right Badge */}
          <div className="flex items-center gap-2">
            <span className="inline-block rounded-md bg-amber-400 px-2.5 py-1 text-[11px] font-bold tracking-wider text-black uppercase shadow-xs">
              {category || 'PROYEK'}
            </span>
          </div>
        </div>
      </header>

      {/* Main Page Content - Margins match main page (max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-12) */}
      <main className="mx-auto w-full max-w-[1400px] px-4 pt-4 pb-12 sm:px-6 sm:pt-6 sm:pb-16 md:px-8 lg:px-12">
        {/* 1. Header Section: Judul, Tech Stack / Tools & Skills Chips, Action Buttons (Center Aligned, Minimalist) */}
        <section className="mb-6 sm:mb-8 flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Judul Proyek */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-tight">
            {title}
          </h1>

          {/* Tech Stack Chips (Row 1) */}
          <div className="mt-3.5 sm:mt-4 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {(details?.techStack || tags || []).map((tech, idx) => (
              <span
                key={`tech-${idx}`}
                className="inline-flex items-center rounded-lg border border-foreground/15 bg-foreground/5 px-2.5 py-1 text-xs font-semibold text-foreground shadow-2xs hover:border-foreground/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Skills Chips (Row 2 - Underneath Tech Stack) */}
          {details?.skills && details.skills.length > 0 && (
            <div className="mt-2 sm:mt-2.5 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
              {details.skills.map((skill, idx) => (
                <span
                  key={`skill-${idx}`}
                  className="inline-flex items-center rounded-lg border border-amber-500/35 bg-amber-400/10 px-2.5 py-1 text-xs font-semibold text-amber-500 shadow-2xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          {/* Action Buttons: Live Website, Hugging Face, GitHub Repo (Center) */}
          <div className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {/* Website Live URL */}
            {category === 'Website' && details?.liveUrl && (
              <a
                href={details.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold text-black shadow-md transition-all hover:bg-amber-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Globe className="h-4 w-4" />
                <span>Kunjungi Live Website</span>
                <ExternalLink className="h-3.5 w-3.5 opacity-60" />
              </a>
            )}

            {/* Machine Learning Live Hugging Face Spaces URL */}
            {category === 'Machine Learning' && details?.liveUrl && (
              <a
                href={details.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold text-black shadow-md transition-all hover:bg-amber-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Globe className="h-4 w-4" />
                <span>Live Hugging Face Spaces</span>
                <ExternalLink className="h-3.5 w-3.5 opacity-60" />
              </a>
            )}

            {/* GitHub Repository URL */}
            {details?.githubUrl && (
              <a
                href={details.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-foreground/15 bg-foreground/5 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-foreground transition-all hover:bg-foreground/10 hover:border-foreground/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-xs"
              >
                <GitHubIcon className="h-4 w-4" />
                <span>Repository GitHub</span>
                <ExternalLink className="h-3.5 w-3.5 opacity-60" />
              </a>
            )}
          </div>
        </section>

        {/* 2. Media Showcase Section (Dokumentasi Gambar & Demo) */}
        <section className="mb-8 sm:mb-10">
          {category === 'Android' ? (
            /* Android Smartphone Emulator Showcase */
            <div className="w-full flex justify-center items-center py-1 sm:py-3">
              {/* Smartphone Chassis with Side Buttons & Glow */}
              <div className="relative w-full max-w-[290px] sm:max-w-[320px] md:max-w-[340px]">
                {/* Subtle phone ambient back-glow */}
                <div className="absolute -inset-2 rounded-[3.5rem] bg-gradient-to-b from-amber-500/15 via-blue-500/10 to-transparent blur-xl pointer-events-none -z-10" />

                {/* Physical Side Buttons */}
                <div className="absolute -left-[3px] top-24 h-9 w-[3px] rounded-l-xs bg-neutral-600 border-l border-white/20" />
                <div className="absolute -left-[3px] top-36 h-9 w-[3px] rounded-l-xs bg-neutral-600 border-l border-white/20" />
                <div className="absolute -right-[3px] top-28 h-12 w-[3px] rounded-r-xs bg-neutral-600 border-r border-white/20" />

                {/* Outer Bezel Frame */}
                <div className="relative aspect-[9/19] rounded-[2.8rem] sm:rounded-[3.2rem] p-2.5 sm:p-3 bg-gradient-to-b from-[#33374D] via-[#1E2132] to-[#111320] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,255,255,0.25)] ring-1 ring-white/15">
                  {/* Top Speaker Earpiece Slit */}
                  <div className="absolute top-2 inset-x-0 mx-auto h-[3px] w-12 rounded-full bg-neutral-700/80 z-30" />

                  {/* Front Punch-Hole Camera */}
                  <div className="absolute top-4 inset-x-0 mx-auto h-3.5 w-3.5 rounded-full bg-black border border-white/20 z-30 flex items-center justify-center shadow-inner">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#1b3b5a]" />
                  </div>

                  {/* 19:9 Phone Screen Display */}
                  <div className="relative h-full w-full overflow-hidden rounded-[2.2rem] sm:rounded-[2.5rem] bg-black shadow-inner">
                    {isPlayingVideo && details?.videoDemoUrl ? (
                      <video
                        src={details.videoDemoUrl}
                        controls
                        autoPlay
                        playsInline
                        className="h-full w-full object-contain bg-black [&:fullscreen]:object-contain [&:-webkit-full-screen]:object-contain"
                      >
                        Browser tidak mendukung pemutar video.
                      </video>
                    ) : (
                      <div
                        onClick={() => details?.videoDemoUrl && setIsPlayingVideo(true)}
                        className="group relative h-full w-full cursor-pointer select-none"
                      >
                        <img
                          src={collageImages?.[1] || src}
                          alt={title}
                          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                          loading="eager"
                        />

                        {/* Play Video Overlay inside Phone Screen */}
                        {details?.videoDemoUrl && (
                          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[1.5px] transition-all duration-300 group-hover:bg-black/50">
                            <div className="relative flex h-16 w-16 sm:h-18 sm:w-18 items-center justify-center rounded-full bg-amber-400 text-black shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-amber-500/60">
                              <span className="absolute -inset-2 rounded-full border border-amber-400/40 animate-ping pointer-events-none" />
                              <Play className="h-7 w-7 sm:h-8 sm:w-8 fill-black ml-1" />
                            </div>
                            <span className="mt-3.5 rounded-full bg-black/80 backdrop-blur-md px-4 py-1 text-xs font-bold tracking-wide text-white shadow-xl border border-white/20 transition-transform duration-300 group-hover:scale-105">
                              Putar Demo Video
                            </span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Bottom Android Home Indicator Bar */}
                    <div className="absolute bottom-2 inset-x-0 mx-auto h-1 w-24 rounded-full bg-white/40 pointer-events-none z-30" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Video / Main Landscape Screenshot Showcase for Web & ML */
            <div className="relative aspect-video w-full max-w-5xl mx-auto overflow-hidden rounded-2xl border border-foreground/15 bg-black shadow-2xl">
              {isPlayingVideo && details?.videoDemoUrl ? (
                <video
                  src={details.videoDemoUrl}
                  controls
                  autoPlay
                  playsInline
                  className="h-full w-full object-contain bg-black [&:fullscreen]:object-contain [&:-webkit-full-screen]:object-contain"
                >
                  Browser Anda tidak mendukung pemutar video.
                </video>
              ) : (
                <div className="group relative h-full w-full">
                  <img
                    src={src}
                    alt={title}
                    className="h-full w-full object-cover"
                    loading="eager"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Play Video Demo Overlay */}
                  {details?.videoDemoUrl && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 backdrop-blur-[1px] transition-all duration-300 group-hover:bg-black/45">
                      <button
                        onClick={() => setIsPlayingVideo(true)}
                        className="group/btn flex flex-col items-center gap-2.5 transition-transform duration-300 hover:scale-105 cursor-pointer"
                        aria-label="Putar Demo Video"
                      >
                        <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-amber-400 text-black shadow-2xl transition-all duration-300 group-hover/btn:bg-amber-300 group-hover/btn:shadow-amber-500/50">
                          <span className="absolute -inset-2 rounded-full border border-amber-400/40 animate-ping pointer-events-none" />
                          <Play className="h-7 w-7 sm:h-9 sm:w-9 fill-black ml-1" />
                        </div>
                        <span className="rounded-full bg-black/80 backdrop-blur-md px-4 py-1.5 text-xs sm:text-sm font-bold tracking-wide text-white shadow-xl border border-white/20">
                          Putar Demo Video
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </section>

        {/* 3. Detail Section: Deskripsi, Key Insight, Outcome (Spans full max-w-[1400px], compact padding) */}
        <section className="w-full border-t border-foreground/10 pt-6 sm:pt-8 space-y-6 sm:space-y-7">
          {/* Deskripsi */}
          <div>
            <h2 className="flex items-center gap-2.5 text-xs font-semibold tracking-widest text-foreground/60 sm:text-sm uppercase mb-3">
              <span className="h-0.5 w-6 bg-amber-400"></span>
              Deskripsi
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-foreground/80 text-justify">
              {details?.overview || project.description}
            </p>
          </div>

          {/* Key Insight (Organized in responsive 2-column grid for wide reading balance) */}
          {details?.keyInsights && details.keyInsights.length > 0 && (
            <div>
              <h2 className="flex items-center gap-2.5 text-xs font-semibold tracking-widest text-foreground/60 sm:text-sm uppercase mb-3">
                <span className="h-0.5 w-6 bg-amber-400"></span>
                Key Insight
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3.5">
                {details.keyInsights.map((insight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-foreground/10 bg-foreground/[0.02] p-3.5 sm:p-4 transition-colors hover:border-foreground/20 hover:bg-foreground/[0.04]"
                  >
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-amber-400 shrink-0" />
                    <p className="text-xs sm:text-sm leading-relaxed text-foreground/85">
                      <strong className="font-bold text-foreground">
                        {insight.title}:
                      </strong>{' '}
                      {insight.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Outcome */}
          {details?.outcome && (
            <div>
              <h2 className="flex items-center gap-2.5 text-xs font-semibold tracking-widest text-foreground/60 sm:text-sm uppercase mb-3">
                <span className="h-0.5 w-6 bg-amber-400"></span>
                Outcome
              </h2>
              <div className="rounded-2xl border border-amber-500/20 bg-amber-400/[0.03] p-4 sm:p-5">
                <p className="text-xs sm:text-sm md:text-base leading-relaxed text-foreground/85 text-justify">
                  {details.outcome}
                </p>
              </div>
            </div>
          )}
        </section>

        {/* 4. Bottom Pagination: Previous & Next Project Navigation */}
        <section className="w-full border-t border-foreground/10 mt-8 sm:mt-10 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {prevProject ? (
              <button
                onClick={() => onSelectProject?.(prevProject)}
                className="group flex w-full sm:w-auto items-center gap-3 rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-3.5 sm:p-4 text-left transition-all hover:border-foreground/30 hover:bg-foreground/[0.05] cursor-pointer"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-foreground/15 bg-background transition-transform group-hover:-translate-x-1">
                  <ChevronLeft className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-foreground/50">
                    Proyek Sebelumnya
                  </span>
                  <h4 className="text-xs sm:text-sm md:text-base font-bold text-foreground">
                    {prevProject.title}
                  </h4>
                </div>
              </button>
            ) : (
              <div />
            )}

            {nextProject ? (
              <button
                onClick={() => onSelectProject?.(nextProject)}
                className="group flex w-full sm:w-auto items-center justify-end gap-3 rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-3.5 sm:p-4 text-right transition-all hover:border-foreground/30 hover:bg-foreground/[0.05] cursor-pointer"
              >
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-foreground/50">
                    Proyek Berikutnya
                  </span>
                  <h4 className="text-xs sm:text-sm md:text-base font-bold text-foreground">
                    {nextProject.title}
                  </h4>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-foreground/15 bg-background transition-transform group-hover:translate-x-1">
                  <ChevronRight className="h-4 w-4" />
                </div>
              </button>
            ) : (
              <div />
            )}
          </div>
        </section>
      </main>
    </div>
  );
};
