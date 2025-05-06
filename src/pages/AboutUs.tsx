
import Layout from "@/components/Layout";
import { useIsMobile } from "@/hooks/use-mobile";

const AboutUs = () => {
  const isMobile = useIsMobile();
  
  return (
    <Layout>
      <div className="container py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-10">About Us</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              ChatAI is on a mission to transform how businesses communicate with their customers through innovative AI-powered chatbot solutions.
            </p>
            
            <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">Our Story</h2>
            <p>
              Founded in 2022, ChatAI began with a simple observation: most customer service experiences were frustrating, time-consuming, and inefficient. We saw an opportunity to leverage the latest advances in artificial intelligence to create chatbots that truly understand customer needs and provide valuable, instant assistance.
            </p>
            
            <p>
              What started as a small team of AI enthusiasts has grown into a company trusted by businesses across industries including e-commerce, healthcare, travel, education, and service businesses.
            </p>
            
            <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">Our Mission</h2>
            <p>
              We believe that exceptional customer service shouldn't be limited by business hours or staffing constraints. Our mission is to democratize access to advanced AI technology, enabling businesses of all sizes to provide responsive, personalized support to their customers around the clock.
            </p>
            
            <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="p-6 bg-accent rounded-lg">
                <h3 className="text-xl font-medium mb-3">Innovation</h3>
                <p>We're constantly pushing the boundaries of what AI chatbots can do, investing heavily in R&D to stay at the cutting edge.</p>
              </div>
              
              <div className="p-6 bg-accent rounded-lg">
                <h3 className="text-xl font-medium mb-3">Customer Focus</h3>
                <p>We measure our success by the success of our clients and the satisfaction of their customers.</p>
              </div>
              
              <div className="p-6 bg-accent rounded-lg">
                <h3 className="text-xl font-medium mb-3">Accessibility</h3>
                <p>We design our products to be intuitive and easy to use, regardless of technical expertise.</p>
              </div>
              
              <div className="p-6 bg-accent rounded-lg">
                <h3 className="text-xl font-medium mb-3">Integrity</h3>
                <p>We're committed to ethical AI practices, transparency, and the protection of user data.</p>
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">Our Team</h2>
            <p>
              Our diverse team brings together expertise in artificial intelligence, natural language processing, software engineering, and customer experience design. United by a passion for innovation and problem-solving, we work together to build chatbot solutions that make a real difference for businesses and their customers.
            </p>
            
            {!isMobile && (
              <div className="mt-10">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Join Us</h2>
                <p>
                  We're always looking for talented individuals who share our vision and values. Check out our current openings or reach out to us directly.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
