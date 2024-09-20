import styles from "@/assets/css/sidebar.module.css";
import SidebarModuleContent from "./SidebarModuleContent";
import { Separator } from "@/shared/ui/ui/separator";
import { useUser } from "@/shared/context/UserProvider";
import { generateAvatarInitials } from "@/shared/helpers/helpers";
import { Avatar, AvatarFallback } from "@/shared/ui/ui/avatar";

const Sidebar = () => {
  const { user } = useUser();
  const account = [
    {
      label: user?.username,
      email: user?.email,
    },
  ];
  return (
    <>
      <div className={styles.sidebar_parent_container}>
        <div className={"flex flex-col items-start gap-2"}>
          <div className="flex items-center gap-2 p-2">
            <Avatar>
              <AvatarFallback>
                {generateAvatarInitials(account[0]?.email)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="!mr-[100%] text-sm font-medium">
                {account[0]?.label}
              </p>
              <p className="text-xs">{account[0]?.email}</p>
            </div>
          </div>
          <Separator />
          <SidebarModuleContent />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
