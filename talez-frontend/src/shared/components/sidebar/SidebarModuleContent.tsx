import { CircleDotDashed, Settings, Workflow } from "lucide-react";
import styles from "@/assets/css/sidebar.module.css";
import { Link } from "react-router-dom";
import { Separator } from "@/shared/ui/ui/separator";

const SidebarModuleContent = () => {
  return (
    <>
      <div className="w-full">
        <Link to="/workflows" className={styles.sidebar_content_container}>
          <span>
            <Workflow strokeWidth={1.5} />
          </span>
          Workflows
        </Link>

        <Link to="/settings" className={styles.sidebar_content_container}>
          <span>
            <Settings strokeWidth={1.5} />
          </span>
          Settings
        </Link>
      </div>
      <Separator />
      <div className="w-full">
        <div className={styles.recent_activity_container}>
          <p className="font-medium">Recent Activities</p>
          <div className="flex items-center gap-2 w-full hover:!text-primary hover:!font-medium hover:bg-primary-foreground py-2">
            <CircleDotDashed strokeWidth={1.5} />
            <div>
              <p className="text-xs">team/talez</p>
              Added Talez MVP
            </div>
          </div>
          <div className="flex items-center gap-2 w-full hover:!text-primary hover:!font-medium hover:bg-primary-foreground py-2">
            <CircleDotDashed strokeWidth={1.5} />
            <div>
              <p className="text-xs">team/talez</p>
              Working on Interactions!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarModuleContent;
