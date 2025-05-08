
import type { Database } from '@/integrations/supabase/types';

// Auth Types
export type AdminUser = Database['public']['Tables']['admin_users']['Row'];

// Blog Types
export interface BlogPostInsert {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  image: string;
  published: boolean;
}

export type BlogPostResponse = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  date: string;
  author: string;
  read_time?: string;
  image: string;
  published: boolean;
};

// Additional types for leads and other data
export type LeadData = Database['public']['Tables']['leads']['Row'];
export type PricingPlan = Database['public']['Tables']['pricing_plans']['Row'];
