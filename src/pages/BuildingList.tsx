import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import FilterSection from "@/components/FilterSection";
import BuildingCard from "@/components/BuildingCard";
import { mockBuildings, searchBuildings, getBuildingsByDistrict } from "@/data/mockBuildings";

const BuildingList = () => {
  const [searchParams] = useSearchParams();
  const district = searchParams.get("district");
  const search = searchParams.get("search");
  
  let buildings = mockBuildings;
  
  if (search) {
    buildings = searchBuildings(search);
  } else if (district) {
    buildings = getBuildingsByDistrict(district);
  }

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
            <BuildingCard key={building.id} {...building} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuildingList;