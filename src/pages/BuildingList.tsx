import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import FilterSection from "@/components/FilterSection";
import BuildingCard from "@/components/BuildingCard";

const BuildingList = () => {
  const [searchParams] = useSearchParams();
  const district = searchParams.get("district");
  
  const buildings = [
    {
      id: 1,
      name: "虹桥万科中心",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      district: "虹桥商务区",
      area: "100-500㎡",
      price: "5-8元/㎡/天",
      floor: "地上30层",
      tags: ["近地铁", "精装修", "集中空调"],
    },
    {
      id: 2,
      name: "虹桥国际展汇",
      image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800&h=600&fit=crop",
      district: "虹桥商务区",
      area: "200-1000㎡",
      price: "6-9元/㎡/天",
      floor: "地上35层",
      tags: ["甲级写字楼", "近地铁", "独立空调"],
    },
    {
      id: 3,
      name: "虹桥汇",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
      district: "虹桥商务区",
      area: "150-800㎡",
      price: "5.5-7.5元/㎡/天",
      floor: "地上28层",
      tags: ["精装修", "近地铁", "配套齐全"],
    },
    {
      id: 4,
      name: "SOHO天山广场",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
      district: "天山路",
      area: "50-300㎡",
      price: "4-6元/㎡/天",
      floor: "地上20层",
      tags: ["小户型", "精装修", "性价比高"],
    },
    {
      id: 5,
      name: "虹桥天地",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=600&fit=crop",
      district: "虹桥商务区",
      area: "300-2000㎡",
      price: "7-10元/㎡/天",
      floor: "地上40层",
      tags: ["超甲写字楼", "地标建筑", "高端配置"],
    },
    {
      id: 6,
      name: "虹桥世界中心",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800&h=600&fit=crop",
      district: "虹桥商务区",
      area: "200-1500㎡",
      price: "6.5-9元/㎡/天",
      floor: "地上38层",
      tags: ["甲级写字楼", "近地铁", "商业配套"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {district ? `${district} - 写字楼出租` : "上海写字楼出租"}
          </h1>
          <p className="text-muted-foreground">
            共找到 {buildings.length} 套优质房源
          </p>
        </div>

        <FilterSection />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {buildings.map((building) => (
            <BuildingCard key={building.id} building={building} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuildingList;