import { useState, useEffect } from "react";
import AdminLayout from "@/components/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Check, Pencil, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PricingPlan {
  id: string;
  name: string;
  price: number;
  billing_cycle: string;
  features: string[];
  created_at: string;
  updated_at: string;
}

const PricingManagement = () => {
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("pricing_plans")
        .select("*")
        .order("price");

      if (error) {
        throw error;
      }

      setPlans(data || []);
    } catch (error) {
      console.error("Error fetching pricing plans:", error);
      toast({
        title: "Error",
        description: "Failed to load pricing plans. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout title="Pricing Plans Management">
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Pricing Plans Management</h1>
          <Button className="bg-primary text-white hover:bg-primary/90">
            Add New Plan
          </Button>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-pulse text-2xl">Loading pricing plans...</div>
          </div>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Current Pricing Plans</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Billing Cycle</TableHead>
                    <TableHead>Features</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {plans.map((plan) => (
                    <TableRow key={plan.id}>
                      <TableCell className="font-medium">{plan.name}</TableCell>
                      <TableCell>${plan.price}</TableCell>
                      <TableCell>{plan.billing_cycle}</TableCell>
                      <TableCell>
                        <ul className="list-inside space-y-1">
                          {plan.features.slice(0, 2).map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                          {plan.features.length > 2 && (
                            <li className="text-sm text-muted-foreground ml-6">
                              + {plan.features.length - 2} more features
                            </li>
                          )}
                        </ul>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 mr-1">
                          <Pencil className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-destructive">
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}
      </div>
    </AdminLayout>
  );
};

export default PricingManagement;
