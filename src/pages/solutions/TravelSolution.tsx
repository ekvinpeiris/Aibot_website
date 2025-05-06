
import SolutionLayout from "@/components/SolutionLayout";
import BenefitCard from "@/components/BenefitCard";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Hotel, Plane, MapPin, Calendar, CheckCircle } from "lucide-react";

const TravelSolution = () => {
  return (
    <SolutionLayout 
      title="AI Chatbots for Hotels & Travel Agencies"
      subtitle="Handle booking queries, provide local recommendations, and manage schedule changes with intelligent AI chatbots."
    >
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">How ChatAI Helps Travel Businesses</h2>
            <p className="text-lg text-muted-foreground">
              Our AI chatbot platform is specially designed to address the unique challenges of hotels and travel agencies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BenefitCard 
              icon={Hotel}
              title="Handle Booking Queries"
              description="Provide instant information about room availability, rates, amenities, and policies to potential guests."
            />
            
            <BenefitCard 
              icon={MapPin}
              title="Provide Local Recommendations"
              description="Offer personalized suggestions for dining, attractions, and activities based on guest preferences."
            />
            
            <BenefitCard 
              icon={Calendar}
              title="Manage Schedule Changes"
              description="Help guests reschedule or cancel bookings with ease, improving customer satisfaction during changes."
            />
          </div>
        </div>
      </section>
      
      {/* Case Study */}
      <section className="py-16 bg-accent/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Success Story: Horizon Travel Agency</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Horizon Travel implemented ChatAI and saw impressive results:
              </p>
              
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span><span className="font-semibold">45% reduction</span> in response time to customer inquiries</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span><span className="font-semibold">28% increase</span> in booking conversions from website visitors</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span><span className="font-semibold">35% reduction</span> in customer service staffing needs</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span><span className="font-semibold">24/7 support</span> coverage without increasing staff costs</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link to="/demo-landing">
                  <Button>See How ChatAI Can Help Your Travel Business</Button>
                </Link>
              </div>
            </div>
            
            <Card className="p-6 bg-background border-0 shadow-xl">
              <CardContent className="p-0 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <Plane className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-accent rounded-lg p-4 text-sm">
                    <p className="font-semibold mb-1">Traveler</p>
                    <p>I'm looking for a hotel in Barcelona for 5 nights in July. We need a room for 2 adults and 1 child. Do you have anything with a sea view?</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div className="bg-accent/50 rounded-lg p-4 text-sm">
                    <p className="font-semibold mb-1">ChatAI</p>
                    <p>I've found several options for your Barcelona stay in July! The Marina Bay Hotel has family rooms with sea views starting at €220/night. The Beachfront Resort offers similar rooms from €195/night. Both include breakfast and have availability for your dates. Would you like more details about either option?</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <Plane className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-accent rounded-lg p-4 text-sm">
                    <p className="font-semibold mb-1">Traveler</p>
                    <p>The Beachfront Resort sounds good. Is it close to public transportation? And do they have a pool?</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div className="bg-accent/50 rounded-lg p-4 text-sm">
                    <p className="font-semibold mb-1">ChatAI</p>
                    <p>Yes! The Beachfront Resort is just a 5-minute walk from the Barceloneta metro station, making it very convenient for exploring the city. They have both indoor and outdoor pools, plus a children's splash area your child might enjoy. Would you like me to check availability and provide booking options for your specific dates in July?</p>
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
          <h2 className="text-3xl font-bold text-center mb-12">Key Features for Travel Businesses</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Booking Engine Integration</h3>
                <p className="text-muted-foreground">Connect directly with your booking system to check real-time availability and complete reservations.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Upsell Opportunities</h3>
                <p className="text-muted-foreground">Intelligently suggest room upgrades, package deals, or additional services to increase revenue.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Multi-language Support</h3>
                <p className="text-muted-foreground">Communicate with international travelers in their preferred language to improve booking experience.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Itinerary Management</h3>
                <p className="text-muted-foreground">Help guests access and manage their complete travel itineraries through conversational AI.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Local Recommendations</h3>
                <p className="text-muted-foreground">Provide personalized suggestions for dining, attractions, and activities based on guest preferences.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Post-stay Engagement</h3>
                <p className="text-muted-foreground">Follow up with guests after their stay to collect feedback and encourage future bookings.</p>
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

export default TravelSolution;
