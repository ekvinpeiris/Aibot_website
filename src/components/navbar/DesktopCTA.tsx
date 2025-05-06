
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

interface DesktopCTAProps {
  isAdmin: boolean;
}

const DesktopCTA = ({ isAdmin }: DesktopCTAProps) => {
  const { user, signOut } = useAuth();

  if (isAdmin) {
    return user ? (
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
    );
  }

  return (
    <Link to="/demo-landing">
      <Button className="font-medium bg-primary text-white hover:bg-primary/90">
        Book a Demo
      </Button>
    </Link>
  );
};

export default DesktopCTA;
