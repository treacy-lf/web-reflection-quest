import Header from "@/components/Header";
import FilterSection from "@/components/FilterSection";
import BuildingCard from "@/components/BuildingCard";
import Footer from "@/components/Footer";

const Coworking = () => {
  const buildings = [
    {
      id: "19",
      name: "WeWork威海路",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60",
      area: "1-50工位",
      price: "1500-3000元/月",
      location: "静安区",
      tags: ["国际品牌", "社区活动", "全套服务"]
    },
    {
      id: "20",
      name: "优客工场陆家嘴",
      image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&auto=format&fit=crop&q=60",
      area: "1-30工位",
      price: "1800-3500元/月",
      location: "浦东新区",
      tags: ["金融中心", "商务配套", "灵活租期"]
    },
    {
      id: "21",
      name: "裸心社淮海路",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&auto=format&fit=crop&q=60",
      area: "1-20工位",
      price: "2000-4000元/月",
      location: "黄浦区",
      tags: ["高端设计", "精品咖啡", "商圈核心"]
    },
    {
      id: "22",
      name: "氪空间虹桥",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=60",
      area: "1-40工位",
      price: "1600-3200元/月",
      location: "长宁区",
      tags: ["创业孵化", "投资对接", "近虹桥枢纽"]
    },
    {
      id: "23",
      name: "梦想加徐家汇",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop&q=60",
      area: "1-25工位",
      price: "1700-3300元/月",
      location: "徐汇区",
      tags: ["智能办公", "科技感", "交通便利"]
    },
    {
      id: "24",
      name: "SOHO 3Q五角场",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60",
      area: "1-35工位",
      price: "1400-2800元/月",
      location: "杨浦区",
      tags: ["大学周边", "创新创业", "性价比高"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">共享办公</h1>
        <FilterSection />
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <p className="text-muted-foreground">共找到 {buildings.length} 个共享办公空间</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buildings.map((building) => (
              <BuildingCard key={building.id} {...building} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Coworking;
