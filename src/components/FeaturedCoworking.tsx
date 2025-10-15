import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FeaturedCoworking = () => {
  const navigate = useNavigate();
  const coworkingSpaces = [
    { id: "1627", name: "Distrii办伴（冠捷大厦）", image: "/images/coworking/distrii-guanjie.jpg" },
    { id: "1632", name: "Umon优盟（虹桥丽宝广场）", image: "/images/coworking/umon-hongqiao.jpg" },
    { id: "1638", name: "WeWork（虹桥天地）", image: "/images/coworking/wework-hongqiao.jpg" },
    { id: "1642", name: "WIZWORK（环球港）", image: "/images/coworking/wizwork-huanqiugang.jpg" },
    { id: "1644", name: "艾克商务中心（外滩金融中心）", image: "/images/coworking/aike-waitan.jpg" },
    { id: "1668", name: "大树下办公空间（龙湖虹桥天街）", image: "/images/coworking/dashuxia-hongqiao.jpg" },
    { id: "1671", name: "德事商务中心（静安嘉里中心）", image: "/images/coworking/deshi-jingan.jpg" },
    { id: "1672", name: "寰图办公空间（上海白玉兰广场）", image: "/images/coworking/huantu-baiyulan.jpg" },
    { id: "1679", name: "氪空间KrSpace（虹桥绿谷社区）", image: "/images/coworking/krspace-hongqiao.jpg" },
    { id: "1684", name: "快易名商（虹桥万通中心）", image: "/images/coworking/kuaiyi-wantong.jpg" },
    { id: "1685", name: "雷格斯商务中心（1788国际中心）", image: "/images/coworking/regus-1788.jpg" },
    { id: "1686", name: "筑梦之星（凌空社区）", image: "/images/coworking/zhumeng-lingkong.jpg" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-foreground">精选联合办公</h2>
          <Button 
            variant="outline" 
            onClick={() => navigate('/coworking')}
          >
            更多上海热门联合办公
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coworkingSpaces.map((space) => (
            <Card 
              key={space.name}
              className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg border-border"
              style={{ boxShadow: 'var(--card-shadow)' }}
              onClick={() => navigate(`/building/${space.id}`)}
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
