
import SolutionLayout from "@/components/SolutionLayout";
import BenefitCard from "@/components/BenefitCard";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wrench, Calendar, Phone, MessageSquare, CheckCircle } from "lucide-react";

const ServiceBusinessSolution = () => {
  return (
    <SolutionLayout 
      title="AI Chatbots for Service Businesses"
      subtitle="Book appointments, provide pricing information, and handle customer support with intelligent AI chatbots."
    >
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">How ChatAI Helps Service Businesses</h2>
            <p className="text-lg text-muted-foreground">
              Our AI chatbot platform is tailored to meet the unique needs of plumbers, cleaners, contractors, and other service professionals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BenefitCard 
              icon={Calendar}
              title="Book Appointments"
              description="Allow customers to schedule services 24/7 without phone calls, reducing booking friction and increasing business."
            />
            
            <BenefitCard 
              icon={Phone}
              title="Provide Pricing Information"
              description="Answer questions about rates, service packages, and estimates to help customers make informed decisions."
            />
            
            <BenefitCard 
              icon={MessageSquare}
              title="Handle Customer Support"
              description="Address common questions, follow up on service delivery, and collect feedback to improve satisfaction."
            />
          </div>
        </div>
      </section>
      
      {/* Case Study */}
      <section className="py-16 bg-accent/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Success Story: Swift Plumbing Services</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Swift Plumbing implemented ChatAI and achieved remarkable results:
              </p>
              
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span><span className="font-semibold">35% increase</span> in appointment bookings</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span><span className="font-semibold">40% reduction</span> in phone call volume for scheduling</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span><span className="font-semibold">68% of bookings</span> happening outside business hours</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span><span className="font-semibold">22% higher</span> customer satisfaction ratings</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link to="/demo-landing">
                  <Button>See How ChatAI Can Help Your Service Business</Button>
                </Link>
              </div>
            </div>
            
            <Card className="p-6 bg-background border-0 shadow-xl">
              <CardContent className="p-0 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-accent rounded-lg p-4 text-sm">
                    <p className="font-semibold mb-1">Customer</p>
                    <p>My kitchen sink is leaking pretty badly. How soon can someone come take a look at it?</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div className="bg-accent/50 rounded-lg p-4 text-sm">
                    <p className="font-semibold mb-1">ChatAI</p>
                    <p>I'm sorry to hear about your leak. We have availability today between 2-4pm or tomorrow morning between 9-11am for emergency plumbing services. Our service call fee is $85, which is waived if you proceed with the repairs. Would either of these time slots work for you?</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-accent rounded-lg p-4 text-sm">
                    <p className="font-semibold mb-1">Customer</p>
                    <p>Today between 2-4pm works for me. Do you have any idea what it might cost to fix a leaky sink?</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div className="bg-accent/50 rounded-lg p-4 text-sm">
                    <p className="font-semibold mb-1">ChatAI</p>
                    <p>Great! I've scheduled a plumber to visit today between 2-4pm. For sink leaks, repairs typically range from $150-300 depending on the cause and parts needed. The plumber will provide an exact quote before doing any work. Can I get your address and contact information to confirm the appointment? Also, if possible, it helps to turn off the water supply to the sink before our plumber arrives.</p>
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
          <h2 className="text-3xl font-bold text-center mb-12">Key Features for Service Businesses</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Scheduling Integration</h3>
                <p className="text-muted-foreground">Connect with your calendar system to allow customers to book appointments based on real availability.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Quote Generation</h3>
                <p className="text-muted-foreground">Provide preliminary pricing estimates based on service descriptions to set customer expectations.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Service Explanations</h3>
                <p className="text-muted-foreground">Explain service procedures, requirements, and preparations to help customers understand what to expect.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Followup Automation</h3>
                <p className="text-muted-foreground">Automatically check in with customers after service to ensure satisfaction and address any concerns.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Emergency Prioritization</h3>
                <p className="text-muted-foreground">Identify urgent service needs and escalate them appropriately in your booking system.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Review Collection</h3>
                <p className="text-muted-foreground">Solicit and collect customer reviews and testimonials after successful service delivery.</p>
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

export default ServiceBusinessSolution;
