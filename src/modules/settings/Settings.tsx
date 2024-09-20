import styles from "@/assets/css/settings.module.css";
import { SidebarNav } from "./components/SidebarNav";
import { Separator } from "@/shared/ui/ui/separator";
import { Route, Routes } from "react-router-dom";
import Profile from "./profile";
import { Button } from "@/shared/ui/ui/button";
import { logOut } from "@/shared/helpers/helpers";
import { LogOut } from "lucide-react";

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/settings",
    isDisabled: false,
  },
  {
    title: "Account",
    href: "/settings/account",
    isDisabled: true,
  },
  {
    title: "Appearance",
    href: "/settings/appearance",
    isDisabled: true,
  },
  {
    title: "Notifications",
    href: "/settings/notifications",
    isDisabled: true,
  },
  {
    title: "Display",
    href: "/settings/display",
    isDisabled: true,
  },
];

const Settings = () => {
  return (
    <>
      <div className={styles.settings_parent_container}>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-medium text-primary">Settings</h2>
            <p className="text-muted-foreground text-md">
              Manage your account settings and set e-mail preferences.
            </p>
          </div>
          <Button
            variant={"destructive"}
            type="button"
            onClick={() => {
              logOut();
              window.location.reload();
            }}
          >
            <LogOut size={15} className="mr-2" />
            Logout
          </Button>
        </div>
        <Separator className="my-6" />
        <div className="flex gap-4 w-full h-full">
          <div className="flex flex-col space-y-8 lg:flex-row w-1/5">
            <aside className="w-full">
              <SidebarNav items={sidebarNavItems} />
            </aside>
          </div>
          <div className="setting_routes_container w-4/5">
            <Routes>
              <Route path="/" index element={<Profile />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
