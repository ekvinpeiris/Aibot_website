
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  slug: string;
  category: string;
  tags: string[];
  date: string;
  author: string;
  readTime: string;
  image: string;
}
