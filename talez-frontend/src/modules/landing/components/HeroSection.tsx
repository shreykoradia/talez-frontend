import { Button } from "@/shared/ui/ui/button";
import { Wand } from "lucide-react";
import TalezIcon from "@/assets/icons/talez.svg?react";

const HeroSection = () => {
  return (
    <>
      <div className="grid gap-4 my-16 p-4 place-items-center">
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
      </div>
      <div className="grid place-content-center place-items-center w-full gap-8">
        <div className="grid place-items-center">
          <p className="text-xl text-primary text-center font-mono font-bold">
            Key Feature's
          </p>
          <p className="text-muted-foreground text-sm text-center w-1/2 font-mono break-words hover:text-secondary-foreground">
            Idea Collaboration: Talez provides a space for users to brainstorm,
            propose features, or discuss modules collaboratively. It goes beyond
            the limitations of traditional scrum meetings, enabling a dynamic
            exchange of insights.
          </p>
          <br />
          <p className="text-muted-foreground text-sm text-center w-1/2 font-mono break-words hover:text-secondary-foreground">
            Collective Feedback: Users can gather feedback from various
            stakeholders in real-time, creating a more inclusive decision-making
            process. Talez streamlines the feedback loop, making it efficient
            and accessible to all team members.
          </p>
        </div>
        <div className="grid place-items-center">
          <p className="text-xl text-primary text-center font-mono font-bold">
            Not an Alternative to Scrum Meetings, But...
          </p>
          <p className="text-muted-foreground text-sm text-center w-1/2 font-mono break-words hover:text-secondary-foreground">
            Talez is not positioned as an alternative to scrum meetings, which
            primarily serve to track task deadlines and sprint progress.
            Instead, Talez complements the scrum methodology by offering a
            dedicated platform for discussing blockers, exploring new ideas, and
            gaining different perspectives on project-related matters. For
            example, if you need to brainstorm a new feature or module, you can
            open a new tale on Talez and initiate a collaborative discussion. To
            learn more
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
