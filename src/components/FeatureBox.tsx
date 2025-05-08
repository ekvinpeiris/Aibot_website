
import { ReactNode } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

interface FeatureBoxProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureBox = ({ icon, title, description }: FeatureBoxProps) => {
  const isMobile = useIsMobile();
  
  return (
    <Card className="h-full hover:shadow-md transition-shadow border-none bg-card/50">
      <CardHeader className={`space-y-2 ${isMobile ? 'p-4' : 'p-6'}`}>
        <div className="bg-primary/10 p-3 rounded-lg w-fit">
          {icon}
        </div>
        <h3 className={`font-semibold ${isMobile ? 'text-lg' : 'text-xl'}`}>{title}</h3>
      </CardHeader>
      <CardContent className={`${isMobile ? 'px-4 pt-0 pb-4' : 'p-6 pt-0'}`}>
        <p className={`text-muted-foreground ${isMobile ? 'text-sm leading-relaxed' : ''}`}>{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureBox;
