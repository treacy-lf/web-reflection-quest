import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import SearchBox from "@/components/SearchBox";
import FilterSection from "@/components/FilterSection";
import PopularDistricts from "@/components/PopularDistricts";
import FeaturedBuildings from "@/components/FeaturedBuildings";
import FeaturedCoworking from "@/components/FeaturedCoworking";
import FeaturedCreativePark from "@/components/FeaturedCreativePark";
import FeaturedHeadquarters from "@/components/FeaturedHeadquarters";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ background: 'url(/img/bg-rep-03.png)' }}>
      <Header />
      <div className="relative">
        <HeroSlider />
        <SearchBox />
      </div>
      <FilterSection />
      <PopularDistricts />
      <FeaturedBuildings />
      <FeaturedCoworking />
      <FeaturedCreativePark />
      <FeaturedHeadquarters />
      <Footer />
      <FloatingActionButton />
    </div>
  );
};

export default Index;
