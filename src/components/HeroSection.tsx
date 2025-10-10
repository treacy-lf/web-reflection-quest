import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-office.jpg";
import { useState } from "react";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("商圈");

  return (
    <section className="relative h-[600px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background/90" />
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-foreground mb-8 text-center">
          共享租赁办公室
        </h1>
        
        <div className="w-full max-w-4xl bg-card/95 backdrop-blur-sm rounded-lg shadow-2xl p-6">
          <div className="flex gap-2 mb-4">
            <Button 
              variant="tab" 
              data-active={activeTab === "商圈"}
              onClick={() => setActiveTab("商圈")}
              className="flex-1"
            >
              红圈商圈名
            </Button>
            <Button 
              variant="tab"
              data-active={activeTab === "楼盘"}
              onClick={() => setActiveTab("楼盘")}
              className="flex-1"
            >
              快速租楼盘
            </Button>
            <Button 
              variant="tab"
              data-active={activeTab === "空置"}
              onClick={() => setActiveTab("空置")}
              className="flex-1"
            >
              红圈空置楼盘
            </Button>
          </div>
          
          <div className="flex gap-2">
            <Input
              placeholder="请输入关键名称或地址"
              className="flex-1 h-12 text-base"
            />
            <Button size="lg" className="px-12">
              <Search className="mr-2 h-5 w-5" />
              开始选址
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
