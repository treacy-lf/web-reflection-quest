import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FilterSection from "@/components/FilterSection";
import PopularDistricts from "@/components/PopularDistricts";
import FeaturedBuildings from "@/components/FeaturedBuildings";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FilterSection />
      <PopularDistricts />
      <FeaturedBuildings />
    </div>
  );
};

export default Index;
