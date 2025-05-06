
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "7 Ways AI Chatbots Are Transforming Customer Service",
    excerpt: "Discover how leading businesses are using AI chatbots to improve customer satisfaction and reduce support costs.",
    category: "Customer Service",
    date: "May 1, 2025",
    author: "Jennifer Wong",
    readTime: "8 min read",
    slug: "ai-chatbots-transforming-customer-service",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "The Complete Guide to Training Your AI Chatbot",
    excerpt: "Learn how to effectively train your AI chatbot to understand customer queries and provide accurate responses.",
    category: "AI Training",
    date: "April 22, 2025",
    author: "Michael Chen",
    readTime: "12 min read",
    slug: "guide-to-training-ai-chatbot",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Measuring Chatbot ROI: Key Metrics & Frameworks",
    excerpt: "Understand the right metrics to track and how to calculate the true ROI of your chatbot implementation.",
    category: "Analytics",
    date: "April 15, 2025",
    author: "Sarah Johnson",
    readTime: "10 min read",
    slug: "measuring-chatbot-roi",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "How to Choose the Right Chatbot Platform for Your Business",
    excerpt: "A comparison of the top AI chatbot platforms and how to select the one that best meets your business needs.",
    category: "Technology",
    date: "April 8, 2025",
    author: "David Martinez",
    readTime: "11 min read",
    slug: "choose-right-chatbot-platform",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Conversational AI: Beyond Simple Chatbots",
    excerpt: "Explore the advanced capabilities of conversational AI and how it's evolving beyond basic chatbot functionality.",
    category: "Artificial Intelligence",
    date: "April 1, 2025",
    author: "Lisa Parker",
    readTime: "9 min read",
    slug: "conversational-ai-beyond-chatbots",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Integrating Your Chatbot with CRM Systems",
    excerpt: "Step-by-step guide to connecting your AI chatbot with popular CRM platforms for enhanced customer insights.",
    category: "Integration",
    date: "March 25, 2025",
    author: "Robert Wilson",
    readTime: "7 min read",
    slug: "integrating-chatbot-crm-systems",
    image: "/placeholder.svg"
  },
];

const categories = [
  "All", 
  "Customer Service", 
  "AI Training", 
  "Analytics", 
  "Technology", 
  "Artificial Intelligence", 
  "Integration"
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter blog posts based on search query and selected category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
                          
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="container py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ChatAI Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert insights, guides, and trends about AI chatbots and conversational AI technology.
          </p>
        </header>
        
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-3/4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                className="pl-10"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="md:w-1/4">
            <select
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link to={`/blog/${post.slug}`} key={post.id} className="transition-transform hover:-translate-y-1">
                <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-video bg-muted overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="h-full w-full object-cover" 
                    />
                  </div>
                  <CardHeader className="p-4 pb-2">
                    <div className="flex justify-between items-center mb-2">
                      <Badge variant="secondary" className="font-normal">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="font-semibold text-lg">{post.title}</h3>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex items-center justify-between">
                    <div className="text-sm">
                      By <span className="font-medium">{post.author}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {post.readTime}
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-medium mb-2">No articles found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your search or filter to find what you're looking for.</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
        
        {/* Newsletter Subscription */}
        <div className="mt-16 bg-accent rounded-xl p-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-muted-foreground">Get the latest AI chatbot insights delivered straight to your inbox.</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <Input placeholder="Enter your email" className="max-w-xs" />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
