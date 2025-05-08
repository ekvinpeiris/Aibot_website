
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const isMobile = useIsMobile();

  return (
    <footer className="bg-accent py-8 md:py-12">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary rounded-md p-1">
                <svg 
                  className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground" 
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
                  <path d="M9 8h .01" />
                </svg>
              </div>
              <span className="font-bold text-lg md:text-xl">ChatAI</span>
            </Link>
            {!isMobile && (
              <p className="mt-4 text-muted-foreground">
                Enterprise-grade AI chatbots for your business. Automate customer service, generate leads, and increase sales.
              </p>
            )}
          </div>
          
          <div>
            <h5 className="font-medium mb-3 md:mb-4">Product</h5>
            <ul className="space-y-1 md:space-y-2">
              <li><Link to="/solutions/ecommerce" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">E-commerce</Link></li>
              <li><Link to="/solutions/healthcare" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">Healthcare</Link></li>
              <li><Link to="/solutions/travel" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">Travel</Link></li>
              <li><Link to="/solutions/education" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">Education</Link></li>
              <li><Link to="/solutions/service" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">Service Business</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-medium mb-3 md:mb-4">Resources</h5>
            <ul className="space-y-1 md:space-y-2">
              <li><Link to="/blog" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/lead-magnet" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">Free Guide</Link></li>
              <li><Link to="/pricing" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/demo-landing" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">Demo</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-medium mb-3 md:mb-4">Company</h5>
            <ul className="space-y-1 md:space-y-2">
              <li><Link to="/about" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-xs md:text-sm text-muted-foreground">© {currentYear} ChatAI. All rights reserved.</p>
          {!isMobile && (
            <div className="flex gap-4">
              <a href="https://twitter.com" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="https://linkedin.com" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://facebook.com" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
