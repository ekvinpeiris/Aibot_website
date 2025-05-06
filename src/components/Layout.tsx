
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useIsMobile } from "@/hooks/use-mobile";

interface LayoutProps {
  children: ReactNode;
  hideFooter?: boolean;
}

const Layout = ({ children, hideFooter = false }: LayoutProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className={`flex-1 ${isMobile ? 'pt-1' : ''}`}>{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;
