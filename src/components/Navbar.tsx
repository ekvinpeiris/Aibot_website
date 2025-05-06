
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Logo from "./navbar/Logo";
import MobileMenuButton from "./navbar/MobileMenuButton";
import DesktopCTA from "./navbar/DesktopCTA";
import PublicNav from "./navbar/PublicNav";
import AdminNav from "./navbar/AdminNav";
import MobileMenu from "./navbar/MobileMenu";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {isAdmin ? (
            // Admin Navigation Links
            <AdminNav setIsMenuOpen={setIsMenuOpen} />
          ) : (
            // Public Navigation Links
            <PublicNav isMobile={false} setIsMenuOpen={setIsMenuOpen} />
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <DesktopCTA isAdmin={isAdmin} />
        </div>

        {/* Mobile Menu Button */}
        <MobileMenuButton 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen} 
        />
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        isMenuOpen={isMenuOpen} 
        isAdmin={isAdmin} 
        setIsMenuOpen={setIsMenuOpen} 
      />
    </header>
  );
};

export default Navbar;
