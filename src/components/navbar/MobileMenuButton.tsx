
import { Menu, X } from "lucide-react";

interface MobileMenuButtonProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const MobileMenuButton = ({ isMenuOpen, setIsMenuOpen }: MobileMenuButtonProps) => {
  return (
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
  );
};

export default MobileMenuButton;
