import styles from "@/assets/css/header.module.css";
import { Avatar, AvatarImage } from "@/shared/ui/ui/avatar";
import { Link } from "react-router-dom";
import TalezAvatar from "@/assets/icons/talez.jpg";
import { Button } from "@/shared/ui/ui/button";

const HeaderV2 = () => {
  return (
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
        <Link to={"/help"}>Help</Link>
        <Button variant={"outline"}>Share</Button>
        <Avatar>
          <AvatarImage src={TalezAvatar} className="rounded-full" />
        </Avatar>
      </div>
    </header>
  );
};

export default HeaderV2;
