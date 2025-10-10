import { Button } from "@/components/ui/button";

const FilterSection = () => {
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
                  className={location === "不限" ? "text-primary" : ""}
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
                  className={subway === "不限" ? "text-primary" : ""}
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
                  className={area === "不限" ? "text-primary" : ""}
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
                  className={price === "单价不限" ? "text-primary" : ""}
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
