const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">关于我们</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">公司简介</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">联系我们</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">加入我们</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">商务合作</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">找房服务</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">写字楼出租</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">联合办公</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">创意园区</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">总部独栋</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">热门区域</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">陆家嘴</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">徐汇滨江</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">静安寺</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">虹桥</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">联系方式</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">服务热线：400-820-xxxx</li>
              <li className="text-sm text-muted-foreground">工作时间：9:00-18:00</li>
              <li className="text-sm text-muted-foreground">邮箱：info@chaobanwang.com</li>
              <li className="text-sm text-muted-foreground">地址：上海市徐汇区</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            © 2024 找办网 - 专业的上海写字楼租赁平台
          </p>
          <p className="text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">沪ICP备xxxxxxxx号</a>
            {" | "}
            <a href="#" className="hover:text-primary transition-colors">隐私政策</a>
            {" | "}
            <a href="#" className="hover:text-primary transition-colors">使用条款</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
