
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { ArrowRight, Check, Download, Mail } from "lucide-react";

import Layout from "@/components/Layout";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(6, { message: "Please enter a valid phone number" }),
  company: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const LeadMagnet = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const leadData = {
        ...data,
        source: "Free Guide Lead Magnet",
        date_added: new Date().toISOString().split('T')[0]
      };
      
      const { error } = await (supabase as any)
        .from('leads')
        .insert([leadData]);
      
      if (error) throw error;
      
      setIsSuccess(true);
      toast.success("Success! Your guide is on its way to your inbox.");
      form.reset();
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast.error(error.message || "Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="relative bg-gradient-to-b from-accent to-background overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -right-24 w-96 h-96 bg-secondary/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative z-10 py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block bg-secondary/20 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-2">
                Free Guide
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Boost Your Business Growth With Our <span className="text-primary">Ultimate Strategy Guide</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Unlock the secrets to increasing your revenue by 300% in just 6 months with our proven framework and step-by-step action plan.
              </p>
              
              <div className="space-y-3 pt-4">
                {["Actionable strategies you can implement today", 
                  "Expert insights from industry leaders", 
                  "Proven frameworks with real-world case studies"].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 -z-10 bg-secondary/10 translate-x-4 translate-y-4 rounded-xl"></div>
              <Card className="border shadow-lg rounded-xl overflow-hidden">
                {isSuccess ? (
                  <div className="px-6 py-12 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">Thank you!</h3>
                    <p className="text-muted-foreground mb-6">
                      Check your inbox for your free guide. We've also sent a confirmation to your email.
                    </p>
                    <Button className="mt-4" onClick={() => setIsSuccess(false)}>
                      <Download className="mr-2 h-4 w-4" />
                      Download Again
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="bg-primary px-6 py-4 text-primary-foreground">
                      <h3 className="text-lg font-semibold flex items-center">
                        <Mail className="mr-2 h-5 w-5" />
                        Get Your Free Growth Guide
                      </h3>
                    </div>
                    <CardContent className="p-6">
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your name" {...field} />
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
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input placeholder="your.email@example.com" type="email" {...field} />
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
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your phone number" type="tel" {...field} />
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
                                <FormLabel>Company (Optional)</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your company name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <Button 
                            type="submit" 
                            className="w-full mt-2" 
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Submitting..." : "Get Your Free Guide"}
                            {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                          </Button>
                          <p className="text-xs text-center text-muted-foreground pt-2">
                            By submitting, you agree to our Terms and Privacy Policy.
                          </p>
                        </form>
                      </Form>
                    </CardContent>
                  </>
                )}
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LeadMagnet;
