
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { CheckCircle2, MessagesSquare, Bot, BarChart, LineChart, Code2, Zap, ShieldCheck } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 overflow-hidden bg-gradient-to-b from-accent to-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in">
              <h1 className="text-5xl font-bold tracking-tight mb-4">Supercharge Your Customer Service with AI Chatbots</h1>
              <p className="text-xl text-muted-foreground mb-8">Deploy intelligent AI chatbots that understand your customers and provide instant support, 24/7.</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/demo">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Start Free Trial
                  </Button>
                </Link>
                <Link to="/lead-magnet">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    Download Free Guide
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="text-primary h-5 w-5" />
                <span>No credit card required</span>
              </div>
            </div>
            <div className="lg:flex justify-end hidden">
              <div className="relative">
                <div className="w-[500px] h-[500px] bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full absolute -top-20 -right-20 blur-3xl"></div>
                <div className="relative bg-white p-6 rounded-xl shadow-xl border border-muted max-w-md">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-accent rounded-lg p-3 text-sm">
                      Hello! I'm your AI assistant. How can I help you today with your questions about ChatAI?
                    </div>
                  </div>
                  <div className="flex items-start gap-4 mb-6 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-sm">JD</span>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 text-sm">
                      I'm looking for a chatbot solution that can integrate with our CRM system. Do you support that?
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-accent rounded-lg p-3 text-sm">
                      Absolutely! ChatAI integrates seamlessly with all major CRM platforms including Salesforce, HubSpot, and Zoho. Our API also allows for custom integrations with proprietary systems.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-accent/50">
        <div className="container">
          <p className="text-center text-muted-foreground mb-8">Trusted by 1000+ companies worldwide</p>
          <div className="flex justify-center flex-wrap gap-x-12 gap-y-6">
            {["Company 1", "Company 2", "Company 3", "Company 4", "Company 5"].map((company) => (
              <div key={company} className="text-xl font-bold text-muted-foreground/70">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Powerful AI Chatbot Features</h2>
            <p className="text-xl text-muted-foreground">Advanced tools to transform customer interactions and drive business growth.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="feature-card">
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <MessagesSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Natural Conversations</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Advanced natural language processing enables human-like conversations that understand context.</p>
              </CardContent>
            </Card>
            
            <Card className="feature-card">
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Analytics Dashboard</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Gain valuable insights with detailed analytics on customer interactions and chatbot performance.</p>
              </CardContent>
            </Card>
            
            <Card className="feature-card">
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Easy Integration</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Seamlessly integrates with your existing tech stack including CRM, help desk, and e-commerce platforms.</p>
              </CardContent>
            </Card>
            
            <Card className="feature-card">
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">24/7 Availability</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Provide instant responses to customer inquiries around the clock, even outside business hours.</p>
              </CardContent>
            </Card>
            
            <Card className="feature-card">
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Custom Training</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Train your bot on your specific products, services, and company knowledge base for accurate responses.</p>
              </CardContent>
            </Card>
            
            <Card className="feature-card">
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Enterprise Security</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">SOC 2 compliant with end-to-end encryption to keep your customer data safe and secure.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/features">
              <Button variant="outline" size="lg">
                Explore All Features
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your customer experience?</h2>
            <p className="text-lg mb-8 opacity-90">Join thousands of companies already using ChatAI to automate support, boost satisfaction, and drive growth.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/demo">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Start Free Trial
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

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground">Don't take our word for it. See what customers have achieved with ChatAI.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-5 w-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "ChatAI has transformed our customer service operations. We've reduced response time by 80% and increased customer satisfaction scores by 25%."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="font-medium">JS</span>
                  </div>
                  <div>
                    <p className="font-medium">Jennifer Smith</p>
                    <p className="text-sm text-muted-foreground">Customer Service Director, TechCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-5 w-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "The implementation was seamless. Within days, our chatbot was handling 60% of our support tickets, freeing our team to focus on complex issues."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="font-medium">MJ</span>
                  </div>
                  <div>
                    <p className="font-medium">Michael Johnson</p>
                    <p className="text-sm text-muted-foreground">CTO, E-commerce Solutions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-5 w-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "ChatAI's analytics have provided invaluable insights into our customers' needs. It's like having a 24/7 focus group giving constant feedback."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="font-medium">AP</span>
                  </div>
                  <div>
                    <p className="font-medium">Amanda Parker</p>
                    <p className="text-sm text-muted-foreground">Marketing VP, Retail Chain</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="section bg-accent">
        <div className="container">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="mb-6">Download Our Free AI Chatbot Guide</h2>
            <p className="text-xl text-muted-foreground mb-8">Learn how to implement AI chatbots that drive real business results with our comprehensive guide.</p>
            <Link to="/lead-magnet">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get Your Free Copy
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
