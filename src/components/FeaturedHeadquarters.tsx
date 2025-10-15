import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FeaturedHeadquarters = () => {
  const navigate = useNavigate();
  const headquarters = [
    { id: "1694", name: "张江科学城总部园", image: "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210618/a2b8c1e9d4f3a6e7b8c9d0e1f2a3b4c5.jpg" },
    { id: "1693", name: "紫竹高新区独栋", image: "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210618/b3c9d2e0f1a4b5c6d7e8f9a0b1c2d3e4.jpg" },
    { id: "1692", name: "漕河泾开发区总部", image: "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210618/c4d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4.jpg" },
    { id: "1691", name: "临港新片区总部基地", image: "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210618/d5e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5.jpg" },
    { id: "1690", name: "金桥经济开发区", image: "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210618/e6f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6.jpg" },
    { id: "1689", name: "虹桥商务区总部", image: "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210618/f7a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7.jpg" },
    { id: "1688", name: "外高桥保税区总部", image: "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210618/a8b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8.jpg" },
    { id: "1687", name: "陆家嘴金融城", image: "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210618/b9c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9.jpg" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-foreground">精选总部独栋</h2>
          <Button 
            variant="outline"
            onClick={() => navigate('/headquarters')}
          >
            更多总部独栋
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {headquarters.map((hq, index) => (
            <Card 
              key={hq.name}
              className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg border-border"
              style={{ boxShadow: 'var(--card-shadow)' }}
              onClick={() => navigate(`/building/${hq.id}`)}
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
