import styles from "@/assets/css/sidebar.module.css";
import { AccountSwitcher } from "./AccountSwitcher";

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
        <div className={"flex items-center justify-center"}>
          <AccountSwitcher isCollapsed={false} accounts={account} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
