
import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

interface PricingPlan {
  id: string;
  name: string;
  price: number;
  billing_cycle: string;
  features: string[];
}

const Pricing = () => {
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const { data, error } = await supabase
          .from("pricing_plans")
          .select("*")
          .order("price");

        if (error) {
          console.error("Error fetching pricing plans:", error);
          return;
        }

        setPlans(data || []);
      } catch (error) {
        console.error("Error fetching pricing plans:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlans();
  }, []);

  const getPlanColorClasses = (planName: string) => {
    switch (planName) {
      case "Bronze":
        return {
          card: "border-amber-700/20",
          badge: "bg-amber-700/10 text-amber-700",
          button: "bg-amber-700 hover:bg-amber-800 text-white",
          checkIcon: "text-amber-700"
        };
      case "Gold":
        return {
          card: "border-yellow-500/30",
          badge: "bg-yellow-500/10 text-yellow-600",
          button: "bg-yellow-500 hover:bg-yellow-600 text-white",
          checkIcon: "text-yellow-500"
        };
      case "Diamond":
        return {
          card: "border-blue-500/30",
          badge: "bg-blue-500/10 text-blue-600",
          button: "bg-blue-500 hover:bg-blue-600 text-white",
          checkIcon: "text-blue-500"
        };
      default:
        return {
          card: "",
          badge: "bg-primary/10 text-primary",
          button: "bg-primary hover:bg-primary/90 text-primary-foreground",
          checkIcon: "text-primary"
        };
    }
  };

  return (
    <Layout>
      <div className="py-20 md:py-32 bg-gradient-to-b from-accent to-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground">
              Choose the perfect plan for your business needs.
              All plans include a 14-day free trial.
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-20">
              <div className="animate-pulse text-2xl">Loading pricing plans...</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan) => {
                const colorClasses = getPlanColorClasses(plan.name);
                
                return (
                  <Card 
                    key={plan.id} 
                    className={`flex flex-col border-2 ${colorClasses.card} ${plan.name === "Gold" ? "md:-mt-4 md:mb-4 shadow-lg" : ""}`}
                  >
                    <CardHeader className={`${plan.name === "Gold" ? "pb-0" : ""}`}>
                      {plan.name === "Gold" && (
                        <div className="mb-2 -mt-2 py-1 px-3 text-sm font-medium rounded-full w-fit mx-auto bg-yellow-500/20 text-yellow-600">
                          Most Popular
                        </div>
                      )}
                      <div className="text-center">
                        <h3 className="text-2xl font-bold">{plan.name}</h3>
                        <div className="mt-4 flex items-baseline justify-center">
                          <span className="text-4xl font-extrabold">${plan.price}</span>
                          <span className="ml-1 text-muted-foreground">/{plan.billing_cycle}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="mt-6 space-y-3">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className={`shrink-0 h-5 w-5 ${colorClasses.checkIcon} mt-0.5`} />
                            <span className="ml-3 text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="pt-4">
                      <Link to="/demo" className="w-full">
                        <Button className={`w-full ${colorClasses.button}`} size="lg">
                          Start Free Trial
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <section className="py-20 bg-accent">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center justify-between max-w-5xl mx-auto">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">Enterprise Solutions</h2>
              <p className="text-lg text-muted-foreground mb-0">
                Need a custom solution for your organization?<br />
                Contact our sales team to design a tailored package.
              </p>
            </div>
            <div>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-8 text-left">
              <div>
                <h4 className="text-xl font-medium mb-2">Can I upgrade or downgrade my plan?</h4>
                <p className="text-muted-foreground">Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades will apply at the end of your current billing cycle.</p>
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Do you offer discounts for annual billing?</h4>
                <p className="text-muted-foreground">Yes, you can save up to 20% by choosing annual billing instead of monthly.</p>
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">How does the free trial work?</h4>
                <p className="text-muted-foreground">All plans include a 14-day free trial with full features. No credit card required to start.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
