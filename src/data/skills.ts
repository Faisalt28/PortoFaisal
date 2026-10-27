export interface SkillCategory {
  title: string;
  items: string[];
}

export interface SoftSkill {
  name: string;
  description?: string;
}

export const hardSkills: SkillCategory[] = [
  {
    title: 'Mobile Development',
    items: ['Android Native', 'Jetpack Compose', 'Mobile ML Deployment'],
  },
  {
    title: 'Web Development',
    items: ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend & Cloud',
    items: ['RESTful API', 'Firebase', 'Cloudflare'],
  },
  {
    title: 'Data & AI',
    items: ['Machine Learning', 'Deep Learning'],
  },
  {
    title: 'Bahasa Pemrograman',
    items: ['Kotlin', 'Python', 'TypeScript', 'JavaScript'],
  },
  {
    title: 'Metodologi',
    items: ['Agile', 'Waterfall'],
  },
];

export const toolsCategories: SkillCategory[] = [
  {
    title: 'Technical & Development',
    items: ['Android Studio', 'VS Code', 'Git', 'GitHub'],
  },
  {
    title: 'Productivity',
    items: ['Microsoft Office (Word, Excel, PowerPoint)'],
  },
];

export const softSkills: string[] = [
  'Problem Solving',
  'Team Collaboration',
  'Communication',
  'Project Management',
  'Time Management',
];
