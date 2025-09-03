export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: number;
  imageUrl: string;
  tags: string[];
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

export type Language = 'en' | 'vi';

export interface Translation {
  [key: string]: string;
}