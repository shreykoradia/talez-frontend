import {
  BellIcon,
  CircleDotDashed,
  Megaphone,
  MessageSquareCode,
  Package,
  Settings,
  Workflow,
} from "lucide-react";
import styles from "@/assets/css/sidebar.module.css";
import { Link } from "react-router-dom";
import { Separator } from "@/shared/ui/ui/separator";

const SidebarModuleContent = () => {
  return (
    <>
      <div className="w-full">
        <Link to="/workflows" className={styles.sidebar_content_container}>
          <span>
            <Workflow />
          </span>
          Workflows
        </Link>
        <Link to="/updates" className={styles.sidebar_content_container}>
          <span>
            <BellIcon />
          </span>
          Updates
        </Link>
        <Link to="/settings" className={styles.sidebar_content_container}>
          <span>
            <Settings />
          </span>
          Settings
        </Link>
      </div>
      <Separator />
      <div className="w-full">
        <Link to={"/forums"} className={styles.sidebar_content_container}>
          <span>
            <MessageSquareCode />
          </span>
          Discussion
        </Link>
        <Link to={"/new-features"} className={styles.sidebar_content_container}>
          <span>
            <Package />
          </span>
          New Features
        </Link>
        <Link to={"/promotions"} className={styles.sidebar_content_container}>
          <span>
            <Megaphone />
          </span>
          Promotions
        </Link>
        <div className="recent_activity_container grid place-content-start w-full gap-4 p-4">
          <p className="font-medium">Recent Activities</p>
          <div className="flex items-center gap-2">
            <CircleDotDashed />
            <div>
              <p className="text-xs font-normal">shreykoradia/InsideAI</p>
              Added Login Talez
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CircleDotDashed />
            <div>
              <p className="text-xs font-normal">shreykoradia/InsideAI</p>
              Added Login Talez
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CircleDotDashed />
            <div>
              <p className="text-xs font-normal">shreykoradia/InsideAI</p>
              Added Login Talez
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CircleDotDashed />
            <div>
              <p className="text-xs font-normal">shreykoradia/InsideAI</p>
              Added Login Talez
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CircleDotDashed />
            <div>
              <p className="text-xs font-normal">shreykoradia/InsideAI</p>
              Added Login Talez
            </div>
          </div>
          <p className="text-xs">show more...</p>
        </div>
      </div>
    </>
  );
};

export default SidebarModuleContent;
