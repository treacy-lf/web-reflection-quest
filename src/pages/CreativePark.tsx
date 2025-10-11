import Header from "@/components/Header";
import FilterSection from "@/components/FilterSection";
import BuildingCard from "@/components/BuildingCard";
import Footer from "@/components/Footer";

const CreativePark = () => {
  const buildings = [
    {
      id: "13",
      name: "8号桥创意园",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60",
      area: "80-500㎡",
      price: "4-7元/㎡/天",
      location: "卢湾区",
      tags: ["艺术氛围", "老厂房改造", "创意产业"]
    },
    {
      id: "14",
      name: "M50创意园",
      image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&auto=format&fit=crop&q=60",
      area: "60-400㎡",
      price: "3-6元/㎡/天",
      location: "普陀区",
      tags: ["艺术画廊", "文化创意", "苏州河畔"]
    },
    {
      id: "15",
      name: "田子坊创意园",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&auto=format&fit=crop&q=60",
      area: "50-300㎡",
      price: "5-8元/㎡/天",
      location: "黄浦区",
      tags: ["石库门", "特色街区", "旅游热点"]
    },
    {
      id: "16",
      name: "上海国际时尚中心",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=60",
      area: "100-600㎡",
      price: "4-7元/㎡/天",
      location: "杨浦区",
      tags: ["工业遗存", "时尚产业", "黄浦江景"]
    },
    {
      id: "17",
      name: "1933老场坊",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop&q=60",
      area: "80-500㎡",
      price: "5-8元/㎡/天",
      location: "虹口区",
      tags: ["历史建筑", "创意办公", "文化地标"]
    },
    {
      id: "18",
      name: "越界创意园",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60",
      area: "70-400㎡",
      price: "4-6元/㎡/天",
      location: "长宁区",
      tags: ["设计产业", "园林环境", "配套完善"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">创意园区</h1>
        <FilterSection />
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <p className="text-muted-foreground">共找到 {buildings.length} 个创意园区</p>
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

export default CreativePark;
