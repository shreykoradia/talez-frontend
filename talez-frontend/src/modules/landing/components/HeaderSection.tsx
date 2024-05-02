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
          </div>
        </div>
        <div className="flex justify-end items-center w-1/2 gap-4">
          <Link
            to={"/signin"}
            className="py-2 px-4 rounded-md flex items-center gap-1 hover:bg-accent hover:text-accent-foreground"
          >
            <CornerDownRight height={15} />
            Log in
          </Link>
          <Link
            to={"/signup"}
            className="py-2 px-4 rounded-md flex items-center gap-1 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            See Talez
            <Wand height={15} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
