import {
  Handshake,
  Megaphone,
  Package,
  Rss,
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
            <Rss />
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
            <Handshake />
          </span>
          Forums
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
      </div>
    </>
  );
};

export default SidebarModuleContent;
