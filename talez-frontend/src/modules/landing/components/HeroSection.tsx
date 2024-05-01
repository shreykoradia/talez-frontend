import { Button } from "@/shared/ui/ui/button";
import { Video, Wand } from "lucide-react";
import TalezIcon from "@/assets/icons/talez.svg?react";
import ArrowIcon from "@/assets/icons/Arrow.svg?react";
import TalezHero from "@/assets/icons/talez-hero.svg?react";

const HeroSection = () => {
  return (
    <>
      <div className="flex justify-between items-center gap-4 h-full w-full relative">
        <div className="w-1/2 px-2">
          <p className="mx-2 text-lg text-muted-foreground font-mono font-bold flex gap-4 items-center">
            Introducing
            <span>
              <TalezIcon height={50} width={50} />
            </span>
          </p>
          <p className="text-7xl text-primary font-bold font-mono">
            Brainstorm Product's by writing Talez.
          </p>
          <p className="text-2xl text-muted-foreground font-mono">
            Let's make scrum more meaningful by adding feedback's to talez and
            scale product's faster than ever.
          </p>
          <div className="flex gap-4 my-8 relative">
            <Button variant={"default"} className="p-8 text-lg">
              Get Started
              <Wand size={20} className="ml-4" />
            </Button>
            <Button variant={"outline"} className="p-8 text-lg">
              <span>
                <Video size={20} className="mr-4 mt-1" />
              </span>
              Request a Demo!
            </Button>
            <div className="absolute top-[70%] right-[15%]">
              <ArrowIcon />
              <p className="w-2/3 text-center font-semibold">
                Watch Product demo here soon!
              </p>
            </div>
          </div>
        </div>
        <TalezHero />
      </div>
      {/* <div className="grid gap-4 my-16 p-4 place-items-center">
        <TalezIcon />
        <p className="text-muted-foreground text-md text-center w-1/2 font-mono break-words hover:text-secondary-foreground">
          Talez is a SaaS platform designed for users and stakeholders to share
          ideas, gather collective feedback, and engage in thorough discussions
          to reach conclusive decisions. Unlike traditional scrum meetings,
          Talez fosters collaboration without the time constraints of formal
          meetings, allowing for in-depth conversations to unfold organically.
        </p>
        <Button variant={"default"} className="p-8 text-lg rounded-full">
          Get Started!
          <Wand size={20} className="ml-4" />
        </Button>
      </div> */}
    </>
  );
};

export default HeroSection;
