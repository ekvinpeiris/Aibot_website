
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import ThemeToggle from "@/components/ThemeToggle";

interface DesktopCTAProps {
  isAdmin: boolean;
}

const DesktopCTA = ({ isAdmin }: DesktopCTAProps) => {
  const { user, signOut } = useAuth();

  return (
    <div className="flex items-center gap-2">
      <ThemeToggle />
      
      {isAdmin ? (
        user ? (
          <Button 
            variant="outline" 
            className="font-medium" 
            onClick={() => signOut()}
          >
            Sign Out
          </Button>
        ) : (
          <Link to="/admin/login">
            <Button className="font-medium">
              Sign In
            </Button>
          </Link>
        )
      ) : (
        <Link to="/demo-landing">
          <Button className="font-medium bg-primary text-white hover:bg-primary/90">
            Book a Demo
          </Button>
        </Link>
      )}
    </div>
  );
};

export default DesktopCTA;
