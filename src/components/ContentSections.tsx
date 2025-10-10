import { Card, CardContent } from "@/components/ui/card";
import { Building2, FileText, Newspaper, Paintbrush } from "lucide-react";

const ContentSections = () => {
  const sections = [
    {
      icon: Building2,
      title: "楼盘百科",
      items: [
        "上海写字楼市场分析",
        "商业地产投资指南",
        "办公楼租赁指南",
        "楼盘估值方法",
        "商业地产法律知识"
      ]
    },
    {
      icon: FileText,
      title: "找房攻略",
      items: [
        "如何选择合适的办公地点",
        "写字楼租赁流程详解",
        "办公面积计算方法",
        "租金谈判技巧",
        "签约注意事项"
      ]
    },
    {
      icon: Newspaper,
      title: "行业新闻",
      items: [
        "上海商务区最新规划",
        "写字楼市场趋势分析",
        "知名企业入驻动态",
        "政策法规更新",
        "行业发展报告"
      ]
    },
    {
      icon: Paintbrush,
      title: "装修攻略",
      items: [
        "办公室装修风格指南",
        "装修预算规划",
        "环保办公室设计",
        "智能化办公改造",
        "装修验收标准"
      ]
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <Card key={section.title} className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li key={item}>
                        <a 
                          href="#" 
                          className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                        >
                          · {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContentSections;
