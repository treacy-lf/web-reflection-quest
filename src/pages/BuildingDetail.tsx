import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, MapPin, Building2, Ruler, DollarSign, Train, Car, Users } from "lucide-react";
import BuildingMap from "@/components/BuildingMap";
import { getBuildingById } from "@/data/mockBuildings";

const BuildingDetail = () => {
  const { id } = useParams();
  const buildingData = getBuildingById(id || "");

  if (!buildingData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">楼盘不存在</h1>
          <p className="text-muted-foreground">抱歉，找不到该楼盘信息</p>
        </div>
      </div>
    );
  }

  const building = {
    ...buildingData,
    images: buildingData.images || [buildingData.image],
    totalFloors: buildingData.totalFloors || "地上30层",
    availableArea: buildingData.availableArea || buildingData.area,
    description: buildingData.description || `${buildingData.name}位于${buildingData.district}，地理位置优越，交通便利。`,
    facilities: buildingData.facilities || ["24小时安保", "中央空调", "新风系统", "高速电梯", "智能门禁", "停车场", "会议室", "茶水间"],
    transportation: buildingData.transportation || ["地铁站 步行5分钟", "公交站 步行3分钟"],
    longitude: buildingData.longitude || 121.398,
    latitude: buildingData.latitude || 31.198,
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* 图片展示 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="col-span-1 md:col-span-2">
            <img
              src={building.images[0]}
              alt={building.name}
              className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
            />
          </div>
          {building.images.slice(1).map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`${building.name} ${index + 2}`}
                className="w-full h-[250px] object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 主要信息 */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-4">{building.name}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                {building.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <div className="flex items-center text-muted-foreground mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{building.address}</span>
              </div>
            </div>

            {/* 基本信息卡片 */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">基本信息</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">租金</p>
                      <p className="font-semibold">{building.price}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Ruler className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">面积</p>
                      <p className="font-semibold">{building.availableArea}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">楼层</p>
                      <p className="font-semibold">{building.totalFloors}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">商圈</p>
                      <p className="font-semibold">{building.district}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 楼盘介绍 */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">楼盘介绍</h2>
                <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                  {building.description}
                </p>
              </CardContent>
            </Card>

            {/* 配套设施 */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">配套设施</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {building.facilities.map((facility) => (
                    <div key={facility} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-muted-foreground">{facility}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 交通信息和地图 */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">交通信息</h2>
                <div className="space-y-3 mb-6">
                  {building.transportation.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                
                {/* 地图组件 */}
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">位置地图</h3>
                  <BuildingMap 
                    address={building.address}
                    buildingName={building.name}
                    longitude={121.398}
                    latitude={31.198}
                  />
                </div>
              </CardContent>
            </Card>

            {/* 可租面积及价格 */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">{building.name} 可出租面积及价格</h2>
                <Tabs defaultValue="floor" className="w-full">
                  <TabsList className="grid w-full grid-cols-6">
                    <TabsTrigger value="floor">房源详情</TabsTrigger>
                    <TabsTrigger value="1">1人间</TabsTrigger>
                    <TabsTrigger value="2-3">2-3人间</TabsTrigger>
                    <TabsTrigger value="4-6">4-6人间</TabsTrigger>
                    <TabsTrigger value="7-10">7-10人间</TabsTrigger>
                    <TabsTrigger value="11-15">11-15人间</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="floor" className="mt-4">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 px-4">面积</th>
                            <th className="text-left py-3 px-4">容纳人数</th>
                            <th className="text-left py-3 px-4">起价</th>
                            <th className="text-left py-3 px-4">套餐</th>
                            <th className="text-left py-3 px-4">剩余数量</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="py-3 px-4">100-200㎡</td>
                            <td className="py-3 px-4">8-16人</td>
                            <td className="py-3 px-4 text-primary font-semibold">1400元/月</td>
                            <td className="py-3 px-4">在租房源</td>
                            <td className="py-3 px-4">在租户型</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-3 px-4">200-300㎡</td>
                            <td className="py-3 px-4">16-24人</td>
                            <td className="py-3 px-4 text-primary font-semibold">2180元/月</td>
                            <td className="py-3 px-4">在租房源</td>
                            <td className="py-3 px-4">在租户型</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>

                  <TabsContent value="1" className="mt-4">
                    <div className="text-center py-8 text-muted-foreground">
                      1人间暂无可租房源
                    </div>
                  </TabsContent>

                  <TabsContent value="2-3" className="mt-4">
                    <div className="text-center py-8 text-muted-foreground">
                      2-3人间暂无可租房源
                    </div>
                  </TabsContent>

                  <TabsContent value="4-6" className="mt-4">
                    <div className="text-center py-8 text-muted-foreground">
                      4-6人间暂无可租房源
                    </div>
                  </TabsContent>

                  <TabsContent value="7-10" className="mt-4">
                    <div className="text-center py-8 text-muted-foreground">
                      7-10人间暂无可租房源
                    </div>
                  </TabsContent>

                  <TabsContent value="11-15" className="mt-4">
                    <div className="text-center py-8 text-muted-foreground">
                      11-15人间暂无可租房源
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* 周边楼盘推荐 */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">同区域楼盘</h2>
                <div className="space-y-4">
                  {[
                    { name: "远铁虹桥中心", price: "4.0 元/m²/天套", district: "闵行区 - 龙柏虹桥" },
                    { name: "云峰大厦", price: "3.8 元/m²/天套", district: "闵行区 - 龙柏虹桥" },
                    { name: "虹桥世界中心", price: "5.2 元/m²/天套", district: "闵行区 - 虹桥商务区" },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 p-4 border border-border rounded-lg hover:border-primary transition-colors cursor-pointer">
                      <img 
                        src={`https://images.unsplash.com/photo-${1486406146926 + index * 1000}-c627a92ad1ab?w=200&h=150&fit=crop`}
                        alt={item.name}
                        className="w-32 h-24 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{item.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{item.district}</p>
                        <p className="text-primary font-semibold">{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 联系卡片 */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">联系我们</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-secondary/30 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">租金</p>
                    <p className="text-2xl font-bold text-primary">{building.price}</p>
                  </div>
                  <Button className="w-full" size="lg">
                    <Phone className="w-4 h-4 mr-2" />
                    021-64202027
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    预约看房
                  </Button>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground text-center">
                      工作时间：周一至周日 9:00-18:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingDetail;