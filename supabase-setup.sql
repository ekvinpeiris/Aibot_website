
-- Create blog posts table
CREATE TABLE IF NOT EXISTS public.blog_posts (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL,
  tags TEXT[] NOT NULL DEFAULT '{}',
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  author TEXT NOT NULL,
  image TEXT NOT NULL,
  read_time TEXT,
  published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Create a function to update the updated_at column
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = NOW();
   RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create a trigger to call the function
DROP TRIGGER IF EXISTS update_blog_posts_updated_at ON blog_posts;
CREATE TRIGGER update_blog_posts_updated_at
BEFORE UPDATE ON blog_posts
FOR EACH ROW
EXECUTE FUNCTION update_modified_column();

-- Enable Row Level Security
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Anyone can read published posts
CREATE POLICY "Anyone can read published posts"
ON public.blog_posts
FOR SELECT
USING (published = true);

-- Only authenticated users can insert posts
CREATE POLICY "Authenticated users can insert posts"
ON public.blog_posts
FOR INSERT
TO authenticated
WITH CHECK (true);

-- Only authenticated users can update their own posts
CREATE POLICY "Authenticated users can update posts"
ON public.blog_posts
FOR UPDATE
TO authenticated
USING (true);

-- Only authenticated users can delete posts
CREATE POLICY "Authenticated users can delete posts"
ON public.blog_posts
FOR DELETE
TO authenticated
USING (true);

-- Sample data (uncomment and run this separately if you want sample data)
/*
INSERT INTO public.blog_posts (title, slug, excerpt, content, category, tags, date, author, image, published)
VALUES
('Getting Started with AI Chatbots', 'getting-started-with-ai-chatbots', 
 'Learn how to implement AI chatbots for your business in this comprehensive guide.', 
 'AI chatbots have revolutionized customer service across industries. This article explores the fundamentals of AI chatbot implementation and best practices for businesses.\n\nChatbots use natural language processing (NLP) to understand user queries and provide relevant responses. They can be trained on various datasets to improve their accuracy over time.\n\nImplementing a chatbot requires careful planning. First, identify the specific use cases where a chatbot can add value. Then, select the appropriate platform or framework based on your technical requirements and budget constraints.\n\nOnce deployed, monitor your chatbot''s performance and collect user feedback to continuously improve its responses and functionality.', 
 'Guides', 
 ARRAY['AI', 'Chatbots', 'Implementation'], 
 '2025-04-01', 
 'Alex Johnson', 
 'https://images.unsplash.com/photo-1677442136019-21780ecad995', 
 true),

('The ROI of AI Chatbots in Customer Service', 'roi-ai-chatbots-customer-service', 
 'Discover how AI chatbots can reduce costs and increase customer satisfaction.', 
 'Implementing AI chatbots in customer service can lead to significant returns on investment. This article examines the cost savings and customer satisfaction benefits of chatbot implementation.\n\nChatbots can handle multiple customer inquiries simultaneously, reducing wait times and increasing service efficiency. They operate 24/7, ensuring customers receive support outside of business hours.\n\nStudies show that businesses can reduce customer service costs by up to 30% by implementing chatbots. Additionally, modern AI-powered chatbots can resolve up to 80% of routine customer service inquiries without human intervention.\n\nBeyond cost savings, chatbots contribute to customer satisfaction by providing instant responses and consistent service quality. With proper implementation, businesses can expect improved customer retention and higher Net Promoter Scores.', 
 'Business', 
 ARRAY['ROI', 'Customer Service', 'Cost Reduction'], 
 '2025-04-15', 
 'Sarah Miller', 
 'https://images.unsplash.com/photo-1617042375876-a13e36732a04', 
 true),

('Future Trends in Conversational AI', 'future-trends-conversational-ai', 
 'Explore the emerging technologies that will shape the next generation of AI chatbots.', 
 'The field of conversational AI is evolving rapidly. This article explores upcoming trends and technologies that will define the next generation of chatbots and virtual assistants.\n\nMultimodal AI systems that combine text, voice, and visual processing capabilities are becoming increasingly sophisticated. These systems can interpret user intent across different communication channels and provide more natural interactions.\n\nEmotional intelligence in AI is another significant trend. Future chatbots will detect user emotions through tone analysis and sentiment detection, allowing them to respond with appropriate empathy and support.\n\nPersonalization will reach new heights as AI systems leverage more data points to understand individual preferences and adapt their responses accordingly. This hyper-personalization will make interactions feel more human and relevant.', 
 'Technology', 
 ARRAY['AI Trends', 'Future Tech', 'Innovation'], 
 '2025-05-01', 
 'Michael Chang', 
 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a', 
 true)
*/
