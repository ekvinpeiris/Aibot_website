
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { CheckCircle2, MessagesSquare, Bot, BarChart, LineChart, Code2, Zap, ShieldCheck } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-32 overflow-hidden bg-gradient-to-b from-accent to-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-in">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-3 md:mb-4">Supercharge Your Customer Service with AI Chatbots</h1>
              <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8">Deploy intelligent AI chatbots that understand your customers and provide instant support, 24/7.</p>
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
            {!isMobile && (
              <div className="lg:flex justify-end hidden">
                <div className="relative">
                  <div className="w-[500px] h-[500px] bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full absolute -top-20 -right-20 blur-3xl"></div>
                  <div className="relative bg-white p-6 rounded-xl shadow-xl border border-muted max-w-md">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                        <MessagesSquare className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">24/7 Customer Support</h4>
                        <p className="text-sm text-muted-foreground">Provide instant answers and support, even outside business hours.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                        <Bot className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Advanced AI Technology</h4>
                        <p className="text-sm text-muted-foreground">Our chatbots understand context and learn from conversations.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                        <BarChart className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Detailed Analytics</h4>
                        <p className="text-sm text-muted-foreground">Monitor performance and optimize interactions over time.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                        <LineChart className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">60% Cost Reduction</h4>
                        <p className="text-sm text-muted-foreground">Reduce support costs while improving satisfaction.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Powerful Features for Every Business</h2>
            <p className="text-base md:text-lg text-muted-foreground">Our AI chatbots are designed to handle everything from simple FAQs to complex customer interactions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Feature cards - condensed for mobile */}
            <Card className="feature-card">
              <CardHeader className="pb-2">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold">AI-Powered Conversations</h3>
              </CardHeader>
              <CardContent>
                <p className={`${isMobile ? "text-sm" : ""} text-muted-foreground`}>Advanced natural language processing for human-like conversations that improve over time.</p>
              </CardContent>
            </Card>
            
            <Card className="feature-card">
              <CardHeader className="pb-2">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                  <Code2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold">Easy Integration</h3>
              </CardHeader>
              <CardContent>
                <p className={`${isMobile ? "text-sm" : ""} text-muted-foreground`}>Seamlessly integrate with your website, CRM, and other business tools with minimal coding.</p>
              </CardContent>
            </Card>
            
            <Card className="feature-card">
              <CardHeader className="pb-2">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                  <BarChart className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold">Detailed Analytics</h3>
              </CardHeader>
              <CardContent>
                <p className={`${isMobile ? "text-sm" : ""} text-muted-foreground`}>Track performance metrics and gain valuable insights into customer needs and behavior.</p>
              </CardContent>
            </Card>
            
            <Card className="feature-card">
              <CardHeader className="pb-2">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold">24/7 Availability</h3>
              </CardHeader>
              <CardContent>
                <p className={`${isMobile ? "text-sm" : ""} text-muted-foreground`}>Provide instant support around the clock without increasing staffing costs.</p>
              </CardContent>
            </Card>
            
            <Card className="feature-card">
              <CardHeader className="pb-2">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                  <MessagesSquare className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold">Multilingual Support</h3>
              </CardHeader>
              <CardContent>
                <p className={`${isMobile ? "text-sm" : ""} text-muted-foreground`}>Communicate with customers in their preferred language with support for 40+ languages.</p>
              </CardContent>
            </Card>
            
            <Card className="feature-card">
              <CardHeader className="pb-2">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold">Enterprise Security</h3>
              </CardHeader>
              <CardContent>
                <p className={`${isMobile ? "text-sm" : ""} text-muted-foreground`}>Bank-level encryption and compliance with GDPR, HIPAA, and other regulations.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Ready to transform your customer experience?</h2>
            {!isMobile && (
              <p className="text-lg md:text-xl opacity-90 mb-6 md:mb-8 max-w-2xl">
                Join thousands of businesses using ChatAI to provide exceptional customer support and drive sales.
              </p>
            )}
            <Link to="/demo-landing">
              <Button 
                size={isMobile ? "default" : "lg"} 
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90"
              >
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
