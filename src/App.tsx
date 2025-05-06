
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BookDemo from "./pages/BookDemo";
import Pricing from "./pages/Pricing";
import AdminDashboard from "./pages/admin/AdminDashboard";
import LeadManagement from "./pages/admin/LeadManagement";
import BlogManagement from "./pages/admin/BlogManagement";
import PricingManagement from "./pages/admin/PricingManagement";
import Settings from "./pages/admin/Settings";
import Login from "./pages/admin/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
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
  </QueryClientProvider>
);

export default App;
