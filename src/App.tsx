import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BuildingList from "./pages/BuildingList";
import BuildingDetail from "./pages/BuildingDetail";
import RentOffice from "./pages/RentOffice";
import OfficeBuildings from "./pages/OfficeBuildings";
import CreativePark from "./pages/CreativePark";
import Coworking from "./pages/Coworking";
import Headquarters from "./pages/Headquarters";
import NewsCenter from "./pages/NewsCenter";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/rent-office" element={<RentOffice />} />
          <Route path="/office-buildings" element={<OfficeBuildings />} />
          <Route path="/creative-park" element={<CreativePark />} />
          <Route path="/coworking" element={<Coworking />} />
          <Route path="/headquarters" element={<Headquarters />} />
          <Route path="/news" element={<NewsCenter />} />
          <Route path="/buildings" element={<BuildingList />} />
          <Route path="/building/:id" element={<BuildingDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
