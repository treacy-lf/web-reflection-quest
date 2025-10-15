import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FeaturedCreativePark = () => {
  const navigate = useNavigate();
  const parks = [
    { id: "1686", name: "M50创意园", image: "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210617/81c2e3e8253e3a71d2fc3acdebce62cc.jpg" },
    { id: "1685", name: "德必易园", image: "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210617/c2e32c8bdd69ba3cf8e73f51af7e47a5.jpg" },
    { id: "1684", name: "越界创意园", image: "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210617/cb26fb68ee7e9e40a9e35b5a8a2eb103.jpg" },
    { id: "1683", name: "8号桥", image: "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210617/e10e4fe2fc4af94a0c867e3afcb2a7cf.jpg" },
    { id: "1682", name: "田子坊创意园", image: "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210617/faa211bad862c24e5efe09a5f42c65b6.jpg" },
    { id: "1681", name: "创智天地", image: "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210617/97bb06c1a0ae3aa8f39f8c7ac8c56dc6.jpg" },
    { id: "1680", name: "上海国际时尚中心", image: "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210617/7ea2b0d8a9a1ddffc4bfb1c4e2d9c2e3.jpg" },
    { id: "1679", name: "1933老场坊", image: "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210617/32d6fbb44efeda0e5e2e3ecb4e01eee5.jpg" },
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
