import SolutionLayout from "@/components/SolutionLayout";
import BenefitCard from "@/components/BenefitCard";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, MessageSquare, Bell, CheckCircle } from "lucide-react";

const HealthcareSolution = () => {
  return (
    <SolutionLayout 
      title="AI Chatbots for Healthcare Clinics"
      subtitle="Streamline patient scheduling, answer service questions, and send reminders with intelligent AI chatbots."
      heroImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    >
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">How ChatAI Helps Healthcare Clinics</h2>
            <p className="text-lg text-muted-foreground">
              Our AI chatbot platform is designed to improve patient experience while reducing administrative workload.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BenefitCard 
              icon={Calendar}
              title="Book Appointments Automatically"
              description="Allow patients to schedule, reschedule, or cancel appointments 24/7 without staff intervention."
            />
            
            <BenefitCard 
              icon={MessageSquare}
              title="Answer Service Questions"
              description="Provide instant answers about services, procedures, insurance coverage, and preparation instructions."
            />
            
            <BenefitCard 
              icon={Bell}
              title="Send Reminders & Updates"
              description="Automatically send appointment reminders and follow-ups to reduce no-shows and improve care."
            />
          </div>
        </div>
      </section>
      
      {/* Case Study */}
      <section className="py-16 bg-accent/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Success Story: Wellness Care Clinic</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Wellness Care Clinic implemented ChatAI and achieved these results:
              </p>
              
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span><span className="font-semibold">30% reduction</span> in phone call volume for scheduling</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span><span className="font-semibold">22% reduction</span> in appointment no-shows with automated reminders</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span><span className="font-semibold">40% increase</span> in after-hours appointment bookings</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span><span className="font-semibold">15 hours/week saved</span> by front desk staff on routine inquiries</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link to="/demo-landing">
                  <Button>See How ChatAI Can Help Your Clinic</Button>
                </Link>
              </div>
            </div>
            
            <Card className="p-6 bg-background border-0 shadow-xl">
              <CardContent className="p-0 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-accent rounded-lg p-4 text-sm">
                    <p className="font-semibold mb-1">Patient</p>
                    <p>I need to schedule an appointment with Dr. Garcia for a routine check-up. Do you have any availability next week?</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div className="bg-accent/50 rounded-lg p-4 text-sm">
                    <p className="font-semibold mb-1">ChatAI</p>
                    <p>I'd be happy to help you schedule an appointment with Dr. Garcia. She has the following openings next week: Monday at 10am, Wednesday at 2pm, and Friday at 9am. Which day works best for you?</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-accent rounded-lg p-4 text-sm">
                    <p className="font-semibold mb-1">Patient</p>
                    <p>Wednesday at 2pm works for me. Also, do I need to do anything to prepare for the check-up?</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div className="bg-accent/50 rounded-lg p-4 text-sm">
                    <p className="font-semibold mb-1">ChatAI</p>
                    <p>Great! I've scheduled your appointment with Dr. Garcia for Wednesday at 2pm. For your routine check-up, please bring your insurance card and a list of current medications. You don't need to fast for this appointment. I'll send a reminder 24 hours before your appointment. Is there anything else you need help with?</p>
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
          <h2 className="text-3xl font-bold text-center mb-12">Key Features for Healthcare Clinics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">HIPAA Compliant</h3>
                <p className="text-muted-foreground">Our healthcare chatbots are built with security and compliance at the forefront, meeting all HIPAA requirements.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">EHR Integration</h3>
                <p className="text-muted-foreground">Seamlessly connect with your Electronic Health Record system for appointment management and patient information.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Multi-language Support</h3>
                <p className="text-muted-foreground">Break down language barriers and serve diverse patient populations with AI translation capabilities.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Insurance Verification</h3>
                <p className="text-muted-foreground">Help patients understand their coverage and verify insurance information before appointments.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Form Completion</h3>
                <p className="text-muted-foreground">Guide patients through completing necessary forms and paperwork before their visit to save time.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Symptom Triage</h3>
                <p className="text-muted-foreground">Basic symptom assessment to help direct patients to appropriate care levels while flagging emergencies.</p>
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

export default HealthcareSolution;
