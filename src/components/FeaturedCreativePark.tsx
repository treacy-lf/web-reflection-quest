import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FeaturedCreativePark = () => {
  const navigate = useNavigate();
  const parks = [
    { id: "1591", name: "800秀创意园", image: "/images/creative/800xiu.jpg" },
    { id: "1592", name: "安垦汇智创意园", image: "/images/creative/anken.jpg" },
    { id: "1593", name: "八号桥Ⅳ期", image: "/images/creative/8bridge-4.jpg" },
    { id: "1594", name: "大宁德必易园", image: "/images/creative/daning-debi.jpg" },
    { id: "1596", name: "老码头创意园", image: "/images/creative/laomatou.jpg" },
    { id: "1597", name: "幸福里创意园", image: "/images/creative/xingfuli.jpg" },
    { id: "1598", name: "越界·世博园", image: "/images/creative/yuejie-shibo.jpg" },
    { id: "1599", name: "越界·1199", image: "/images/creative/yuejie-1199.jpg" },
    { id: "1601", name: "越界·田林坊", image: "/images/creative/yuejie-tianlin.jpg" },
    { id: "1602", name: "城市概念创意园", image: "/images/creative/chengshi.jpg" },
    { id: "1023", name: "长宁德必易园", image: "/images/creative/changning-debi.jpg" },
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-foreground">精选创意园区</h2>
          <Button 
            variant="outline"
            onClick={() => navigate('/creative-park')}
          >
            更多创意园区
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {parks.map((park, index) => (
            <Card 
              key={park.name}
              className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg border-border"
              style={{ boxShadow: 'var(--card-shadow)' }}
              onClick={() => navigate(`/building/${park.id}`)}
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
