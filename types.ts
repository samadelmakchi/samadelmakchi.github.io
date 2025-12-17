
export interface Skill {
  title: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  items: Skill[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  major: string;
  university: string;
  years: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface SocialLink {
  name: string;
  url: string;
  color: string;
  icon: string;
}
