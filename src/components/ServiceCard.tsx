
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  imageUrl: string;
}

const ServiceCard = ({ title, description, icon, imageUrl }: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-none">
      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader className="pt-4 pb-2">
        <div className="flex items-center gap-2">
          <span className="text-clinic-secondary">{icon}</span>
          <CardTitle className="text-xl font-bold text-clinic-primary">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-700">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
