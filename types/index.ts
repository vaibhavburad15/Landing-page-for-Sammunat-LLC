// Common Types and Interfaces

export interface NavigationItem {
  name: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}
