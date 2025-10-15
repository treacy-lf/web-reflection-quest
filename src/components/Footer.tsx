const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">关于超办</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">公司简介</a></li>
              <li><a href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">联系我们</a></li>
              <li><a href="/join" className="text-sm text-muted-foreground hover:text-primary transition-colors">加入我们</a></li>
              <li><a href="/cooperation" className="text-sm text-muted-foreground hover:text-primary transition-colors">商务合作</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">租赁服务</h3>
            <ul className="space-y-2">
              <li><a href="/office-buildings" className="text-sm text-muted-foreground hover:text-primary transition-colors">写字楼出租</a></li>
              <li><a href="/coworking" className="text-sm text-muted-foreground hover:text-primary transition-colors">联合办公</a></li>
              <li><a href="/creative-park" className="text-sm text-muted-foreground hover:text-primary transition-colors">创意园区</a></li>
              <li><a href="/headquarters" className="text-sm text-muted-foreground hover:text-primary transition-colors">总部独栋</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">热门商圈</h3>
            <ul className="space-y-2">
              <li><a href="/buildings?district=陆家嘴" className="text-sm text-muted-foreground hover:text-primary transition-colors">陆家嘴</a></li>
              <li><a href="/buildings?district=虹桥商务区" className="text-sm text-muted-foreground hover:text-primary transition-colors">虹桥商务区</a></li>
              <li><a href="/buildings?district=人民广场" className="text-sm text-muted-foreground hover:text-primary transition-colors">人民广场</a></li>
              <li><a href="/buildings?district=徐泾/西虹桥" className="text-sm text-muted-foreground hover:text-primary transition-colors">徐泾西虹桥</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">联系我们</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">咨询热线：021-64202027</li>
              <li className="text-sm text-muted-foreground">服务时间：9:00-18:00 (工作日)</li>
              <li className="text-sm text-muted-foreground">微信咨询：扫码关注公众号</li>
              <li className="text-sm text-muted-foreground">地址：上海市徐汇区虹桥路355号</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            © 2024 上海超办网 - 上海写字楼_上海办公室出租_创意园区_总部独栋_联合办公租赁平台
          </p>
          <p className="text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">沪ICP备15006841号-1</a>
            {" | "}
            <a href="#" className="hover:text-primary transition-colors">隐私政策</a>
            {" | "}
            <a href="#" className="hover:text-primary transition-colors">服务条款</a>
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            本站关键词：上海写字楼出租 上海办公室租赁 上海创意园区 上海联合办公 上海总部独栋
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
