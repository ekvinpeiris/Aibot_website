
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronDown
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

const AdminLayout = ({ children, title }: AdminLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = () => {
    // In a real app, we would handle session termination here
    navigate("/");
  };

  const navItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
      href: "/admin",
    },
    {
      name: "Lead Management",
      icon: <Users className="h-5 w-5" />,
      href: "/admin/leads",
    },
    {
      name: "Blog Management",
      icon: <FileText className="h-5 w-5" />,
      href: "/admin/blog",
    },
    {
      name: "Settings",
      icon: <Settings className="h-5 w-5" />,
      href: "/admin/settings",
    },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Sidebar for desktop */}
      <div className="hidden md:flex md:flex-col md:w-64 md:fixed md:inset-y-0 z-20 border-r bg-white">
        <div className="flex-1 flex flex-col min-h-0">
          <div className="flex items-center h-16 px-4 border-b">
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
              <span className="font-bold text-lg">Admin</span>
            </Link>
          </div>
          <nav className="flex-1 px-2 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "group flex items-center px-2 py-2 text-base font-medium rounded-md hover:bg-accent",
                  window.location.pathname === item.href
                    ? "bg-accent text-primary"
                    : "text-gray-600 hover:text-primary"
                )}
              >
                {item.icon}
                <span className="ml-3">{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="border-t p-4">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-gray-600 hover:text-primary"
            onClick={handleSignOut}
          >
            <LogOut className="mr-2 h-5 w-5" />
            Sign Out
          </Button>
        </div>
      </div>

      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)}></div>
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="flex-1 h-0 overflow-y-auto">
              <div className="flex items-center h-16 px-4 border-b">
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
                  <span className="font-bold text-lg">Admin</span>
                </Link>
              </div>
              <nav className="mt-5 px-2 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "group flex items-center px-2 py-2 text-base font-medium rounded-md",
                      window.location.pathname === item.href
                        ? "bg-accent text-primary"
                        : "text-gray-600 hover:bg-accent hover:text-primary"
                    )}
                    onClick={() => setSidebarOpen(false)}
                  >
                    {item.icon}
                    <span className="ml-3">{item.name}</span>
                  </Link>
                ))}
              </nav>
            </div>
            <div className="border-t p-4">
              <Button 
                variant="ghost" 
                className="w-full justify-start text-gray-600 hover:text-primary"
                onClick={handleSignOut}
              >
                <LogOut className="mr-2 h-5 w-5" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="md:ml-64 flex flex-col flex-1">
        <header className="bg-white shadow-sm z-10 border-b">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            <button
              type="button"
              className="md:hidden -ml-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-xl md:text-2xl font-semibold text-gray-900">{title}</h1>
            <div className="ml-4 relative flex-shrink-0">
              <div>
                <button
                  className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                >
                  <span className="sr-only">Open user menu</span>
                  <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">
                    <span>A</span>
                  </div>
                  <span className="hidden md:inline-block ml-2">Admin User</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
              </div>
              {userMenuOpen && (
                <div 
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-20"
                  onClick={() => setUserMenuOpen(false)}
                >
                  <a href="#profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent">Your Profile</a>
                  <a href="#settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent">Settings</a>
                  <button 
                    onClick={handleSignOut}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-accent"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
