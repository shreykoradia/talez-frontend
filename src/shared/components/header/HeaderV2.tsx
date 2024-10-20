import styles from "@/assets/css/header.module.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/ui/avatar";
import { Link, useNavigate } from "react-router-dom";
import TalezAvatar from "@/assets/icons/talez.jpg";
import { GanttChart, X } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import { useUser } from "@/shared/context/UserProvider";
import { generateAvatarInitials, logOut } from "@/shared/helpers/helpers";
import { UserNav } from "./UserNav";

const HeaderV2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate();

  const navLinkLabel = (navlink: string) => {
    const link: { [key: string]: string } = {
      dashboard: "Dashboard",
      logout: "Logout",
    };
    return link[navlink];
  };

  return (
    <>
      <header className={styles.header_container}>
        <div className={styles.application_data_container}>
          <Link to={"/dashboard"}>
            <Avatar>
              <AvatarImage src={TalezAvatar} className="rounded-full" />
              <AvatarFallback>
                {generateAvatarInitials(user?.username)}
              </AvatarFallback>
            </Avatar>
          </Link>
          <div className={styles.application_breadcrumbs}>
            <p className="font-spaceGroteskBold">Talez</p>
          </div>
        </div>
        <div className={styles.application_user_container}>
          {/* <Link to={"/help"} className="font-spaceGroteskBold">
            Help
          </Link> */}
          <UserNav />
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
          {["logout"].flatMap((navLink, key) => (
            <button
              key={key}
              className="text-4xl font-spaceGroteskBold text-divamecha hover:text-accent"
              onClick={() => {
                if (navLink === "logout") {
                  logOut();
                  window.location.reload();
                } else {
                  navigate(`/${navLink}`);
                }
              }}
            >
              {navLinkLabel(navLink)}
            </button>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default HeaderV2;
