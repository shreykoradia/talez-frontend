import styles from "@/assets/css/header.module.css";
import { Avatar, AvatarImage } from "@/shared/ui/ui/avatar";
import { Link } from "react-router-dom";
import TalezAvatar from "@/assets/icons/talez.jpg";
import { Button } from "@/shared/ui/ui/button";
import { GanttChart, X } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

const HeaderV2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className={styles.header_container}>
        <div className={styles.application_data_container}>
          <Link to={"/dashboard"}>
            <Avatar>
              <AvatarImage src={TalezAvatar} className="rounded-full" />
            </Avatar>
          </Link>
          <div className={styles.application_breadcrumbs}>
            <p className="font-spaceGroteskBold">Talez</p>
          </div>
        </div>
        <div className={styles.application_user_container}>
          <Link to={"/help"} className="font-spaceGroteskBold">
            Help
          </Link>
          <Button variant={"outline"}>Share</Button>
          <Avatar>
            <AvatarImage src={TalezAvatar} className="rounded-full" />
          </Avatar>
        </div>
        <div
          className={styles.application_user_mobile_container}
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(!menuOpen);
          }}
        >
          {menuOpen ? (
            <X size={30} className="hover:text-accent" />
          ) : (
            <GanttChart size={30} className="hover:text-accent" />
          )}
        </div>
      </header>
      <nav
        className={clsx(styles.nav_sidebar_container, {
          "-translate-x-0": menuOpen,
        })}
      >
        <ul className="grid gap-4 place-content-center items-center py-8">
          {["Dashboard", "Help", "Account", "Logout"].flatMap((navLink) => (
            <li className="text-4xl font-spaceGroteskBold text-divamecha hover:text-accent">
              {navLink}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default HeaderV2;
