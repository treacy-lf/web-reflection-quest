import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FeaturedCoworking = () => {
  const navigate = useNavigate();
  const coworking = [
    { name: "WeWork威海路", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop" },
    { name: "优客工场", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop" },
    { name: "氪空间", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=300&fit=crop" },
    { name: "梦想加", image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=300&fit=crop" },
    { name: "SOHO 3Q", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=300&fit=crop" },
    { name: "裸心社", image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=400&h=300&fit=crop" },
    { name: "世鳌国际", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop" },
    { name: "创邑SPACE", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-foreground">精选联合办公</h2>
          <Button 
            variant="outline" 
            onClick={() => navigate('/buildings?type=coworking')}
          >
            更多
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coworking.map((space, index) => (
            <Card 
              key={space.name}
              className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg border-border"
              style={{ boxShadow: 'var(--card-shadow)' }}
              onClick={() => navigate(`/building/${100 + index}`)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={space.image}
                  alt={space.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-lg font-semibold text-foreground">
                  {space.name}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoworking;
