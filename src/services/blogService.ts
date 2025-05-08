
import { supabase } from '@/integrations/supabase/client';
import { BlogPostInsert, BlogPostResponse } from '@/lib/supabase-types';
import type { BlogPost } from '@/lib/types';

// Fetch all blog posts from Supabase
export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('date', { ascending: false });
    
  if (error) {
    console.error("Error fetching blog posts:", error);
    throw error;
  }
  
  // Transform the data to match our BlogPost type
  return (data || []).map((post: any) => ({
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    slug: post.slug,
    category: post.category,
    tags: post.tags || [],
    date: post.date,
    author: post.author,
    readTime: post.read_time || `${Math.ceil(post.content?.length / 1500)} min read`,
    image: post.image
  }));
}

// Fetch a single blog post by slug
export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .single();
    
  if (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
  
  if (!data) return null;
  
  return {
    id: data.id,
    title: data.title,
    excerpt: data.excerpt,
    content: data.content,
    slug: data.slug,
    category: data.category,
    tags: data.tags || [],
    date: data.date,
    author: data.author,
    readTime: data.read_time || `${Math.ceil(data.content?.length / 1500)} min read`,
    image: data.image
  };
}

// Create a new blog post
export async function createBlogPost(post: BlogPostInsert) {
  const { error } = await supabase
    .from('blog_posts')
    .insert([
      {
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: post.content,
        category: post.category,
        tags: post.tags,
        date: new Date().toISOString().split('T')[0],
        author: post.author,
        image: post.image,
        published: post.published
      }
    ]);
    
  if (error) {
    console.error("Error creating blog post:", error);
    throw error;
  }
}

// Update an existing blog post
export async function updateBlogPost(id: number, post: Partial<BlogPostInsert>) {
  const { error } = await supabase
    .from('blog_posts')
    .update(post)
    .eq('id', id);
    
  if (error) {
    console.error("Error updating blog post:", error);
    throw error;
  }
}

// Delete a blog post
export async function deleteBlogPost(id: number) {
  const { error } = await supabase
    .from('blog_posts')
    .delete()
    .eq('id', id);
    
  if (error) {
    console.error("Error deleting blog post:", error);
    throw error;
  }
}

// Get all unique tags
export async function fetchAllTags(): Promise<string[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('tags');
    
  if (error) {
    console.error("Error fetching tags:", error);
    return [];
  }
  
  // Flatten all tags and get unique values
  const allTags = data?.flatMap(post => post.tags || []) || [];
  return [...new Set(allTags)];
}

// Get all unique categories
export async function fetchAllCategories(): Promise<string[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('category');
    
  if (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
  
  // Get unique categories
  const categories = data?.map(post => post.category) || [];
  return [...new Set(categories)];
}
