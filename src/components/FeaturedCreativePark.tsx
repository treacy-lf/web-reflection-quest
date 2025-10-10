import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FeaturedCreativePark = () => {
  const navigate = useNavigate();
  const parks = [
    { name: "M50创意园", image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=400&h=300&fit=crop" },
    { name: "8号桥", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop" },
    { name: "田子坊", image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=400&h=300&fit=crop" },
    { name: "1933老场坊", image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=300&fit=crop" },
    { name: "上海国际时尚中心", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop" },
    { name: "德必易园", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop" },
    { name: "越界创意园", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop" },
    { name: "创智天地", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=300&fit=crop" },
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-foreground">精选创意园区</h2>
          <Button 
            variant="outline"
            onClick={() => navigate('/buildings?type=creative')}
          >
            更多
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {parks.map((park, index) => (
            <Card 
              key={park.name}
              className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg border-border"
              style={{ boxShadow: 'var(--card-shadow)' }}
              onClick={() => navigate(`/building/${200 + index}`)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={park.image}
                  alt={park.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-lg font-semibold text-foreground">
                  {park.name}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCreativePark;
