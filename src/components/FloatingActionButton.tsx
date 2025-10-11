import { Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const FloatingActionButton = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "咨询已提交",
      description: "我们的专业顾问会尽快与您联系！",
    });
    setName("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
      <a
        href="tel:021-64202027"
        className="bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-8 flex flex-col items-center justify-center gap-2 rounded-l-lg shadow-lg transition-all hover:shadow-xl group"
      >
        <Phone className="w-5 h-5" />
        <span className="text-sm font-medium writing-mode-vertical">电话咨询</span>
      </a>

      <Dialog>
        <DialogTrigger asChild>
          <button className="bg-accent text-accent-foreground hover:bg-accent/90 px-3 py-8 flex flex-col items-center justify-center gap-2 rounded-l-lg shadow-lg transition-all hover:shadow-xl group">
            <MessageSquare className="w-5 h-5" />
            <span className="text-sm font-medium writing-mode-vertical">在线咨询</span>
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>在线咨询</DialogTitle>
            <DialogDescription>
              请留下您的联系方式，我们的专业顾问会尽快与您联系
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="name">姓名</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="请输入您的姓名"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">联系电话</Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="请输入您的联系电话"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">咨询内容</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="请输入您的咨询内容（选填）"
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full">
              提交咨询
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FloatingActionButton;
