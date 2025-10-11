import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const NewsCenter = () => {
  const news = [
    {
      id: 1,
      title: "2024年上海甲级写字楼市场分析报告",
      category: "行业新闻",
      date: "2024-03-15",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60",
      summary: "2024年第一季度，上海甲级写字楼市场保持稳定增长态势，租金水平持续上涨..."
    },
    {
      id: 2,
      title: "如何选择适合的办公空间？租赁攻略全解析",
      category: "找房攻略",
      date: "2024-03-12",
      image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&auto=format&fit=crop&q=60",
      summary: "选择合适的办公空间需要考虑多方面因素，包括地理位置、交通便利性、租金预算..."
    },
    {
      id: 3,
      title: "办公室装修的五大注意事项",
      category: "装修攻略",
      date: "2024-03-10",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&auto=format&fit=crop&q=60",
      summary: "办公室装修不仅要考虑美观性，更要注重实用性和员工的工作体验..."
    },
    {
      id: 4,
      title: "浦东新区办公楼市场投资价值分析",
      category: "楼盘百科",
      date: "2024-03-08",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=60",
      summary: "浦东作为上海的金融中心，其办公楼市场一直备受投资者关注..."
    },
    {
      id: 5,
      title: "共享办公空间的兴起与发展趋势",
      category: "行业新闻",
      date: "2024-03-05",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop&q=60",
      summary: "随着灵活办公理念的普及，共享办公空间在上海迅速发展..."
    },
    {
      id: 6,
      title: "办公室租赁合同签订要点详解",
      category: "找房攻略",
      date: "2024-03-02",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60",
      summary: "签订办公室租赁合同时，需要特别注意租期、租金、押金等关键条款..."
    }
  ];

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
