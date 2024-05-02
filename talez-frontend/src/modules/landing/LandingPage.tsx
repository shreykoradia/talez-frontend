import FooterSection from "./components/FooterSection";
import HeaderSection from "./components/HeaderSection";
import HeroSection from "./components/HeroSection";

const LandingPage = () => {
  return (
    <>
      <div className="talez_landing_container h-full">
        <HeaderSection />
        <div className="flex flex-col justify-between items-center h-[calc(100vh_-_100px)]">
          <HeroSection />
          <FooterSection />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
