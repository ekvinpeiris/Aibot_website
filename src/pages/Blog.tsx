
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import blogPosts from "@/lib/blogData";
import { searchPosts, filterPostsByTag, initializeSearch } from "@/lib/searchUtils";
import { getAllTags, getAllCategories } from "@/lib/blogData";
import SearchBar from "@/components/SearchBar";
import TagFilter from "@/components/TagFilter";
import Pagination from "@/components/Pagination";
import ShareButtons from "@/components/ShareButtons";
import SEO from "@/components/SEO";
import { useIsMobile } from "@/hooks/use-mobile";

const POSTS_PER_PAGE = 6;

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [paginatedPosts, setPaginatedPosts] = useState(blogPosts.slice(0, POSTS_PER_PAGE));
  const allTags = ["All", ...getAllCategories(), ...getAllTags()];
  const isMobile = useIsMobile();
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  // Initialize search
  useEffect(() => {
    initializeSearch(blogPosts);
  }, []);

  // Handle filtering and searching
  useEffect(() => {
    let result = blogPosts;
    
    // First search
    if (searchQuery) {
      result = searchPosts(searchQuery, result);
    }
    
    // Then filter by tag
    result = filterPostsByTag(result, selectedTag);
    
    setFilteredPosts(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchQuery, selectedTag]);

  // Handle pagination
  useEffect(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    setPaginatedPosts(filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE));
    
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [filteredPosts, currentPage]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleTagSelect = (tag: string) => {
    setSelectedTag(tag);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Layout>
      <SEO 
        title="ChatAI Blog - Expert Insights on AI Chatbots & Conversational AI"
        description="Expert insights, guides, and trends about AI chatbots and conversational AI technology to help you improve customer experience and grow your business."
        tags={["AI Chatbots", "Conversational AI", "Customer Experience", "Business Technology"]}
      />
      
      <div className="container py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ChatAI Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert insights, guides, and trends about AI chatbots and conversational AI technology.
          </p>
        </header>
        
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-8">
          <div className="md:w-3/4">
            <SearchBar 
              onSearch={handleSearch}
              searchQuery={searchQuery}
            />
          </div>
          <div className="md:w-1/4">
            <select
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
              value={selectedTag}
              onChange={(e) => handleTagSelect(e.target.value)}
            >
              {allTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <TagFilter 
          allTags={allTags.slice(0, 10)} // Limit displayed tags to avoid overflow
          selectedTag={selectedTag}
          onSelectTag={handleTagSelect}
        />
        
        {paginatedPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedPosts.map((post) => (
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
                      <h3 className="font-semibold text-lg line-clamp-2">{post.title}</h3>
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
            
            <Pagination 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-medium mb-2">No articles found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your search or filter to find what you're looking for.</p>
            <div className="flex justify-center gap-4">
              <button
                className="px-4 py-2 border rounded-md hover:bg-accent transition-colors"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTag("All");
                }}
              >
                Reset Filters
              </button>
            </div>
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
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 border rounded-md w-full md:w-auto" 
              />
              <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
