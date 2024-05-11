import { cn } from "@/shared/lib/utils";
import { buttonVariants } from "@/shared/ui/ui/button";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
    isDisabled: boolean;
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = useLocation();

  return (
    <nav
      className={clsx(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            item?.isDisabled
              ? "select-none opacity-20 cursor-not-allowed"
              : pathname.pathname === item.href
              ? "bg-muted hover:bg-muted text-primary"
              : "hover:bg-transparent hover:underline hover:text-primary",
            "justify-start"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
