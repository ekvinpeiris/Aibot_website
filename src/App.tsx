
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BookDemo from "./pages/BookDemo";
import Pricing from "./pages/Pricing";
import AdminDashboard from "./pages/admin/AdminDashboard";
import LeadManagement from "./pages/admin/LeadManagement";
import BlogManagement from "./pages/admin/BlogManagement";
import PricingManagement from "./pages/admin/PricingManagement";
import Settings from "./pages/admin/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/lead-magnet" element={<BookDemo />} />
          <Route path="/pricing" element={<Pricing />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/leads" element={<LeadManagement />} />
          <Route path="/admin/blog" element={<BlogManagement />} />
          <Route path="/admin/pricing" element={<PricingManagement />} />
          <Route path="/admin/settings" element={<Settings />} />
          
          {/* Catch all not found route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
