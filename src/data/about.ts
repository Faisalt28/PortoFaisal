export interface EducationItem {
  campus: string;
  logo?: string;
  major: string;
  gpa?: string;
  start: string;
  end: string;
}

export interface AchievementItem {
  title: string;
  issuer: string;
  date: string;
  description: string;
  logo?: string;
  documentUrl?: string;
  documentLabel?: string;
}

export interface ContactData {
  email: string;
  whatsappDisplay: string;
  whatsappNumber: string;
  linkedinLabel: string;
  linkedinUrl: string;
}

export interface AboutData {
  name: string;
  photoSrc: string;
  photoAlt: string;
  profile: string;
  education: EducationItem[];
  achievements: AchievementItem[];
  contact: ContactData;
}

export const aboutData: AboutData = {
  name: 'Faisal Triaputra, S.Kom.',
  photoSrc: '/faisal_profile.png',
  photoAlt: 'Foto Profil Faisal Triaputra',
  profile:
    'Lulusan Teknik Informatika dengan fondasi kuat dalam pemrosesan data, pengelolaan sistem digital, dan adaptasi teknologi baru. Memiliki rekam jejak sebagai Asisten Praktikum Mobile Native Programming, lulusan program IDCamp AI Engineer, dan Distinction Graduate MSIB Bangkit Academy Mobile Development. Memiliki kemampuan komunikasi publik, ketelitian tinggi, serta manajemen proyek yang siap memberikan kontribusi terbaik di dunia industri.',
  education: [
    {
      campus: 'Universitas Muhammadiyah Sukabumi',
      logo: '/ummi-logo.png',
      major: 'Teknik Informatika',
      gpa: '3.93',
      start: 'Oktober 2022',
      end: 'Juli 2026',
    },
  ],
  achievements: [
    {
      title: 'Lulusan Berprestasi Program Studi Teknik Informatika Angkatan 2022',
      issuer: 'Universitas Muhammadiyah Sukabumi',
      date: 'Agustus 2026',
      description:
        'Mendapatkan gelar sebagai lulusan berprestasi pada program studi Teknik Informatika dengan IPK 3,93',
      logo: '/ummi-logo.png',
    },
    {
      title: 'Distinction Graduate Bangkit Academy 2024 Batch 2 Mobile Development',
      issuer: 'Google, GoTo, Tokopedia, & Traveloka',
      date: 'Januari 2025',
      description:
        'Lulus dari program Bangkit Academy 2024 Batch 2 learning path Mobile Development sebagai 10% lulusan terbaik.',
      logo: '/bangkit-logo.png',
    },
  ],
  contact: {
    email: 'faisaltriaputra028@gmail.com',
    whatsappDisplay: '+62 812-8023-0924',
    whatsappNumber: '6281280230924',
    linkedinLabel: 'linkedin.com/in/faisal-triaputra',
    linkedinUrl: 'https://www.linkedin.com/in/faisal-triaputra',
  },
};
