import FooterSection from "./components/FooterSection";
import HeaderSection from "./components/HeaderSection";
import HeroSection from "./components/HeroSection";

const LandingPage = () => {
  return (
    <>
      <div className="talez_landing_container h-full max-lg:fixed max-lg:top-0 max-lg:h-full max-lg:overflow-y-scroll no-scrollbar">
        <HeaderSection />
        <div className="flex flex-col justify-between items-center h-[calc(100vh_-_100px)] max-lg:gap-8">
          <HeroSection />
          <FooterSection />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
