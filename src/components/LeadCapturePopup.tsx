
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { useLocation } from "react-router-dom";

// Form validation schema
const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type FormValues = z.infer<typeof formSchema>;

interface LeadCapturePopupProps {
  delay?: number; // Delay in milliseconds before showing popup
}

const LeadCapturePopup = ({ delay = 30000 }: LeadCapturePopupProps) => {
  const [open, setOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const location = useLocation();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // Reset state when navigating to a new page
  useEffect(() => {
    setHasInteracted(false);
    setOpen(false);
    
    // Start the timer for the popup
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setOpen(true);
      }
    }, delay);

    // Cleanup timeout on unmount or route change
    return () => clearTimeout(timer);
  }, [location.pathname, delay]);

  // Track if user has clicked demo button
  useEffect(() => {
    const trackInteraction = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a[href="/demo-landing"]') || target.closest('a[href="/book-demo"]')) {
        setHasInteracted(true);
      }
    };

    document.addEventListener("click", trackInteraction);
    return () => document.removeEventListener("click", trackInteraction);
  }, []);

  const onSubmit = async (data: FormValues) => {
    try {
      // In a real app, we would send this to the backend
      console.log("Submitted email:", data.email);
      toast.success("Thank you! We'll be in touch soon.");
      setOpen(false);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Get a Free Consultation</DialogTitle>
          <DialogDescription>
            Learn how our AI chatbot solutions can transform your business
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end gap-2">
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="bg-primary text-white hover:bg-primary/90"
                >
                  Get Started
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LeadCapturePopup;
