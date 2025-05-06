
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import { useIsMobile } from "@/hooks/use-mobile";
import { Calendar, Phone, Building, User, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50, { message: "Name must not exceed 50 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(5, { message: "Please enter a valid phone number." }),
  company: z.string().optional(),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions."
  }),
});

type FormValues = z.infer<typeof formSchema>;

// Define our own lead interface
interface LeadData {
  name: string;
  email: string; 
  phone: string;
  company: string;
  source: string;
  status: string;
  date_added: string;
}

const BookDemo = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const isMobile = useIsMobile();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      acceptTerms: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Create lead data
      const leadData: LeadData = {
        name: data.fullName,
        email: data.email,
        phone: data.phone,
        company: data.company || '',
        source: 'Lead Magnet',
        status: 'New',
        date_added: new Date().toISOString().split('T')[0]
      };
      
      // Save lead data to Supabase using type assertion
      const { error } = await supabase
        .from('leads')
        .insert([leadData]) as unknown as { error: any };
      
      if (error) throw error;
      
      console.log("Demo request submitted:", data);
      setIsSuccess(true);
      toast.success("Success! Your demo has been scheduled.");
    } catch (error: any) {
      toast.error("Something went wrong. Please try again.");
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="bg-gradient-to-b from-accent to-background py-12 md:py-24 min-h-[calc(100vh-64px)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {(!isMobile || !isSuccess) && (
              <div className={`${isMobile ? "text-center" : ""}`}>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  Book Your Personal ChatAI Demo
                </h1>
                {!isMobile && (
                  <p className="text-xl text-muted-foreground mb-6">
                    See how our AI chatbot can transform your customer support, increase sales, and save your team time.
                  </p>
                )}
                {!isMobile && (
                  <div className="bg-white p-4 rounded-lg border mb-6 animate-fade-in">
                    <h3 className="text-lg font-semibold mb-3">What You'll See in Your Demo:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>Custom AI training with your business data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>Seamless integration with your existing systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>Detailed analytics and performance tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>ROI calculations based on your business metrics</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}
            
            <div>
              {isSuccess ? (
                <div className="bg-white p-8 rounded-xl border shadow-sm animate-fade-in">
                  <div className="flex justify-center mb-6">
                    <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                      <Calendar className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-center mb-4">Demo Request Confirmed!</h2>
                  <p className="text-center text-muted-foreground mb-4">
                    Thank you for booking a demo with us. A member of our team will contact you within 24 hours to schedule your personalized demo.
                  </p>
                  <p className="text-center mb-6">
                    We'll be calling you at the phone number you provided to find the perfect time for your demo.
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => setIsSuccess(false)}
                  >
                    Book another demo
                  </Button>
                </div>
              ) : (
                <div className="bg-white p-6 md:p-8 rounded-xl border shadow-sm">
                  <h2 className="text-2xl font-bold mb-4">Book Your Demo</h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              <User size={16} className="text-primary" />
                              Full Name
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="John Doe" 
                                className={`${isMobile ? "h-12 text-base" : ""}`}
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              <Mail size={16} className="text-primary" />
                              Email
                            </FormLabel>
                            <FormControl>
                              <Input 
                                type="email" 
                                placeholder="john.doe@company.com" 
                                className={`${isMobile ? "h-12 text-base" : ""}`}
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              <Phone size={16} className="text-primary" />
                              Phone Number
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="+1 (555) 000-0000" 
                                className={`${isMobile ? "h-12 text-base" : ""}`}
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              <Building size={16} className="text-primary" />
                              Company Name (optional)
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Acme Inc." 
                                className={`${isMobile ? "h-12 text-base" : ""}`}
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="acceptTerms"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className={`${isMobile ? 'text-sm' : ''}`}>
                                I agree to be contacted about ChatAI products and services. 
                                I can opt-out at any time.
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className={`w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-[1.01] ${isMobile ? "h-14 text-lg" : ""}`}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Schedule Demo Now"}
                      </Button>
                      
                      <p className="text-center text-xs text-muted-foreground">
                        We respect your privacy. Your information is secure with us.
                      </p>
                    </form>
                  </Form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookDemo;
