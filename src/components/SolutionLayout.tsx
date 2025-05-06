
import { ReactNode } from "react";
import Layout from "./Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

interface SolutionLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  heroImage?: string;
}

const SolutionLayout = ({ children, title, subtitle, heroImage }: SolutionLayoutProps) => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-accent to-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{title}</h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">{subtitle}</p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/demo-landing">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Book a Demo
                  </Button>
                </Link>
              </div>
              
              <div className="mt-8 flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="text-primary h-5 w-5" />
                <span>No credit card required</span>
              </div>
            </div>
            
            {heroImage && (
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
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your customer experience?</h2>
            <p className="text-lg mb-8 opacity-90">See how our AI chatbot can address your specific industry needs and boost your business.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/demo-landing">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Book a Demo
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Sales
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
