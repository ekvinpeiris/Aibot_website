
import { Link } from "react-router-dom";

const Logo = () => {
  return (
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
  );
};

export default Logo;
