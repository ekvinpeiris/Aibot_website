
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
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

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  const solutionsItems = [
    { title: "E-commerce Stores", href: "/solutions/ecommerce" },
    { title: "Healthcare Clinics", href: "/solutions/healthcare" },
    { title: "Hotels & Travel Agencies", href: "/solutions/travel" },
    { title: "Online Education Platforms", href: "/solutions/education" },
    { title: "Service Businesses", href: "/solutions/service" },
  ];

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
          {isAdmin ? (
            // Admin Navigation Links
            <>
              <Link 
                to="/admin" 
                className={`font-medium hover:text-primary transition-colors ${location.pathname === '/admin' ? 'text-primary' : ''}`}
              >
                Dashboard
              </Link>
              <Link 
                to="/admin/leads" 
                className={`font-medium hover:text-primary transition-colors ${location.pathname === '/admin/leads' ? 'text-primary' : ''}`}
              >
                Leads
              </Link>
              <Link 
                to="/admin/blog" 
                className={`font-medium hover:text-primary transition-colors ${location.pathname === '/admin/blog' ? 'text-primary' : ''}`}
              >
                Blog
              </Link>
              <Link 
                to="/admin/pricing" 
                className={`font-medium hover:text-primary transition-colors ${location.pathname === '/admin/pricing' ? 'text-primary' : ''}`}
              >
                Pricing
              </Link>
              <Link 
                to="/admin/settings" 
                className={`font-medium hover:text-primary transition-colors ${location.pathname === '/admin/settings' ? 'text-primary' : ''}`}
              >
                Settings
              </Link>
            </>
          ) : (
            // Public Navigation Links
            <>
              <Link 
                to="/" 
                className={`font-medium hover:text-primary transition-colors ${location.pathname === '/' ? 'text-primary' : ''}`}
              >
                Home
              </Link>
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
              <Link 
                to="/pricing" 
                className={`font-medium hover:text-primary transition-colors ${location.pathname === '/pricing' ? 'text-primary' : ''}`}
              >
                Pricing
              </Link>
              <Link 
                to="/blog" 
                className={`font-medium hover:text-primary transition-colors ${location.pathname === '/blog' ? 'text-primary' : ''}`}
              >
                Blog
              </Link>
            </>
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
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
            {isAdmin ? (
              // Admin Mobile Menu
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
            ) : (
              // Public Mobile Menu
              <>
                <Link 
                  to="/" 
                  className="font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
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
                  <Link to="/demo-landing" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full font-medium bg-primary text-white hover:bg-primary/90">
                      Book a Demo
                    </Button>
                  </Link>
                </div>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
