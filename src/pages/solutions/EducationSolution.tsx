import SolutionLayout from "@/components/SolutionLayout";
import BenefitCard from "@/components/BenefitCard";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Book, GraduationCap, MessageSquare, CheckCircle } from "lucide-react";

const EducationSolution = () => {
  return (
    <SolutionLayout 
      title="AI Chatbots for Online Education Platforms"
      subtitle="Answer course questions, guide enrollment, and recommend learning paths with intelligent AI chatbots."
      heroImage="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    >
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">How ChatAI Helps Educational Platforms</h2>
            <p className="text-lg text-muted-foreground">
              Our AI chatbot platform is designed to enhance online learning experiences and streamline student support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BenefitCard 
              icon={Book}
              title="Answer Course Questions"
              description="Provide instant answers to questions about course content, assignments, deadlines, and requirements."
            />
            
            <BenefitCard 
              icon={MessageSquare}
              title="Guide Users Through Enrollment"
              description="Walk prospective students through the registration process and answer questions about requirements and prerequisites."
            />
            
            <BenefitCard 
              icon={GraduationCap}
              title="Recommend Learning Paths"
              description="Suggest personalized course recommendations based on student interests, goals, and past learning."
            />
          </div>
        </div>
      </section>
      
      {/* Case Study */}
      <section className="py-16 bg-accent/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Success Story: LearnQuest Academy</h2>
              <p className="text-lg text-muted-foreground mb-6">
                LearnQuest Academy implemented ChatAI and experienced these outcomes:
              </p>
              
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span><span className="font-semibold">42% reduction</span> in support tickets from students</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span><span className="font-semibold">31% increase</span> in course enrollment completion rate</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span><span className="font-semibold">25% higher</span> student satisfaction ratings</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span><span className="font-semibold">18% increase</span> in cross-enrollment to additional courses</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link to="/demo-landing">
                  <Button>See How ChatAI Can Help Your Education Platform</Button>
                </Link>
              </div>
            </div>
            
            <Card className="p-6 bg-background border-0 shadow-xl">
              <CardContent className="p-0 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-accent rounded-lg p-4 text-sm">
                    <p className="font-semibold mb-1">Student</p>
                    <p>I'm interested in learning data science but I don't have any coding experience. Do you have courses for beginners?</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div className="bg-accent/50 rounded-lg p-4 text-sm">
                    <p className="font-semibold mb-1">ChatAI</p>
                    <p>Absolutely! We have several courses designed specifically for beginners with no coding background. I'd recommend starting with "Data Science Foundations" which includes Python basics, or our "Introduction to Data Analysis" course. Both are designed for complete beginners and have excellent reviews. Would you like me to share more details about either of these courses?</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-accent rounded-lg p-4 text-sm">
                    <p className="font-semibold mb-1">Student</p>
                    <p>The Data Science Foundations sounds good. How long does it take to complete, and what will I be able to do afterward?</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div className="bg-accent/50 rounded-lg p-4 text-sm">
                    <p className="font-semibold mb-1">ChatAI</p>
                    <p>The Data Science Foundations course takes approximately 8 weeks to complete if you dedicate 5-7 hours per week. After completion, you'll be able to write basic Python code, understand data structures, create visualizations, and perform simple data analysis tasks. This course sets you up perfectly for our intermediate data science courses. We also offer a certificate upon completion that you can share on LinkedIn. Would you like me to help you enroll in this course?</p>
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
          <h2 className="text-3xl font-bold text-center mb-12">Key Features for Education Platforms</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Course Recommendations</h3>
                <p className="text-muted-foreground">Suggest relevant courses based on student interests, past learning, and career goals.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Assignment Support</h3>
                <p className="text-muted-foreground">Answer questions about assignments, provide clarification, and guide students through requirements.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Learning Path Creation</h3>
                <p className="text-muted-foreground">Help students create personalized learning paths based on their career goals and interests.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Technical Support</h3>
                <p className="text-muted-foreground">Resolve common technical issues with the learning platform, assignments, and materials.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Deadline Reminders</h3>
                <p className="text-muted-foreground">Send proactive reminders about upcoming assignments, exams, and course milestones.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
                <p className="text-muted-foreground">Help students monitor their progress through courses and suggest next steps for improvement.</p>
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

export default EducationSolution;
