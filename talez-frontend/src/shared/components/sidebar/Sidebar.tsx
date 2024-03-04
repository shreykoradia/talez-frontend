import styles from "@/assets/css/sidebar.module.css";
import { AccountSwitcher } from "./AccountSwitcher";
import { cn } from "@/shared/lib/utils";

const Sidebar = () => {
  const account = [
    {
      label: "shrey koradia",
      email: "shreykoradia@yahoo.com",
      icon: null,
    },
  ];
  return (
    <>
      <div className={styles.sidebar_parent_container}>
        <div className={cn("flex h-[52px] items-center justify-center mx-2")}>
          <AccountSwitcher isCollapsed={false} accounts={account} />
        </div>
        <div className={styles.sidebar_workflow_container}>
          {/* Todo for the icons */}
          <a href="/workflow">search</a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
