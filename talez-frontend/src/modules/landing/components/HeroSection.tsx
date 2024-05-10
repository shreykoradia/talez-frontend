import { Video, Wand } from "lucide-react";
import TalezIcon from "@/assets/icons/talez.svg?react";
import TalezHero from "@/assets/icons/talez-hero.svg?react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div className="flex justify-between items-center mt-16 gap-4 w-full maxLg:flex-col maxLg:mt-4 maxLg:justify-center maxLg:h-full">
        <div className="w-1/2 px-2 maxLg:w-full maxLg:px-4">
          <p className="mx-2 text-lg text-muted-foreground font-mono font-bold flex gap-4 items-center maxLg:justify-center maxLg:text-md">
            Introducing
            <span>
              <TalezIcon height={50} width={50} />
            </span>
          </p>
          <p className="text-7xl text-primary font-bold font-mono maxLg:text-4xl maxLg:text-center">
            Brainstorm Product's by writing Talez.
          </p>
          <p className="text-2xl text-muted-foreground font-mono maxLg:text-center maxLg:mt-4 maxLg:text-xl maxLg:text-wrap">
            Let's make scrum more meaningful by adding feedback's to talez and
            scale product's faster than ever.
          </p>
          <div className="flex gap-4 my-8 maxLg:justify-evenly maxLg:gap-0">
            <Link
              to="/signup"
              className="px-4 py-4 text-lg rounded-md flex items-center gap-1 bg-primary font-mono text-primary-foreground hover:bg-primary/90 maxLg:px-2 maxLg:py-2"
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
              className="px-4 py-4 flex items-center gap-1 rounded-lg text-muted-foreground font-mono text-lg border border-input bg-background hover:bg-accent hover:text-primary maxLg:px-2 maxLg:py-2"
            >
              <span>
                <Video size={20} className="mr-2 mt-1" />
              </span>
              Request a Demo!
            </Link>
          </div>
        </div>
        <div className="maxLg:hidden">
          <TalezHero />
        </div>
      </div>
      <div className="">
        <p className="text-center text-4xl text-primary font-mono font-semibold">
          Is that All?
        </p>
        <p className="font-mono text-muted-foreground">
          Not yet this is the part where you can brainstorm products, there is a
          lot more to be added in the upcoming iterations.
        </p>
      </div>
    </>
  );
};

export default HeroSection;
