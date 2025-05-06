
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary rounded-md p-1">
              <svg 
                className="h-6 w-6 text-primary-foreground" 
                fill="none" 
                height="24" 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                width="24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <path d="M13 8h.01" />
                <path d="M17 8h.01" />
                <path d="M9 8h.01" />
              </svg>
            </div>
            <span className="font-bold text-xl">ChatAI</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/features" className="font-medium hover:text-primary transition-colors">
            Features
          </Link>
          <Link to="/pricing" className="font-medium hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link to="/blog" className="font-medium hover:text-primary transition-colors">
            Blog
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/lead-magnet">
            <Button variant="outline" className="font-medium">
              Free Guide
            </Button>
          </Link>
          <Link to="/demo">
            <Button className="font-medium bg-primary text-white hover:bg-primary/90">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t py-4 px-6 bg-background">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className="font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className="font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/blog" 
              className="font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Link to="/lead-magnet" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full font-medium">
                  Free Guide
                </Button>
              </Link>
              <Link to="/demo" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full font-medium bg-primary text-white hover:bg-primary/90">
                  Get Started
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
