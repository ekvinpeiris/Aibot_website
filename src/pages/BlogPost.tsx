
import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ShareButtons from "@/components/ShareButtons";
import CommentSection from "@/components/CommentSection";
import SEO from "@/components/SEO";
import { getPostBySlug, getRelatedPosts } from "@/lib/blogData";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = getPostBySlug(slug || "");
  const relatedPosts = post ? getRelatedPosts(post, 3) : [];
  
  useEffect(() => {
    if (!post) {
      // Post not found, redirect to blog listing
      navigate("/blog");
    }
  }, [post, navigate]);

  if (!post) {
    return null; // This will be handled by the useEffect redirect
  }

  return (
    <Layout>
      <SEO 
        title={`${post.title} | ChatAI Blog`}
        description={post.excerpt}
        image={post.image.startsWith("http") ? post.image : `${window.location.origin}${post.image}`}
        url={window.location.href}
        article={true}
        tags={post.tags}
      />
      
      <article className="container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to all articles
            </Link>
          </div>
          
          <header className="mb-8">
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge variant="outline" className="bg-primary/10">
                {post.category}
              </Badge>
              {post.tags.slice(0, 3).map((tag, index) => (
                <Badge key={index} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex items-center justify-between text-muted-foreground">
              <div className="flex items-center">
                <span className="font-medium text-foreground">{post.author}</span>
                <span className="mx-2">•</span>
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
              
              <ShareButtons 
                title={post.title} 
                url={window.location.href} 
                description={post.excerpt}
              />
            </div>
          </header>
          
          <div className="mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto rounded-lg"
            />
          </div>
          
          <div className="prose prose-lg max-w-none dark:prose-invert mb-12">
            {post.content?.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, index) => (
              <Link to={`/blog?tag=${tag}`} key={index}>
                <Badge variant="outline" className="hover:bg-accent cursor-pointer">
                  {tag}
                </Badge>
              </Link>
            ))}
          </div>
          
          <hr className="my-12" />
          
          <CommentSection postId={post.id} />
          
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link to={`/blog/${relatedPost.slug}`} key={relatedPost.id}>
                    <Card className="h-full hover:shadow-md transition-shadow">
                      <div className="aspect-video bg-muted overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <CardHeader className="p-4 pb-2">
                        <Badge variant="secondary" className="mb-2 inline-block">
                          {relatedPost.category}
                        </Badge>
                        <h3 className="font-semibold line-clamp-2">{relatedPost.title}</h3>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Want to learn more about AI chatbots?</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/demo-landing">
                <Button>Book a Demo</Button>
              </Link>
              <Link to="/blog">
                <Button variant="outline">Read More Articles</Button>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
