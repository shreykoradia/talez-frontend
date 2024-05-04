import { Link, useLocation } from "react-router-dom";
import TalezIcon from "@/assets/icons/talez.svg?react";
import { AlignRight, CornerDownRight, Wand, XIcon } from "lucide-react";
import { SetStateAction, useEffect, useState } from "react";
import clsx from "clsx";

const MobileNavigationMenu = ({
  isMenuOpen,
  location,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<SetStateAction<boolean>>;
  location: string;
}) => {
  return (
    <>
      <div
        className={clsx(
          "max-lg:fixed w-full h-full top-0 left-0 bg-black opacity-90 text-white transition-transform",
          {
            hidden: !isMenuOpen,
          }
        )}
      >
        <div className="flex justify-center items-center flex-col py-8 gap-4 h-full">
          <Link
            to="/"
            className={clsx({
              "text-primary underline-offset-4 underline cursor-default select-none":
                location === "/",
            })}
          >
            Platform
          </Link>
          <Link
            to={"/signin"}
            className="py-2 px-4 rounded-md flex items-center gap-1 font-mono hover:bg-accent hover:text-primary"
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

const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1023) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="flex justify-between items-center w-full p-4 font-mono border-b border-muted hover:border-pattensBlue max-lg:relative">
        <div className="w-1/5">
          <TalezIcon height={20} width={100} />
        </div>
        <div className="flex justify-between w-3/5 items-center max-lg:hidden">
          <div className="flex w-full justify-start items-center gap-16">
            <Link
              to={"/"}
              className={clsx({
                "text-primary underline-offset-4 underline cursor-default select-none":
                  location.pathname === "/",
              })}
            >
              Platform
            </Link>
          </div>
        </div>
        <div className="flex justify-end items-center w-1/2 gap-4 max-lg:hidden">
          <Link
            to={"/signin"}
            className="py-2 px-4 rounded-md flex items-center font-mono text-muted-foreground gap-1 hover:bg-accent hover:text-primary"
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
        <div
          className={clsx("hidden max-lg:block", { "z-10": isMenuOpen })}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {!isMenuOpen ? (
            <AlignRight size={30} />
          ) : (
            <XIcon height={30} stroke="#FFFF" />
          )}
        </div>
        <MobileNavigationMenu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          location={location.pathname}
        />
      </div>
    </>
  );
};

export default HeaderSection;
