
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

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50, { message: "Name must not exceed 50 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  company: z.string().optional(),
  acceptTerms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions." }),
  }),
});

type FormValues = z.infer<typeof formSchema>;

const LeadMagnet = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log("Form submitted:", data);
      setIsSuccess(true);
      toast.success("Success! Your guide is on its way to your inbox.");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="bg-gradient-to-b from-accent to-background py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                The Ultimate Guide to AI Chatbots for Business
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Learn how to implement AI-powered chatbots that drive real business results with our comprehensive guide.
              </p>
              <div className="bg-white p-4 rounded-lg border mb-8">
                <h3 className="text-lg font-semibold mb-3">What You'll Learn:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>How to choose the right chatbot solution for your business</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Best practices for chatbot design and implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>AI training strategies to improve chatbot accuracy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>ROI measurement frameworks and KPIs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Case studies and success stories from industry leaders</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              {isSuccess ? (
                <div className="bg-white p-8 rounded-xl border shadow-sm">
                  <div className="flex justify-center mb-6">
                    <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="h-8 w-8 text-primary" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-center mb-4">Thank You!</h2>
                  <p className="text-center text-muted-foreground mb-6">
                    Your guide is on the way to your inbox. Please check your email to download your free copy.
                  </p>
                  <p className="text-center text-sm text-muted-foreground">
                    Didn't receive it? Check your spam folder or <button className="text-primary underline">click here</button> to resend.
                  </p>
                </div>
              ) : (
                <div className="bg-white p-8 rounded-xl border shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">Get Your Free Guide</h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
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
                              <Input type="email" placeholder="john.doe@example.com" {...field} />
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
                            <FormLabel>Phone Number (optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="+1 (555) 000-0000" {...field} />
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
                            <FormLabel>Company Name (optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Acme Inc." {...field} />
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
                                I agree to receive emails about ChatAI products, services, and events. 
                                I can unsubscribe at any time.
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Download Now"}
                      </Button>
                      
                      <p className="text-center text-xs text-muted-foreground">
                        We respect your privacy. Your information will never be shared with third parties.
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

export default LeadMagnet;
