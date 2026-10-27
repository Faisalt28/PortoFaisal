import { motion } from 'framer-motion';
import { GmailIcon, LinkedInIcon, WhatsAppIcon } from '@/components/icons/ContactIcons';
import { aboutData } from '@/data/about';

const reveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

const ContactItem = ({
  id,
  icon,
  label,
  value,
  href,
  external,
}: {
  id: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) => (
  <a
    id={id}
    href={href}
    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    className="group flex items-center gap-3.5 border-b border-foreground/10 py-2.5 transition-colors hover:border-foreground/40 sm:py-3"
  >
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-foreground/5 transition-transform group-hover:scale-105 group-hover:bg-foreground/10">
      {icon}
    </span>
    <span className="min-w-0">
      <span className="block text-[11px] font-medium tracking-wider text-foreground/50">{label}</span>
      <span className="block truncate text-xs font-semibold sm:text-sm">{value}</span>
    </span>
  </a>
);

export const AboutSection = () => {
  const { name, photoSrc, photoAlt, profile, education, achievements, contact } = aboutData;

  return (
    <section id="about" aria-labelledby="about-title" className="bg-background px-4 pt-6 pb-6 sm:px-6 md:px-8 lg:px-12 md:pt-8 md:pb-8">
      <div className="mx-auto w-full max-w-[1400px]">
        {/* Header Label */}
        <motion.p {...reveal} className="mb-6 flex items-center gap-2.5 text-xs font-semibold tracking-widest text-foreground/60 sm:text-sm">
          <span className="h-0.5 w-6 bg-amber-400"></span>
          PROFIL
        </motion.p>

        {/* 2-Column Layout with Vertical Divider on Desktop */}
        <div className="grid grid-cols-12 items-start gap-0">
          {/* Kolom Kiri: Foto */}
          <motion.div {...reveal} className="col-span-4 flex justify-start pr-3 md:pr-8 lg:pr-12 sticky top-24">
            <div className="relative w-full">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5 shadow-sm">
                <img
                  src={photoSrc}
                  alt={photoAlt}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Garis Pembatas Vertikal */}
          <div className="col-span-1 mx-auto h-full min-h-[500px] w-px bg-foreground/15" aria-hidden="true"></div>

          {/* Kolom Kanan: Tulisan, Edukasi, Pencapaian & Kontak */}
          <div className="col-span-7 pl-3 md:pl-8 lg:pl-12">
            {/* Nama & Profil Singkat */}
            <motion.div {...reveal}>
              <h2 id="about-title" className="text-2xl font-black tracking-tight text-foreground leading-tight sm:text-3xl lg:text-4xl">
                {name}
              </h2>
              <p className="mt-3 text-justify text-sm sm:text-base leading-relaxed text-foreground/80">
                {profile}
              </p>
            </motion.div>

            {/* 1. Edukasi */}
            <div className="mt-7 md:mt-8">
              <motion.h3 {...reveal} className="mb-2 text-base font-bold sm:text-lg">
                Edukasi
              </motion.h3>
              <div className="border-t border-foreground/10 pt-3">
                {education.map((item, index) => (
                  <motion.div key={index} {...reveal} className="flex items-start gap-3.5">
                    {/* Logo Kampus (Ukuran setara ikon kontak: h-10 w-10) */}
                    {item.logo && (
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-foreground/5 p-1 transition-transform hover:scale-105">
                        <img
                          src={item.logo}
                          alt={`Logo ${item.campus}`}
                          className="h-full w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    )}

                    {/* Detail Edukasi */}
                    <div className="min-w-0 flex-1">
                      <span className="block text-[11px] font-medium tracking-wider text-foreground/50">
                        {item.start} – {item.end}
                      </span>
                      <h4 className="mt-0.5 text-sm font-bold sm:text-base leading-snug">
                        {item.campus}
                      </h4>
                      <p className="mt-0.5 text-xs text-foreground/75 sm:text-sm leading-relaxed">
                        {item.major}
                        {item.gpa && (
                          <>
                            <span className="mx-1.5 text-foreground/30">|</span>
                            <span className="font-semibold text-foreground">IPK {item.gpa}</span>
                          </>
                        )}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 2. Pencapaian (Setelah Edukasi) */}
            <div className="mt-7 md:mt-8">
              <motion.h3 {...reveal} className="mb-2 text-base font-bold sm:text-lg">
                Pencapaian
              </motion.h3>
              <div className="border-t border-foreground/10 pt-3.5">
                <div className="grid grid-cols-2 gap-2 md:gap-4">
                  {achievements.map((item, index) => (
                    <motion.div
                      key={index}
                      {...reveal}
                      className="group flex flex-col justify-between rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-2.5 md:p-4.5 transition-all duration-300 hover:border-amber-400/40 hover:bg-foreground/[0.04] shadow-xs"
                    >
                      <div>
                        {/* Header: Logo & Tanggal */}
                        <div className="flex items-center justify-between gap-2">
                          {item.logo && (
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white p-1 border border-foreground/10 shadow-xs">
                              <img
                                src={item.logo}
                                alt={`Logo ${item.issuer}`}
                                className="h-full w-full object-contain"
                                loading="lazy"
                              />
                            </div>
                          )}
                          <span className="rounded-full bg-foreground/5 px-2.5 py-0.5 text-[11px] font-mono font-medium text-foreground/60">
                            {item.date}
                          </span>
                        </div>

                        {/* Judul & Penyelenggara */}
                        <h4 className="mt-3 text-sm font-bold leading-snug text-foreground sm:text-base">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-xs font-semibold text-amber-500">
                          {item.issuer}
                        </p>

                        {/* Deskripsi */}
                        <p className="mt-2 text-xs leading-relaxed text-foreground/75">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Kontak */}
            <div className="mt-7 md:mt-8">
              <motion.h3 {...reveal} className="mb-2 text-base font-bold sm:text-lg">
                Kontak
              </motion.h3>
              <motion.div {...reveal} className="border-t border-foreground/10">
                <ContactItem
                  id="contact-email"
                  icon={<GmailIcon className="h-5 w-5" />}
                  label="EMAIL"
                  value={contact.email}
                  href={`mailto:${contact.email}`}
                />
                <ContactItem
                  id="contact-whatsapp"
                  icon={<WhatsAppIcon className="h-5 w-5" />}
                  label="WHATSAPP"
                  value={contact.whatsappDisplay}
                  href={`https://wa.me/${contact.whatsappNumber}`}
                  external
                />
                <ContactItem
                  id="contact-linkedin"
                  icon={<LinkedInIcon className="h-5 w-5 rounded-[3px]" />}
                  label="LINKEDIN"
                  value={contact.linkedinLabel}
                  href={contact.linkedinUrl}
                  external
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
