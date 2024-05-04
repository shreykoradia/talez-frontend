import FooterSection from "./components/FooterSection";
import HeaderSection from "./components/HeaderSection";
import HeroSection from "./components/HeroSection";

const LandingPage = () => {
  return (
    <>
      <div className="talez_landing_container h-full maxLg:fixed maxLg:top-0 maxLg:h-full maxLg:overflow-y-scroll no-scrollbar">
        <HeaderSection />
        <div className="flex flex-col justify-between items-center h-[calc(100vh_-_100px)] maxLg:gap-8">
          <HeroSection />
          <FooterSection />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
