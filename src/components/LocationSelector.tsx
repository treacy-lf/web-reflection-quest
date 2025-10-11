import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

const LocationSelector = () => {
  const [selectedCity, setSelectedCity] = useState("上海");

  const cities = [
    { name: "上海", districts: ["浦东", "黄浦", "静安", "徐汇", "长宁", "普陀", "闵行", "青浦", "虹口", "杨浦", "嘉定", "宝山", "松江", "奉贤", "金山"] },
    { name: "北京", districts: ["东城", "西城", "朝阳", "海淀", "丰台", "石景山"] },
    { name: "深圳", districts: ["福田", "罗湖", "南山", "宝安", "龙岗", "盐田"] },
    { name: "广州", districts: ["天河", "越秀", "海珠", "荔湾", "白云", "黄埔"] },
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-1">
          <MapPin className="w-4 h-4" />
          <span>{selectedCity}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="start">
        <div className="grid grid-cols-4 border-b">
          {cities.map((city) => (
            <button
              key={city.name}
              onClick={() => setSelectedCity(city.name)}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                selectedCity === city.name
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {city.name}
            </button>
          ))}
        </div>
        <div className="p-4">
          <div className="grid grid-cols-3 gap-2">
            {cities
              .find((city) => city.name === selectedCity)
              ?.districts.map((district) => (
                <Button
                  key={district}
                  variant="ghost"
                  size="sm"
                  className="justify-start"
                  onClick={() => {
                    window.location.href = `/buildings?district=${district}`;
                  }}
                >
                  {district}
                </Button>
              ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default LocationSelector;
