import styles from "@/assets/css/sidebar.module.css";
import { AccountSwitcher } from "./AccountSwitcher";
import SidebarModuleContent from "./SidebarModuleContent";
import { Separator } from "@/shared/ui/ui/separator";

const Sidebar = () => {
  const account = [
    {
      label: "shrey koradia",
      email: "shreykoradia@yahoo.com",
    },
  ];
  return (
    <>
      <div className={styles.sidebar_parent_container}>
        <div className={"flex flex-col items-start gap-2"}>
          <AccountSwitcher isCollapsed={false} accounts={account} />
          <Separator />
          <SidebarModuleContent />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
