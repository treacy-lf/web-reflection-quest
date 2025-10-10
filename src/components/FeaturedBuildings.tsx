import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const FeaturedBuildings = () => {
  const navigate = useNavigate();
  const buildings = [
    { name: "虹桥万科中心", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop" },
    { name: "虹桥国际展汇", image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=400&h=300&fit=crop" },
    { name: "虹桥汇", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=300&fit=crop" },
    { name: "SOHO天山广场", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop" },
    { name: "虹桥天地", image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=300&fit=crop" },
    { name: "虹桥世界中心", image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=400&h=300&fit=crop" },
    { name: "中骏广场二期", image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=400&h=300&fit=crop" },
    { name: "虹桥阿里中心", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop" },
    { name: "远东国际广场", image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop" },
    { name: "维璟中心", image: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=400&h=300&fit=crop" },
    { name: "恒基旭辉中心", image: "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=400&h=300&fit=crop" },
    { name: "尚嘉中心", image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=400&h=300&fit=crop" },
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground mb-8">精选写字楼</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {buildings.map((building, index) => (
            <Card 
              key={building.name}
              className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg border-border"
              style={{ boxShadow: 'var(--card-shadow)' }}
              onClick={() => navigate(`/building/${index + 1}`)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={building.image}
                  alt={building.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-lg font-semibold text-foreground">
                  {building.name}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBuildings;
