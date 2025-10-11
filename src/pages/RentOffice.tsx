import Header from "@/components/Header";
import FilterSection from "@/components/FilterSection";
import BuildingCard from "@/components/BuildingCard";
import Footer from "@/components/Footer";

const RentOffice = () => {
  const buildings = [
    {
      id: "1",
      name: "环球港中心",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60",
      area: "100-500㎡",
      price: "5-8元/㎡/天",
      location: "普陀区",
      tags: ["地铁直达", "精装修", "免费停车"]
    },
    {
      id: "2",
      name: "静安嘉里中心",
      image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&auto=format&fit=crop&q=60",
      area: "200-1000㎡",
      price: "8-12元/㎡/天",
      location: "静安区",
      tags: ["商圈核心", "甲级写字楼", "配套齐全"]
    },
    {
      id: "3",
      name: "陆家嘴国金中心",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&auto=format&fit=crop&q=60",
      area: "150-800㎡",
      price: "10-15元/㎡/天",
      location: "浦东新区",
      tags: ["地标建筑", "江景房", "高端办公"]
    },
    {
      id: "4",
      name: "虹桥天地",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=60",
      area: "80-400㎡",
      price: "6-9元/㎡/天",
      location: "闵行区",
      tags: ["近虹桥枢纽", "交通便利", "现代化"]
    },
    {
      id: "5",
      name: "徐家汇中心",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop&q=60",
      area: "120-600㎡",
      price: "7-10元/㎡/天",
      location: "徐汇区",
      tags: ["繁华地段", "地铁上盖", "品牌入驻"]
    },
    {
      id: "6",
      name: "世纪汇广场",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60",
      area: "100-500㎡",
      price: "6-9元/㎡/天",
      location: "浦东新区",
      tags: ["商业配套", "性价比高", "拎包入住"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">租办公室</h1>
        <FilterSection />
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <p className="text-muted-foreground">共找到 {buildings.length} 套房源</p>
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

export default RentOffice;
