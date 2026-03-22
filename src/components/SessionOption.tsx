
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface SessionOptionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const SessionOption = ({ title, description, icon, link }: SessionOptionProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex flex-col items-center text-center">
        <div className="h-16 w-16 rounded-full bg-clinic-accent flex items-center justify-center mb-4 text-clinic-primary">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-clinic-primary mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <Button asChild className="bg-clinic-secondary hover:bg-blue-500 text-white">
          <Link to={link}>Book Now</Link>
        </Button>
      </div>
    </div>
  );
};

export default SessionOption;
