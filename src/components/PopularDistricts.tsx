import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const PopularDistricts = () => {
  const navigate = useNavigate();
  const districts = [
    { name: "虹桥商务区", aid: "99", image: "/images/district-hongqiao.jpg" },
    { name: "徐泾/西虹桥", aid: "108", image: "https://chaoban.oss-cn-shanghai.aliyuncs.com/images/uploads_eWr6Ld/uploads/20210615/8c4499df1b95a33595d532bdb870785e.jpg" },
    { name: "虹桥临空经济区", aid: "86", image: "/images/district-linkong.png" },
    { name: "虹桥古北开发区", aid: "87", image: "/images/district-gubei.jpg" },
    { name: "人民广场", aid: "63", image: "/images/district-renmin.jpg" },
    { name: "长风商务区", aid: "91", image: "/images/district-changfeng.jpg" },
    { name: "莘庄商务区", aid: "101", image: "/images/district-xinzhuang.jpg" },
    { name: "陆家嘴", aid: "48", image: "/images/district-lujiazui.png" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground mb-8">上海热门商圈</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {districts.map((district) => (
            <Card 
              key={district.name}
              className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg border-border"
              style={{ boxShadow: 'var(--card-shadow)' }}
              onClick={() => navigate(`/buildings?aid=${district.aid}`)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={district.image}
                  alt={district.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-foreground">
                  {district.name}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDistricts;
