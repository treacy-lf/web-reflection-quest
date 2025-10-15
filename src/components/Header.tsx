import { Building2, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/images/logo.png" 
              alt="上海超办信息服务有限公司" 
              className="h-12"
            />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={isActive("/") ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary transition-colors"}>首页</Link>
            <Link to="/rent-office" className={isActive("/rent-office") ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary transition-colors"}>租办公室</Link>
            <Link to="/office-buildings" className={isActive("/office-buildings") ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary transition-colors"}>写字楼</Link>
            <Link to="/creative-park" className={isActive("/creative-park") ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary transition-colors"}>创意园区</Link>
            <Link to="/coworking" className={isActive("/coworking") ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary transition-colors"}>共享办公</Link>
            <Link to="/headquarters" className={isActive("/headquarters") ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary transition-colors"}>总部独栋</Link>
            <Link to="/news" className={isActive("/news") ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary transition-colors"}>资讯中心</Link>
          </nav>
          
          <a href="tel:021-64202027" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <Phone className="h-4 w-4" />
            <span className="font-semibold">021-64202027</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
