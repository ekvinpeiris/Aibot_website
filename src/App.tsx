
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { HelmetProvider } from "react-helmet-async";
import ProtectedRoute from "./components/ProtectedRoute";

// Import pages
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BookDemo from "./pages/BookDemo";
import Pricing from "./pages/Pricing";
import LeadMagnet from "./pages/LeadMagnet";
import DemoLanding from "./pages/DemoLanding";
import AdminDashboard from "./pages/admin/AdminDashboard";
import LeadManagement from "./pages/admin/LeadManagement";
import BlogManagement from "./pages/admin/BlogManagement";
import PricingManagement from "./pages/admin/PricingManagement";
import Settings from "./pages/admin/Settings";
import Login from "./pages/admin/Login";
import NotFound from "./pages/NotFound";

// Solutions pages
import EcommerceSolution from "./pages/solutions/EcommerceSolution";
import HealthcareSolution from "./pages/solutions/HealthcareSolution"; 
import TravelSolution from "./pages/solutions/TravelSolution";
import EducationSolution from "./pages/solutions/EducationSolution";
import ServiceBusinessSolution from "./pages/solutions/ServiceBusinessSolution";

// New pages
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Index />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/lead-magnet" element={<LeadMagnet />} />
                <Route path="/book-demo" element={<BookDemo />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/demo-landing" element={<DemoLanding />} />
                
                {/* New Pages */}
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                
                {/* Solutions Routes */}
                <Route path="/solutions/ecommerce" element={<EcommerceSolution />} />
                <Route path="/solutions/healthcare" element={<HealthcareSolution />} />
                <Route path="/solutions/travel" element={<TravelSolution />} />
                <Route path="/solutions/education" element={<EducationSolution />} />
                <Route path="/solutions/service" element={<ServiceBusinessSolution />} />
                
                {/* Admin Auth Route */}
                <Route path="/admin/login" element={<Login />} />
                
                {/* Protected Admin Routes */}
                <Route 
                  path="/admin" 
                  element={
                    <ProtectedRoute requireAdmin={true}>
                      <AdminDashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/admin/leads" 
                  element={
                    <ProtectedRoute requireAdmin={true}>
                      <LeadManagement />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/admin/blog" 
                  element={
                    <ProtectedRoute requireAdmin={true}>
                      <BlogManagement />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/admin/pricing" 
                  element={
                    <ProtectedRoute requireAdmin={true}>
                      <PricingManagement />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/admin/settings" 
                  element={
                    <ProtectedRoute requireAdmin={true}>
                      <Settings />
                    </ProtectedRoute>
                  } 
                />
                
                {/* Catch all not found route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
