import SolutionLayout from "@/components/SolutionLayout";
import BenefitCard from "@/components/BenefitCard";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingCart, Package, Truck, MessageSquare, CheckCircle } from "lucide-react";

const EcommerceSolution = () => {
  return (
    <SolutionLayout 
      title="AI Chatbots for E-Commerce Stores"
      subtitle="Boost sales, reduce cart abandonment, and provide 24/7 customer support with intelligent AI chatbots."
      heroImage="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
    >
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">How ChatAI Helps E-Commerce Stores</h2>
            <p className="text-lg text-muted-foreground">
              Our AI chatbot platform is specifically designed to address the unique challenges of online retail.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BenefitCard 
              icon={MessageSquare}
              title="Answer Product Questions"
              description="Provide instant answers to product questions 24/7, including specifications, compatibility, and availability."
            />
            
            <BenefitCard 
              icon={ShoppingCart}
              title="Guide Customer Shopping"
              description="Help customers find the right products based on their needs and preferences with personalized recommendations."
            />
            
            <BenefitCard 
              icon={Truck}
              title="Handle Shipping & Returns"
              description="Automatically answer FAQs about shipping times, tracking, and return policies without human intervention."
            />
            
            <BenefitCard 
              icon={Package}
              title="Recover Abandoned Carts"
              description="Re-engage customers who abandon their carts with smart, personalized messaging that drives conversions."
            />
          </div>
        </div>
      </section>
      
      {/* Case Study */}
      <section className="py-16 bg-accent/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Success Story: FashionFinder</h2>
              <p className="text-lg text-muted-foreground mb-6">
                FashionFinder implemented ChatAI and saw incredible results within just 3 months:
              </p>
              
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span><span className="font-semibold">37% reduction</span> in customer service tickets</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span><span className="font-semibold">24% increase</span> in average order value through smart recommendations</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span><span className="font-semibold">18% recovery rate</span> on abandoned carts with AI re-engagement</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span><span className="font-semibold">42% increase</span> in customer satisfaction scores</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link to="/demo-landing">
                  <Button>See How ChatAI Can Help Your Store</Button>
                </Link>
              </div>
            </div>
            
            <Card className="p-6 bg-background border-0 shadow-xl">
              <CardContent className="p-0 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-accent rounded-lg p-4 text-sm">
                    <p className="font-semibold mb-1">Customer</p>
                    <p>Do you have this dress in size medium? And does it come in blue?</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div className="bg-accent/50 rounded-lg p-4 text-sm">
                    <p className="font-semibold mb-1">ChatAI</p>
                    <p>Yes! The Floral Summer Dress is currently available in size Medium. It comes in Blue, Red, and Black. Would you like me to add the blue one to your cart?</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-accent rounded-lg p-4 text-sm">
                    <p className="font-semibold mb-1">Customer</p>
                    <p>Yes, please add it to my cart. And what's your return policy?</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div className="bg-accent/50 rounded-lg p-4 text-sm">
                    <p className="font-semibold mb-1">ChatAI</p>
                    <p>I've added the Blue Floral Summer Dress in size Medium to your cart! Our return policy allows for free returns within 30 days of purchase. Would you like to view your cart now or continue shopping?</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Features Grid */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features for E-Commerce</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Product Discovery</h3>
                <p className="text-muted-foreground">Help customers find exactly what they're looking for with AI-powered product recommendations based on their queries and preferences.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Inventory Integration</h3>
                <p className="text-muted-foreground">Connect your inventory system to provide real-time availability updates to customers and prevent frustration from out-of-stock items.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Upsell & Cross-sell</h3>
                <p className="text-muted-foreground">Intelligently suggest complementary products or premium alternatives to increase average order value and boost revenue.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Order Tracking</h3>
                <p className="text-muted-foreground">Allow customers to check order status and get shipping updates directly through the chatbot, reducing support ticket volume.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Cart Recovery</h3>
                <p className="text-muted-foreground">Automatically follow up with customers who abandon their carts with personalized messages to encourage completion.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Multi-channel Support</h3>
                <p className="text-muted-foreground">Deploy your chatbot across your website, mobile app, and social media platforms for consistent customer support everywhere.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/demo-landing">
              <Button size="lg">Schedule a Demo</Button>
            </Link>
          </div>
        </div>
      </section>
    </SolutionLayout>
  );
};

export default EcommerceSolution;
