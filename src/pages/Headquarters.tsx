import Header from "@/components/Header";
import FilterSection from "@/components/FilterSection";
import BuildingCard from "@/components/BuildingCard";
import Footer from "@/components/Footer";

const Headquarters = () => {
  const buildings = [
    {
      id: "25",
      name: "张江科技园独栋",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60",
      area: "3000-10000㎡",
      price: "5-8元/㎡/天",
      location: "浦东新区",
      tags: ["科技园区", "独立产权", "政策支持"]
    },
    {
      id: "26",
      name: "漕河泾开发区独栋",
      image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&auto=format&fit=crop&q=60",
      area: "2500-8000㎡",
      price: "6-9元/㎡/天",
      location: "徐汇区",
      tags: ["高新企业", "研发基地", "交通便捷"]
    },
    {
      id: "27",
      name: "紫竹科技园独栋",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&auto=format&fit=crop&q=60",
      area: "4000-12000㎡",
      price: "5-7元/㎡/天",
      location: "闵行区",
      tags: ["大学资源", "创新产业", "园区环境"]
    },
    {
      id: "28",
      name: "临港新片区独栋",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=60",
      area: "5000-15000㎡",
      price: "4-6元/㎡/天",
      location: "浦东新区",
      tags: ["自贸区", "产业集群", "税收优惠"]
    },
    {
      id: "29",
      name: "嘉定汽车城独栋",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop&q=60",
      area: "3500-10000㎡",
      price: "4-7元/㎡/天",
      location: "嘉定区",
      tags: ["汽车产业", "智能制造", "配套齐全"]
    },
    {
      id: "30",
      name: "金桥开发区独栋",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60",
      area: "4500-13000㎡",
      price: "5-8元/㎡/天",
      location: "浦东新区",
      tags: ["制造业", "物流便利", "成本优势"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">总部独栋</h1>
        <FilterSection />
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <p className="text-muted-foreground">共找到 {buildings.length} 个总部独栋</p>
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

export default Headquarters;
