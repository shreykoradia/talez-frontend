import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUser } from "@/shared/context/UserProvider";
import { generateAvatarInitials, logOut } from "@/shared/helpers/helpers";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/ui/avatar";
import { Button } from "@/shared/ui/ui/button";

export function UserNav() {
  const { user } = useUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar>
            <AvatarImage
              src={user?.avatarUrl}
              className="rounded-full text-divamecha"
            />
            <AvatarFallback className="rounded-full bg-secondary">
              {generateAvatarInitials(user?.username)}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none text-divamecha">
              {user?.username}
            </p>
            {user?.email ? (
              <p className="text-xs leading-none text-muted">{user?.email}</p>
            ) : null}
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => {
              logOut();
              window.location.reload();
            }}
          >
            Log out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
