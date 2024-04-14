import { useState } from "react";
import { useParams } from "react-router-dom";
import { ValidationError } from "yup";
import { X as CloseIcon } from "lucide-react";

import { accessOptions } from "@/shared/helpers/constant";
import { generateAvatarInitials } from "@/shared/helpers/helpers";
import { emailValidationSchema } from "@/shared/helpers/validationSchema/emailValidationSchema";
import useGetPeopleWithAccess from "@/shared/hooks/useGetPeopleWithAccess";
import useInviteUser from "@/shared/hooks/useInviteUser";
import useRemoveAccess from "@/shared/hooks/useRemoveAccess";
import useUpdateAccess from "@/shared/hooks/useUpdateAccess";
import { AccessLevel, peopleWithAccessResponse } from "@/shared/types";
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
  const params = useParams();
  const workflowId = params.workflowId || "";
  const { data } = useGetPeopleWithAccess(workflowId);
  const [selectedAccessValue, setSelectedAccessValue] = useState<AccessLevel>(
    AccessLevel.CAN_VIEW
  );
  const [emailValue, setEmailValue] = useState<string>("");
  const [emailError, setEmailError] = useState<ValidationError | string | null>(
    null
  );

  const { updateAccessFn } = useUpdateAccess(workflowId);
  const { inviteUserFn } = useInviteUser(workflowId);
  const { removeAccessFn } = useRemoveAccess(workflowId);

  const handleInviteClick = async () => {
    try {
      await emailValidationSchema.validate(emailValue);
      if (!emailError) {
        const values = {
          email: emailValue,
          role: AccessLevel.CAN_VIEW,
        };
        inviteUserFn(values);
      }
    } catch (err) {
      if (err) {
        setEmailError("Invalid email format");
      }
    }
  };

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant={"ghost"}>Share</Button>
        </PopoverTrigger>
        <PopoverContent className="w-[500px] mx-2 my-1">
          <div>
            <div className="flex justify-between items-center">
              <div className="text-md font-medium hover:text-primary">
                Share this workflow
              </div>
              <CloseIcon strokeWidth={1.5} className="hover:text-primary" />
            </div>
            <div className="text-muted-foreground text-xs font-normal">
              Anyone with the link can view this document.
            </div>
          </div>
          <div className="share_container flex gap-2 mt-4">
            <Input
              type={"email"}
              value={emailValue || ""}
              placeholder="Enter user's email you wish to invite"
              onChange={(e) => {
                setEmailValue(e.target.value);
                setEmailError(null);
              }}
            />
            <Button
              type="button"
              variant={"default"}
              onClick={handleInviteClick}
            >
              Invite
            </Button>
          </div>
          <Separator className="my-4" />
          <div className="space-y-4">
            <h4 className="text-sm font-medium">People with access</h4>

            <div className="grid gap-6 max-h-[500px] overflow-y-scroll no-scrollbar">
              {data?.shared_users.map((user: peopleWithAccessResponse) => (
                <div
                  className="flex items-center justify-between space-x-4"
                  key={user?._id}
                >
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="/avatars/03.png" />
                      <AvatarFallback>
                        {generateAvatarInitials(user?.shared_to?.email)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">
                        {user?.shared_to?.username}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {user?.shared_to?.email}
                      </p>
                    </div>
                  </div>
                  <Select
                    defaultValue={user?.role || selectedAccessValue}
                    onValueChange={(value: AccessLevel) => {
                      if (value === AccessLevel.REMOVE_ACCESS) {
                        const values = {
                          email: user?.shared_to?.email,
                        };
                        removeAccessFn(values);
                        return;
                      }
                      setSelectedAccessValue(value);
                      const values = {
                        email: user?.shared_to?.email,
                        role: value,
                      };
                      updateAccessFn(values);
                    }}
                  >
                    <SelectTrigger className="ml-auto w-[110px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {accessOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default SharePopOver;
