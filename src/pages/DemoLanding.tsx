
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
import { useIsMobile } from "@/hooks/use-mobile";
import { Calendar, Phone, Building, User, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";

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

const DemoLanding = () => {
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
        source: 'Demo Landing Page',
        status: 'New',
        date_added: new Date().toISOString().split('T')[0]
      };
      
      // Use any to bypass type checking
      const { error } = await (supabase as any)
        .from('leads')
        .insert([leadData]);
      
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
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary rounded-md p-1">
                <svg 
                  className="h-6 w-6 text-primary-foreground" 
                  fill="none" 
                  height="24" 
                  stroke="currentColor" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24" 
                  width="24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  <path d="M13 8h.01" />
                  <path d="M17 8h.01" />
                  <path d="M9 8h.01" />
                </svg>
              </div>
              <span className="font-bold text-xl">ChatAI</span>
            </Link>
          </div>
          <div>
            <Link to="/">
              <Button variant="ghost">Back to Home</Button>
            </Link>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-1 bg-gradient-to-b from-accent to-background">
        <div className="container py-6 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-12 items-start">
            {/* Mobile view - Show form first */}
            {isMobile && !isSuccess && (
              <div className="mb-6 order-first">
                <div className="bg-white p-6 rounded-xl border shadow-sm">
                  <h2 className="text-xl font-bold mb-4">Book Your Demo</h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                                className="h-12 text-base"
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
                                className="h-12 text-base"
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
                                className="h-12 text-base"
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
                              Company (optional)
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Acme Inc." 
                                className="h-12 text-base"
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
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-sm">
                                I agree to be contacted about ChatAI products.
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all h-14 text-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Schedule Demo Now"}
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>
            )}

            {/* Content section (on mobile, this appears after the form) */}
            <div className={isMobile ? "order-last" : ""}>
              <div className="px-4 py-2 bg-primary/10 rounded-full inline-flex items-center mb-4">
                <Calendar className="h-4 w-4 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">Schedule a demo</span>
              </div>
              <h1 className={`${isMobile ? "text-3xl" : "text-4xl md:text-5xl"} font-bold mb-4`}>
                Transform Customer Support with ChatAI
              </h1>
              
              {/* Hide detailed description on mobile */}
              {!isMobile && (
                <p className="text-xl text-muted-foreground mb-6">
                  See how our AI-powered chatbots can reduce support costs by 60%, increase customer satisfaction, and drive sales 24/7/365.
                </p>
              )}
              
              <div className="space-y-2 mb-6">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className={`${isMobile ? "text-base" : "text-lg"}`}>30-minute personalized demo</p>
                </div>
                {!isMobile && (
                  <>
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <p className="text-lg">Custom ROI calculator for your business</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <p className="text-lg">No obligation, no pushy sales tactics</p>
                    </div>
                  </>
                )}
              </div>
              
              {/* Only show testimonial on desktop */}
              {!isMobile && (
                <div className="p-4 bg-white rounded-lg border shadow-sm mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="font-medium">MJ</span>
                    </div>
                    <div>
                      <p className="font-medium">Michael Johnson</p>
                      <p className="text-sm text-muted-foreground">CTO, E-commerce Solutions</p>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground">
                    "The demo was incredibly helpful in understanding how ChatAI could fit into our existing workflows. Within just two weeks of implementing their solution, our customer service team became 40% more efficient."
                  </p>
                </div>
              )}
              
              {/* Show this button only on mobile when form is filled successfully */}
              {isMobile && isSuccess && (
                <div className="my-4">
                  <Link to="/">
                    <Button className="w-full h-14 text-lg">
                      Back to Homepage
                    </Button>
                  </Link>
                </div>
              )}
            </div>
            
            {/* Desktop form (right side) or success message for both views */}
            <div>
              {isSuccess ? (
                <div className="bg-white p-6 md:p-8 rounded-xl border shadow-sm">
                  <div className="flex justify-center mb-6">
                    <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                      <Calendar className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-center mb-4">Demo Request Confirmed!</h2>
                  <p className="text-center text-muted-foreground mb-4">
                    Thank you for booking a demo with us. A member of our team will contact you within 24 hours.
                  </p>
                  {!isMobile && (
                    <p className="text-center mb-6">
                      We'll be calling you at the phone number you provided to find the perfect time for your demo.
                    </p>
                  )}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      variant="outline" 
                      onClick={() => setIsSuccess(false)}
                      className={isMobile ? "h-12" : ""}
                    >
                      Book another demo
                    </Button>
                    <Link to="/">
                      <Button className={isMobile ? "w-full h-12" : ""}>
                        Back to Homepage
                      </Button>
                    </Link>
                  </div>
                </div>
              ) : !isMobile && (
                <div className="bg-white p-6 md:p-8 rounded-xl border shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">Book Your Personalized Demo</h2>
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
                              <FormLabel>
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
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
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
      </main>
      
      {/* Footer - simplified for mobile */}
      <footer className="bg-background border-t py-4 md:py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-2 md:mb-0">
              <div className="bg-primary rounded-md p-1">
                <svg 
                  className="h-4 w-4 md:h-5 md:w-5 text-primary-foreground" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  <path d="M13 8h.01" />
                  <path d="M17 8h.01" />
                  <path d="M9 8h.01" />
                </svg>
              </div>
              <span className="font-medium">ChatAI</span>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground">
              © {new Date().getFullYear()} ChatAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DemoLanding;
