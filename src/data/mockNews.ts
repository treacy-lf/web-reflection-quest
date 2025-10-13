// Mock news data based on https://www.chaobanwang.com

export interface NewsItem {
  id: number;
  title: string;
  category: string;
  date: string;
  summary: string;
  image?: string;
  content?: string;
}

export const mockNews: NewsItem[] = [
  {
    id: 1,
    title: "2024年上海甲级写字楼市场分析报告",
    category: "行业新闻",
    date: "2024-03-15",
    summary: "2024年第一季度，上海甲级写字楼市场需求稳步增长，空置率持续下降...",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    content: "根据最新市场数据显示，2024年第一季度上海甲级写字楼市场表现强劲。核心商圈如陆家嘴、静安寺等区域的甲级写字楼空置率降至8%以下，租金水平稳中有升。"
  },
  {
    id: 2,
    title: "虹桥商务区新增3座高端写字楼项目",
    category: "项目动态",
    date: "2024-03-10",
    summary: "虹桥商务区迎来新一轮开发热潮，三座总面积超50万平米的写字楼即将竣工...",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
    content: "虹桥商务区作为上海重要的商务中心，持续吸引优质项目入驻。本次新增的三座写字楼均为国际一流标准建设。"
  },
  {
    id: 3,
    title: "共享办公空间成为年轻创业者首选",
    category: "市场趋势",
    date: "2024-03-05",
    summary: "调查显示，超过60%的初创企业选择共享办公空间作为办公场所...",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
    content: "灵活的租赁方式、完善的配套设施以及良好的社区氛围，使得共享办公成为创业公司的理想选择。"
  },
  {
    id: 4,
    title: "浦东新区写字楼租金连续三个月上涨",
    category: "行业新闻",
    date: "2024-02-28",
    summary: "受金融科技企业扩张影响，浦东核心区域写字楼租金涨幅明显...",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "创意园区改造项目获政府支持",
    category: "政策解读",
    date: "2024-02-20",
    summary: "上海市政府出台新政策，鼓励老旧厂房改造为创意办公空间...",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "张江科技园区吸引国际企业总部入驻",
    category: "项目动态",
    date: "2024-02-15",
    summary: "多家世界500强企业选择在张江设立中国区总部或研发中心...",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
  },
  {
    id: 7,
    title: "绿色建筑成为写字楼市场新标准",
    category: "市场趋势",
    date: "2024-02-10",
    summary: "LEED认证、绿色建筑标识成为高端写字楼的必备条件...",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
  },
  {
    id: 8,
    title: "临港新片区发布办公用地优惠政策",
    category: "政策解读",
    date: "2024-02-05",
    summary: "为吸引企业入驻，临港新片区推出多项土地和税收优惠措施...",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
  },
];