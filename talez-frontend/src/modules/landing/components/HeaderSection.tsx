import { Button } from "@/shared/ui/ui/button";
import { Link } from "react-router-dom";
import TalezIcon from "@/assets/icons/talez.svg?react";
import { CornerDownRight, Wand } from "lucide-react";

const HeaderSection = () => {
  return (
    <>
      <div className="flex justify-between items-center w-full p-4 font-mono border-b border-muted hover:border-pattensBlue">
        <div className="w-1/5">
          <TalezIcon height={20} width={100} />
        </div>
        <div className="flex justify-between w-3/5 items-center">
          <div className="flex w-full justify-start items-center gap-16">
            <Link to={"/"}>Platform</Link>
            <Link to={"/team"}>Team</Link>
            <Link to={"/team"}>Socials</Link>
            <Link to={"/team"}>Blogs</Link>
          </div>
        </div>
        <div className="flex justify-end items-center w-1/2 gap-4">
          <Button variant={"ghost"}>
            <CornerDownRight height={15} />
            Log in
          </Button>
          <Button variant={"default"}>
            See Talez
            <Wand height={15} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
