import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FeaturedHeadquarters = () => {
  const navigate = useNavigate();
  const headquarters = [
    { id: "2751", name: "虹桥BU中心（独栋）", image: "/images/headquarters/hongqiao-bu.jpg" },
    { id: "2718", name: "力波REEB1987（独栋）", image: "/images/headquarters/libo-reeb.jpg" },
    { id: "1698", name: "田林坊（独栋）", image: "/images/headquarters/tianlinfang.jpg" },
    { id: "1701", name: "中骏广场（独栋）", image: "/images/headquarters/zhongjun.jpg" },
    { id: "1693", name: "虹桥正荣中心（独栋）", image: "/images/headquarters/zhengrong.jpg" },
    { id: "2746", name: "MAX科技园（独栋）", image: "/images/headquarters/max-tech.jpg" },
    { id: "2760", name: "平金中心（独栋）", image: "/images/headquarters/pingjin.jpg" },
    { id: "2722", name: "容大中心（独栋）", image: "/images/headquarters/rongda.jpg" },
    { id: "1691", name: "E通世界·华新园（独栋)", image: "/images/headquarters/etong.jpg" },
    { id: "1692", name: "丰隆虹桥中心（独栋）", image: "/images/headquarters/fenglong.jpg" },
    { id: "1699", name: "虹桥展汇（独栋）", image: "/images/headquarters/hongqiao-zhanhui.jpg" },
    { id: "1700", name: "中建锦绣天地（独栋）", image: "/images/headquarters/zhongjian.jpg" },
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
