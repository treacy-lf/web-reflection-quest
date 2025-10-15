import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FeaturedBuildings = () => {
  const navigate = useNavigate();
  const buildings = [
    { id: "66", name: "虹桥万科中心", image: "/images/buildings/hongqiao-vanke.jpg" },
    { id: "70", name: "虹桥国际展汇", image: "/images/buildings/hongqiao-exhibition.jpg" },
    { id: "163", name: "虹桥汇", image: "/images/buildings/hongqiao-hui.jpg" },
    { id: "578", name: "SOHO天山广场", image: "/images/buildings/soho-tianshan.jpg" },
    { id: "114", name: "虹桥天地", image: "/images/buildings/hongqiao-tiandi.jpg" },
    { id: "89", name: "虹桥世界中心", image: "/images/buildings/hongqiao-world-center.jpg" },
    { id: "135", name: "中骏广场二期", image: "/images/buildings/zhongjun-plaza2.png" },
    { id: "79", name: "虹桥阿里中心", image: "/images/buildings/hongqiao-ali-center.jpg" },
    { id: "608", name: "远东国际广场", image: "/images/buildings/yuandong-plaza.jpg" },
    { id: "573", name: "维璟中心", image: "/images/buildings/weijing-center.jpg" },
    { id: "172", name: "恒基旭辉中心", image: "/images/buildings/hongqiao-vanke.jpg" },
    { id: "567", name: "尚嘉中心", image: "/images/buildings/shangjia-center.jpg" },
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-foreground">精选写字楼</h2>
          <Button 
            variant="outline"
            onClick={() => navigate('/office-buildings')}
          >
            更多上海写字楼出租
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {buildings.map((building) => (
            <Card 
              key={building.name}
              className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg border-border"
              style={{ boxShadow: 'var(--card-shadow)' }}
              onClick={() => navigate(`/building/${building.id}`)}
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
