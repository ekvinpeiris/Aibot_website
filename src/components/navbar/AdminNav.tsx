
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

interface AdminNavProps {
  setIsMenuOpen: (isOpen: boolean) => void;
}

const AdminNav = ({ setIsMenuOpen }: AdminNavProps) => {
  const location = useLocation();
  const { user, signOut } = useAuth();

  return (
    <>
      <Link 
        to="/admin" 
        className={`font-medium hover:text-primary transition-colors ${location.pathname === '/admin' ? 'text-primary' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      >
        Dashboard
      </Link>
      <Link 
        to="/admin/leads" 
        className={`font-medium hover:text-primary transition-colors ${location.pathname === '/admin/leads' ? 'text-primary' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      >
        Leads
      </Link>
      <Link 
        to="/admin/blog" 
        className={`font-medium hover:text-primary transition-colors ${location.pathname === '/admin/blog' ? 'text-primary' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      >
        Blog
      </Link>
      <Link 
        to="/admin/pricing" 
        className={`font-medium hover:text-primary transition-colors ${location.pathname === '/admin/pricing' ? 'text-primary' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      >
        Pricing
      </Link>
      <Link 
        to="/admin/settings" 
        className={`font-medium hover:text-primary transition-colors ${location.pathname === '/admin/settings' ? 'text-primary' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      >
        Settings
      </Link>
      <div className="pt-2">
        {user ? (
          <Button 
            variant="outline" 
            className="w-full" 
            onClick={() => {
              signOut();
              setIsMenuOpen(false);
            }}
          >
            Sign Out
          </Button>
        ) : (
          <Link to="/admin/login" onClick={() => setIsMenuOpen(false)}>
            <Button className="w-full">Sign In</Button>
          </Link>
        )}
      </div>
    </>
  );
};

export default AdminNav;
