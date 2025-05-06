
import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

const ProtectedRoute = ({ children, requireAdmin = false }: ProtectedRouteProps) => {
  const { user, loading, isAdmin } = useAuth();
  
  if (loading) {
    // Show a loading spinner or skeleton while checking authentication
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  // If not authenticated, redirect to login
  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }
  
  // If admin access is required but user is not admin
  if (requireAdmin && !isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }
  
  // If authenticated and passes admin check, render children
  return <>{children}</>;
};

export default ProtectedRoute;
