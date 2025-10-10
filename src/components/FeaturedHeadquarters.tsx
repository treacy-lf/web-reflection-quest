import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FeaturedHeadquarters = () => {
  const navigate = useNavigate();
  const headquarters = [
    { name: "张江高科技园区总部园", image: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=400&h=300&fit=crop" },
    { name: "紫竹高新区独栋", image: "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=400&h=300&fit=crop" },
    { name: "漕河泾开发区总部", image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=400&h=300&fit=crop" },
    { name: "临港新片区总部基地", image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop" },
    { name: "金桥经济开发区", image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=400&h=300&fit=crop" },
    { name: "虹桥商务区总部", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop" },
    { name: "外高桥保税区", image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=400&h=300&fit=crop" },
    { name: "陆家嘴金融城", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-foreground">精选总部独栋</h2>
          <Button 
            variant="outline"
            onClick={() => navigate('/buildings?type=headquarters')}
          >
            更多
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {headquarters.map((hq, index) => (
            <Card 
              key={hq.name}
              className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg border-border"
              style={{ boxShadow: 'var(--card-shadow)' }}
              onClick={() => navigate(`/building/${300 + index}`)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={hq.image}
                  alt={hq.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-lg font-semibold text-foreground">
                  {hq.name}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedHeadquarters;
