
import { supabase } from '@/integrations/supabase/client';
import { BlogPostInsert, BlogPostResponse } from '@/lib/supabase-types';
import type { BlogPost } from '@/lib/types';

// Sample blog post data for development
const mockBlogPosts: BlogPostResponse[] = [
  {
    id: 1,
    title: "7 Ways AI Chatbots Are Transforming Customer Service",
    slug: "ai-chatbots-transforming-customer-service",
    excerpt: "Discover how AI chatbots are revolutionizing customer service and improving business outcomes.",
    content: "Artificial intelligence has made significant strides in recent years, particularly in the realm of conversational AI. Modern chatbots can now understand context, remember previous interactions, and provide personalized responses that closely mimic human conversation.\n\nFor businesses, this technological advancement presents an incredible opportunity to transform customer service operations. AI chatbots can handle routine inquiries, provide instant responses at any time of day, and seamlessly escalate complex issues to human agents when necessary.\n\nHere are seven ways AI chatbots are revolutionizing customer service:\n\n1. 24/7 Availability\n2. Instant Response Times\n3. Consistent Service Quality\n4. Personalized Customer Interactions\n5. Reduced Operational Costs\n6. Valuable Customer Insights\n7. Seamless Omnichannel Support",
    category: "Customer Service",
    tags: ["AI", "Customer Service", "Chatbots", "Business Technology"],
    date: "2025-05-01",
    author: "Jennifer Wong",
    image: "/assets/blog/customer-service-ai.jpg",
    published: true
  },
  {
    id: 2,
    title: "The Complete Guide to Training Your AI Chatbot",
    slug: "complete-guide-training-ai-chatbot",
    excerpt: "Learn how to effectively train your AI chatbot to provide better customer experiences.",
    content: "Training an AI chatbot is a continuous process that requires careful planning, quality data, and ongoing refinement. By following best practices and investing in proper training, businesses can create chatbots that deliver exceptional customer experiences and drive tangible business results.\n\nIn this comprehensive guide, we'll explore the key steps to effectively train your AI chatbot:\n\n1. Define Clear Objectives\nBefore diving into training, establish what you want your chatbot to accomplish. Are you aiming to reduce support tickets, increase sales, or improve user engagement? Clear objectives will guide your training process and help measure success.\n\n2. Collect Quality Training Data\nYour chatbot is only as good as the data it learns from. Gather diverse, relevant, and high-quality conversation examples that represent real user interactions. Include various phrasings of the same questions to improve natural language understanding.\n\n3. Design Conversation Flows\nMap out common user journeys and create structured conversation flows. Consider different paths users might take and plan appropriate responses for each scenario. This helps ensure your chatbot can handle conversations naturally.",
    category: "AI Training",
    tags: ["AI Training", "Chatbots", "Machine Learning", "Natural Language Processing"],
    date: "2025-04-22",
    author: "Michael Chen",
    image: "/assets/blog/training-ai-chatbot.jpg",
    published: true
  },
  {
    id: 3,
    title: "Measuring Chatbot ROI: Key Metrics & Frameworks",
    slug: "measuring-chatbot-roi-metrics-frameworks",
    excerpt: "Discover the essential metrics and frameworks for measuring the ROI of your chatbot implementation.",
    content: "As businesses increasingly invest in chatbot technology, measuring the return on investment (ROI) has become crucial for justifying these initiatives and optimizing performance. This article explores the key metrics and frameworks that businesses should consider when evaluating chatbot ROI.\n\nChatbots represent a significant investment for many organizations, from implementation costs to ongoing maintenance and improvement. To ensure this investment delivers value, businesses need a structured approach to measuring performance and impact.\n\nKey Performance Indicators for Chatbot ROI\n\n1. Cost Reduction Metrics\n- Average handling time\n- Cost per conversation\n- Support ticket deflection rate\n- Agent utilization improvement\n- Training cost savings\n\n2. Revenue Generation Metrics\n- Conversion rate\n- Cross-selling and upselling success\n- Cart abandonment reduction\n- Lead generation volume\n- Customer lifetime value impact",
    category: "Analytics",
    tags: ["Analytics", "ROI", "Business Metrics", "Chatbots"],
    date: "2025-04-15",
    author: "Sarah Johnson",
    image: "/assets/blog/chatbot-roi-metrics.jpg",
    published: true
  }
];

// Fetch all blog posts
export async function fetchBlogPosts(): Promise<BlogPost[]> {
  // For now, use mock data since we don't have the blog_posts table yet
  // In a real implementation, this would query Supabase
  
  // Transform the data to match our BlogPost type
  return mockBlogPosts.map(post => ({
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    slug: post.slug,
    category: post.category,
    tags: post.tags || [],
    date: post.date,
    author: post.author,
    readTime: post.read_time || `${Math.ceil((post.content?.length || 0) / 1500)} min read`,
    image: post.image
  }));
}

// Fetch a single blog post by slug
export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  // For now, use mock data
  const post = mockBlogPosts.find(p => p.slug === slug);
  
  if (!post) return null;
  
  return {
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    slug: post.slug,
    category: post.category,
    tags: post.tags || [],
    date: post.date,
    author: post.author,
    readTime: post.read_time || `${Math.ceil((post.content?.length || 0) / 1500)} min read`,
    image: post.image
  };
}

// Create a new blog post
export async function createBlogPost(post: BlogPostInsert) {
  // In a real implementation, this would insert to Supabase
  console.log("Creating blog post (mock):", post);
  // Mock successful operation
  return { success: true };
}

// Update an existing blog post
export async function updateBlogPost(id: number, post: Partial<BlogPostInsert>) {
  // In a real implementation, this would update a post in Supabase
  console.log("Updating blog post (mock):", id, post);
  // Mock successful operation
  return { success: true };
}

// Delete a blog post
export async function deleteBlogPost(id: number) {
  // In a real implementation, this would delete from Supabase
  console.log("Deleting blog post (mock):", id);
  // Mock successful operation
  return { success: true };
}

// Get all unique tags
export async function fetchAllTags(): Promise<string[]> {
  // Extract all tags from mock data
  const allTags = mockBlogPosts.flatMap(post => post.tags || []);
  return [...new Set(allTags)];
}

// Get all unique categories
export async function fetchAllCategories(): Promise<string[]> {
  // Extract all categories from mock data
  const categories = mockBlogPosts.map(post => post.category);
  return [...new Set(categories)];
}
