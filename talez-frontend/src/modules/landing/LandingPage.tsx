import HeaderSection from "./components/HeaderSection";
import HeroSection from "./components/HeroSection";

const LandingPage = () => {
  return (
    <>
      <div className="talez_landing_container">
        <div className="header_landing_container sticky top-0 w-full bg-white">
          <HeaderSection />
        </div>
        <div className="hero_landing_container h-full">
          <HeroSection />
        </div>
        <div className="footer_landing_container"></div>
      </div>
    </>
  );
};

export default LandingPage;
