import { Building2, Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Building2 className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">上海超办</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">首页</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">租办公室</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">写字楼</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">创意园区</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">共享办公</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">总部独栋</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">资讯中心</a>
          </nav>
          
          <div className="flex items-center gap-2 text-primary">
            <Phone className="h-4 w-4" />
            <span className="font-semibold">021-64202027</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
