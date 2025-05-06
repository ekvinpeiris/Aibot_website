
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useLocation } from "react-router-dom";

interface SolutionsMenuProps {
  isMobile: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const solutionsItems = [
  { title: "E-commerce Stores", href: "/solutions/ecommerce" },
  { title: "Healthcare Clinics", href: "/solutions/healthcare" },
  { title: "Hotels & Travel Agencies", href: "/solutions/travel" },
  { title: "Online Education Platforms", href: "/solutions/education" },
  { title: "Service Businesses", href: "/solutions/service" },
];

const SolutionsMenu = ({ isMobile, setIsMenuOpen }: SolutionsMenuProps) => {
  const location = useLocation();

  if (isMobile) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center text-left font-medium hover:text-primary transition-colors">
          Solutions <ChevronDown className="ml-1 h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {solutionsItems.map((item) => (
            <DropdownMenuItem key={item.href} asChild>
              <Link
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={`font-medium hover:text-primary transition-colors ${location.pathname.startsWith('/solutions') ? 'text-primary' : ''}`}>
            Solutions
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4">
              {solutionsItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="text-sm font-medium leading-none">{item.title}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default SolutionsMenu;
