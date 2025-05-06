
import { Link, useLocation } from "react-router-dom";
import SolutionsMenu from "./SolutionsMenu";
import { Button } from "@/components/ui/button";

interface PublicNavProps {
  isMobile: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const PublicNav = ({ isMobile, setIsMenuOpen }: PublicNavProps) => {
  const location = useLocation();

  return (
    <>
      <Link 
        to="/" 
        className={`font-medium hover:text-primary transition-colors ${location.pathname === '/' ? 'text-primary' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      >
        Home
      </Link>
      <SolutionsMenu isMobile={isMobile} setIsMenuOpen={setIsMenuOpen} />
      <Link 
        to="/pricing" 
        className={`font-medium hover:text-primary transition-colors ${location.pathname === '/pricing' ? 'text-primary' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      >
        Pricing
      </Link>
      <Link 
        to="/blog" 
        className={`font-medium hover:text-primary transition-colors ${location.pathname === '/blog' ? 'text-primary' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      >
        Blog
      </Link>
      {isMobile && (
        <div className="flex flex-col space-y-2 pt-2">
          <Link to="/demo-landing" onClick={() => setIsMenuOpen(false)}>
            <Button className="w-full font-medium bg-primary text-white hover:bg-primary/90">
              Book a Demo
            </Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default PublicNav;
