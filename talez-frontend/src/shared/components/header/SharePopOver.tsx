import { generateAvatarInitials } from "@/shared/helpers/helpers";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/ui/avatar";
import { Button } from "@/shared/ui/ui/button";
import { Input } from "@/shared/ui/ui/input";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/ui/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/ui/select";
import { Separator } from "@/shared/ui/ui/separator";

const SharePopOver = () => {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant={"ghost"}>Share</Button>
        </PopoverTrigger>
        <PopoverContent className="w-[500px] mx-4 my-1">
          <div>
            <div className="text-md font-medium">Share this document</div>
            <div className="text-secondary-foreground text-xs font-normal">
              Anyone with the link can view this document.
            </div>
          </div>
          <div className="share_container flex gap-2 mt-4">
            <Input
              type={"email"}
              value=""
              placeholder="Enter user's email you wish to invite"
            />
            <Button variant={"default"}>Invite</Button>
          </div>
          <Separator className="my-4" />
          <div className="space-y-4 max-h-[500px] overflow-y-scroll no-scrollbar">
            <h4 className="text-sm font-medium">People with access</h4>
            <div className="grid gap-6">
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/avatars/03.png" />
                    <AvatarFallback>
                      {generateAvatarInitials("shreyKkoradia")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">
                      Olivia Martin
                    </p>
                    <p className="text-sm text-muted-foreground">
                      m@example.com
                    </p>
                  </div>
                </div>
                <Select defaultValue="edit">
                  <SelectTrigger className="ml-auto w-[110px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="view">Full Access</SelectItem>
                    <SelectItem value="edit">Can edit</SelectItem>
                    <SelectItem value="view">Can view</SelectItem>
                    <SelectItem value="view">Remove Access</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default SharePopOver;
