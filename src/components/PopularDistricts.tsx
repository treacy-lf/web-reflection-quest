import { Card } from "@/components/ui/card";

const PopularDistricts = () => {
  const districts = [
    { name: "虹桥商务区", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop" },
    { name: "徐泾/西虹桥", image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=400&h=300&fit=crop" },
    { name: "虹桥临空经济区", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=300&fit=crop" },
    { name: "虹桥古北开发区", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop" },
    { name: "人民广场", image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=300&fit=crop" },
    { name: "长风商务区", image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=400&h=300&fit=crop" },
    { name: "莘庄商务区", image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=400&h=300&fit=crop" },
    { name: "陆家嘴", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground mb-8">上海热门商圈</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {districts.map((district) => (
            <Card 
              key={district.name}
              className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg border-border"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={district.image}
                  alt={district.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-foreground">
                  {district.name}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDistricts;
