import Header from "@/components/Header";
import FilterSection from "@/components/FilterSection";
import BuildingCard from "@/components/BuildingCard";
import Footer from "@/components/Footer";

const OfficeBuildings = () => {
  const buildings = [
    {
      id: "7",
      name: "上海中心大厦",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60",
      area: "500-3000㎡",
      price: "12-18元/㎡/天",
      location: "浦东新区",
      tags: ["超高层", "地标建筑", "国际品牌"]
    },
    {
      id: "8",
      name: "环贸广场",
      image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&auto=format&fit=crop&q=60",
      area: "300-1500㎡",
      price: "10-14元/㎡/天",
      location: "浦东新区",
      tags: ["甲级写字楼", "商圈中心", "高端配置"]
    },
    {
      id: "9",
      name: "恒隆广场",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&auto=format&fit=crop&q=60",
      area: "200-1000㎡",
      price: "9-13元/㎡/天",
      location: "静安区",
      tags: ["奢华商场", "地铁直达", "品牌云集"]
    },
    {
      id: "10",
      name: "大宁国际",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=60",
      area: "150-800㎡",
      price: "7-10元/㎡/天",
      location: "静安区",
      tags: ["生态环境", "配套完善", "交通便利"]
    },
    {
      id: "11",
      name: "中信泰富广场",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop&q=60",
      area: "250-1200㎡",
      price: "8-12元/㎡/天",
      location: "静安区",
      tags: ["商务中心", "高端定位", "物业优质"]
    },
    {
      id: "12",
      name: "虹桥世界中心",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60",
      area: "400-2000㎡",
      price: "9-13元/㎡/天",
      location: "长宁区",
      tags: ["虹桥商务区", "国际化", "交通枢纽"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">写字楼</h1>
        <FilterSection />
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <p className="text-muted-foreground">共找到 {buildings.length} 个写字楼</p>
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

export default OfficeBuildings;
