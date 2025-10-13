import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { mockNews } from "@/data/mockNews";

const NewsCenter = () => {
  const news = mockNews;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">资讯中心</h1>
        
        {/* 分类导航 */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {["全部", "楼盘百科", "找房攻略", "行业新闻", "装修攻略"].map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-colors whitespace-nowrap"
            >
              {category}
            </button>
          ))}
        </div>

        {/* 新闻列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                    {item.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                </div>
                <h3 className="font-semibold mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3">{item.summary}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsCenter;
