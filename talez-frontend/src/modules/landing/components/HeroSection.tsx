import { Video, Wand } from "lucide-react";
import TalezIcon from "@/assets/icons/talez.svg?react";
import TalezHero from "@/assets/icons/talez-hero.svg?react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div className="flex justify-between items-center mt-16 gap-4 w-full max-lg:flex-col max-lg:mt-4">
        <div className="w-1/2 px-2 max-lg:w-full max-lg:px-4">
          <p className="mx-2 text-lg text-muted-foreground font-mono font-bold flex gap-4 items-center max-lg:mx-0 max-lg:text-md">
            Introducing
            <span>
              <TalezIcon height={50} width={50} />
            </span>
          </p>
          <p className="text-7xl text-primary font-bold font-mono max-lg:text-4xl">
            Brainstorm Product's by writing Talez.
          </p>
          <p className="text-2xl text-muted-foreground font-mono max-lg:text-xl max-lg:text-wrap">
            Let's make scrum more meaningful by adding feedback's to talez and
            scale product's faster than ever.
          </p>
          <div className="flex gap-4 my-8">
            <Link
              to="/signup"
              className="px-4 py-4 text-lg rounded-md flex items-center gap-1 bg-primary text-primary-foreground hover:bg-primary/90 max-lg:px-2 max-lg:py-2"
            >
              Get Started
              <Wand size={20} className="ml-4" />
            </Link>
            <Link
              to="#"
              onClick={(e) => {
                window.location.href = "mailto:hello.insideai@gmail.com";
                e.preventDefault();
              }}
              className="px-4 py-4 flex items-center gap-1 rounded-lg text-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground max-lg:px-2 max-lg:py-2"
            >
              <span>
                <Video size={20} className="mr-4 mt-1" />
              </span>
              Request a Demo!
            </Link>
          </div>
        </div>
        <div className="max-lg:hidden">
          <TalezHero />
        </div>
        <div className="hidden max-lg:block max-lg:w-full max-lg:px-4">
          <p className="text-xl font-bold font-mono mb-2">
            <em>Welcome to Talez!</em>
          </p>
          <p className="text-lg font-mono text-muted-foreground mb-2">
            Talez is a SaaS platform designed for users and stakeholders to
            share ideas, gather collective feedback, and engage in thorough
            discussions to reach conclusive decisions. Unlike traditional scrum
            meetings, Talez fosters collaboration without the time constraints
            of formal meetings, allowing for in-depth conversations to unfold
            organically.
          </p>
          <p className="text-xl font-bold font-mono mb-2">
            <em>Not an Alternative to Scrum Meetings, But...</em>
          </p>
          <p className="text-lg font-mono text-muted-foreground mb-2">
            Talez is not positioned as an alternative to scrum meetings, which
            primarily serve to track task deadlines and sprint progress.
            Instead, Talez complements the scrum methodology by offering a
            dedicated platform for discussing blockers, exploring new ideas, and
            gaining different perspectives on project-related matters. For
            example, if you need to brainstorm a new feature or module, you can
            open a new idea on Talez and initiate a collaborative discussion. To
            learn more, star the repository and you can see a demo soon!
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
