import { generateAvatarInitials } from "@/shared/helpers/helpers";
import { cn } from "@/shared/lib/utils";
import { Avatar, AvatarFallback } from "@/shared/ui/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/ui/select";
import { ListCollapse } from "lucide-react";
import * as React from "react";

interface AccountSwitcherProps {
  isCollapsed: boolean;
  accounts: {
    label: string;
    email: string;
  }[];
}

export function AccountSwitcher({
  isCollapsed,
  accounts,
}: AccountSwitcherProps) {
  const [selectedAccount, setSelectedAccount] = React.useState<string>(
    accounts[0].email
  );

  return (
    <>
      <div className="flex justify-between items-center w-full pt-2">
        <Select
          defaultValue={selectedAccount}
          onValueChange={setSelectedAccount}
        >
          <SelectTrigger
            className={cn(
              "flex items-center gap-2 border-0 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0",
              isCollapsed &&
                "flex h-9 w-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden"
            )}
            aria-label="Select account"
          >
            <SelectValue placeholder="Select an account">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarFallback>
                    {generateAvatarInitials(accounts[0]?.email)}
                  </AvatarFallback>
                </Avatar>
                <div className={cn(isCollapsed && "hidden")}>
                  <p className="!mr-[100%] text-sm font-medium">
                    {
                      accounts.find(
                        (account) => account.email === selectedAccount
                      )?.label
                    }
                  </p>
                  <p className="text-xs">
                    {
                      accounts.find(
                        (account) => account.email === selectedAccount
                      )?.email
                    }
                  </p>
                </div>
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {accounts.map((account) => (
              <SelectItem key={account.email} value={account.email}>
                <div className="flex items-center gap-3 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:text-foreground">
                  <Avatar className="">
                    <AvatarFallback>
                      {generateAvatarInitials(account?.email)}
                    </AvatarFallback>
                  </Avatar>
                  {account.email}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <ListCollapse className="mr-2 opacity-50" />
      </div>
    </>
  );
}
