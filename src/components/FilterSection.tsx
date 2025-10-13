import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const FilterSection = () => {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState("不限");
  const [selectedSubway, setSelectedSubway] = useState("不限");
  const [selectedArea, setSelectedArea] = useState("不限");
  const [selectedPrice, setSelectedPrice] = useState("单价不限");
  
  const locations = [
    "不限", "浦东", "黄浦", "静安", "徐汇", "长宁", "普陀", "闵行", 
    "青浦", "虹口", "杨浦", "嘉定", "宝山", "松江", "奉贤", "金山"
  ];
  
  const subways = [
    "不限", "1号线", "2号线", "3号线", "4号线", "5号线", "6号线", "7号线",
    "8号线", "9号线", "10号线", "11号线", "12号线", "13号线", "14号线"
  ];
  
  const areas = [
    "不限", "100m²以下", "100-200m²", "200-300m²", "300-500m²", "500-1000m²", "1000m²以上"
  ];
  
  const prices = [
    "单价不限", "3元以下", "3-4元", "4-5元", "5-7元", "7-9元", "9-12元", "12元以上"
  ];

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (selectedLocation !== "不限") params.append("location", selectedLocation);
    if (selectedSubway !== "不限") params.append("subway", selectedSubway);
    if (selectedArea !== "不限") params.append("area", selectedArea);
    if (selectedPrice !== "单价不限") params.append("price", selectedPrice);
    navigate(`/buildings?${params.toString()}`);
  };

  return (
    <section className="bg-card border-b border-border py-6">
      <div className="container mx-auto px-4">
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-16 text-muted-foreground flex-shrink-0 pt-2">位置</div>
            <div className="flex-1 flex flex-wrap gap-2">
              {locations.map((location) => (
                <Button
                  key={location}
                  variant="ghost"
                  size="sm"
                  className={selectedLocation === location ? "text-primary" : ""}
                  onClick={() => {
                    setSelectedLocation(location);
                    handleSearch();
                  }}
                >
                  {location}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-16 text-muted-foreground flex-shrink-0 pt-2">地铁</div>
            <div className="flex-1 flex flex-wrap gap-2">
              {subways.map((subway) => (
                <Button
                  key={subway}
                  variant="ghost"
                  size="sm"
                  className={selectedSubway === subway ? "text-primary" : ""}
                  onClick={() => {
                    setSelectedSubway(subway);
                    handleSearch();
                  }}
                >
                  {subway}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-16 text-muted-foreground flex-shrink-0 pt-2">面积</div>
            <div className="flex-1 flex flex-wrap gap-2">
              {areas.map((area) => (
                <Button
                  key={area}
                  variant="ghost"
                  size="sm"
                  className={selectedArea === area ? "text-primary" : ""}
                  onClick={() => {
                    setSelectedArea(area);
                    handleSearch();
                  }}
                >
                  {area}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-16 text-muted-foreground flex-shrink-0 pt-2">价格</div>
            <div className="flex-1 flex flex-wrap gap-2">
              {prices.map((price) => (
                <Button
                  key={price}
                  variant="ghost"
                  size="sm"
                  className={selectedPrice === price ? "text-primary" : ""}
                  onClick={() => {
                    setSelectedPrice(price);
                    handleSearch();
                  }}
                >
                  {price}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterSection;
