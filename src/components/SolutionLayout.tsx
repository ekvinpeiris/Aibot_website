
import { ReactNode } from "react";
import Layout from "./Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface SolutionLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  heroImage?: string;
}

const SolutionLayout = ({ children, title, subtitle, heroImage }: SolutionLayoutProps) => {
  const isMobile = useIsMobile();
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 md:py-24 bg-gradient-to-b from-accent to-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-3 md:mb-4">{title}</h1>
              <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8">{subtitle}</p>
              
              <div className="flex">
                <Link to="/demo-landing">
                  <Button size={isMobile ? "default" : "lg"} className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Book a Demo
                  </Button>
                </Link>
              </div>
              
              <div className="mt-6 md:mt-8 flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="text-primary h-4 w-4 md:h-5 md:w-5" />
                <span className="text-sm md:text-base">No credit card required</span>
              </div>
            </div>
            
            {heroImage && !isMobile && (
              <div className="lg:flex justify-end hidden">
                <div className="relative">
                  <div className="w-[500px] h-[500px] bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full absolute -top-20 -right-20 blur-3xl"></div>
                  <img 
                    src={heroImage} 
                    alt={`${title} illustration`} 
                    className="relative z-10 max-w-md rounded-lg shadow-xl" 
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      {children}
      
      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto px-4 md:px-0">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Ready to transform your customer experience?</h2>
            {!isMobile && (
              <p className="text-base md:text-lg mb-6 md:mb-8 opacity-90">See how our AI chatbot can address your specific industry needs and boost your business.</p>
            )}
            <div>
              <Link to="/demo-landing">
                <Button size={isMobile ? "default" : "lg"} variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SolutionLayout;
