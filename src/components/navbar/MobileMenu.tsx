
import { ReactNode } from "react";
import AdminNav from "./AdminNav";
import PublicNav from "./PublicNav";

interface MobileMenuProps {
  isMenuOpen: boolean;
  isAdmin: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const MobileMenu = ({ isMenuOpen, isAdmin, setIsMenuOpen }: MobileMenuProps) => {
  if (!isMenuOpen) return null;

  return (
    <div className="md:hidden border-t py-4 px-6 bg-background">
      <nav className="flex flex-col space-y-4">
        {isAdmin ? (
          <AdminNav setIsMenuOpen={setIsMenuOpen} />
        ) : (
          <PublicNav isMobile={true} setIsMenuOpen={setIsMenuOpen} />
        )}
      </nav>
    </div>
  );
};

export default MobileMenu;
