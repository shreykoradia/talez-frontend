import { Video, Wand } from "lucide-react";
import TalezIcon from "@/assets/icons/talez.svg?react";
import TalezHero from "@/assets/icons/talez-hero.svg?react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div className="flex justify-between items-center mt-16 gap-4 w-full max-lg:flex-col max-lg:mt-4 max-lg:justify-center max-lg:h-full">
        <div className="w-1/2 px-2 max-lg:w-full max-lg:px-4">
          <p className="mx-2 text-lg text-muted-foreground font-mono font-bold flex gap-4 items-center max-lg:justify-center max-lg:text-md">
            Introducing
            <span>
              <TalezIcon height={50} width={50} />
            </span>
          </p>
          <p className="text-7xl text-primary font-bold font-mono max-lg:text-4xl max-lg:text-center">
            Brainstorm Product's by writing Talez.
          </p>
          <p className="text-2xl text-muted-foreground font-mono max-lg:text-center max-lg:mt-4 max-lg:text-xl max-lg:text-wrap">
            Let's make scrum more meaningful by adding feedback's to talez and
            scale product's faster than ever.
          </p>
          <div className="flex gap-4 my-8 max-lg:justify-evenly max-lg:gap-0">
            <Link
              to="/signup"
              className="px-4 py-4 text-lg rounded-md flex items-center gap-1 bg-primary font-mono text-primary-foreground hover:bg-primary/90 max-lg:px-2 max-lg:py-2"
            >
              Get Started
              <Wand size={20} className="ml-2" />
            </Link>
            <Link
              to="#"
              onClick={(e) => {
                window.location.href = "mailto:hello.insideai@gmail.com";
                e.preventDefault();
              }}
              className="px-4 py-4 flex items-center gap-1 rounded-lg text-muted-foreground font-mono text-lg border border-input bg-background hover:bg-accent hover:text-primary max-lg:px-2 max-lg:py-2"
            >
              <span>
                <Video size={20} className="mr-2 mt-1" />
              </span>
              Request a Demo!
            </Link>
          </div>
        </div>
        <div className="max-lg:hidden">
          <TalezHero />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
