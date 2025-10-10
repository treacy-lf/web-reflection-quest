import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FilterSection from "@/components/FilterSection";
import PopularDistricts from "@/components/PopularDistricts";
import FeaturedBuildings from "@/components/FeaturedBuildings";
import FeaturedCoworking from "@/components/FeaturedCoworking";
import FeaturedCreativePark from "@/components/FeaturedCreativePark";
import FeaturedHeadquarters from "@/components/FeaturedHeadquarters";
import ContentSections from "@/components/ContentSections";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FilterSection />
      <PopularDistricts />
      <FeaturedBuildings />
      <FeaturedCoworking />
      <FeaturedCreativePark />
      <FeaturedHeadquarters />
      <ContentSections />
      <Footer />
    </div>
  );
};

export default Index;
