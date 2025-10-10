import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Ruler, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Building {
  id: number;
  name: string;
  image: string;
  district: string;
  area: string;
  price: string;
  floor: string;
  tags: string[];
}

interface BuildingCardProps {
  building: Building;
}

const BuildingCard = ({ building }: BuildingCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/building/${building.id}`);
  };

  return (
    <Card 
      className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg border-border"
      style={{ boxShadow: 'var(--card-shadow)' }}
      onClick={handleClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={building.image}
          alt={building.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2 flex flex-wrap gap-1">
          {building.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {building.name}
        </h3>
        
        <div className="space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>{building.district}</span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <Ruler className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>面积: {building.area}</span>
          </div>
          
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <div className="flex items-center text-primary font-semibold">
              <DollarSign className="w-4 h-4 mr-1" />
              <span>{building.price}</span>
            </div>
            <span className="text-xs text-muted-foreground">{building.floor}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BuildingCard;