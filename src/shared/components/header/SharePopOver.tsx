import { useEffect, useState } from "react";
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
import { useUser } from "@/shared/context/UserProvider";
import useGetWorkflow from "@/modules/workflows/hooks/useGetWorkflow";

const SharePopOver = () => {
  const params = useParams();
  const { user } = useUser();
  const workflowId = params.workflowId || "";
  const { data: workflow } = useGetWorkflow(workflowId);
  const { data } = useGetPeopleWithAccess(workflowId);
  const [selectedAccessValue, setSelectedAccessValue] = useState<AccessLevel>(
    AccessLevel.CAN_VIEW
  );
  const [emailValue, setEmailValue] = useState<string>("");
  const [emailError, setEmailError] = useState<ValidationError | string | null>(
    null
  );

  const [open, setOpen] = useState<boolean>(false);

  const { updateAccessFn } = useUpdateAccess(workflowId);
  const { inviteUserFn, isInvitingUser, status } = useInviteUser(workflowId);
  const { removeAccessFn } = useRemoveAccess(workflowId);

  const workflowDetails = workflow?.workflows;

  const userRole = data?.shared_users?.filter(
    (shared) => shared?.sharedTo?._id === user?._id
  );

  const isUserAuthor =
    workflowDetails?.filter((workflow) => workflow?._id === workflowId)[0]
      ?.authorId === user?._id;

  const isFullAccessRole = userRole
    ? userRole[0]?.role === "full_access"
    : false;

  const checkRole = isFullAccessRole || isUserAuthor;

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

  useEffect(() => {
    if (isInvitingUser === false && status === "success") {
      setEmailValue("");
    }
    return () => {
      setEmailValue("");
      setEmailError("");
    };
  }, [isInvitingUser, status]);

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant={"outline"}>Share</Button>
        </PopoverTrigger>
        <PopoverContent className="w-[500px] mx-2 my-1">
          <div>
            <div className="flex justify-between items-center">
              <div className="text-md font-medium text-divamecha">
                Share this workflow
              </div>
              <button onClick={() => setOpen(!open)}>
                <CloseIcon
                  strokeWidth={1.5}
                  className="text-divamecha hover:text-muted"
                />
              </button>
            </div>
            <div className="text-muted text-xs font-normal">
              Anyone having access can view , edit or add feedback on Talez.
            </div>
          </div>
          <div className="share_container flex gap-2 mt-4 items-center">
            <Input
              type={"email"}
              value={emailValue || ""}
              placeholder="Enter user's email you wish to invite"
              onChange={(e) => {
                setEmailValue(e.target.value);
                setEmailError(null);
              }}
              disabled={!checkRole}
            />
            <Button
              type="button"
              variant={"ghost"}
              onClick={handleInviteClick}
              disabled={!checkRole}
            >
              Invite
            </Button>
          </div>
          <Separator className="my-4" />
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-divamecha">
              People with access
            </h4>

            <div className="grid gap-6 max-h-[500px] overflow-y-scroll no-scrollbar">
              {data?.shared_users &&
                data?.shared_users.map((user: peopleWithAccessResponse) => (
                  <div
                    className="flex items-center justify-between space-x-4"
                    key={user?._id}
                  >
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="/avatars/03.png" />
                        <AvatarFallback>
                          {generateAvatarInitials(user?.sharedTo?.username)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium leading-none text-divamecha">
                          {user?.sharedTo?.username}
                        </p>
                        <p className="text-sm text-muted">
                          {user?.sharedTo?.email}
                        </p>
                      </div>
                    </div>
                    <Select
                      disabled={!checkRole}
                      defaultValue={user?.role || selectedAccessValue}
                      onValueChange={(value: AccessLevel) => {
                        if (value === AccessLevel.REMOVE_ACCESS) {
                          const values = {
                            email: user?.sharedTo?.email,
                          };
                          removeAccessFn(values);
                          return;
                        }
                        setSelectedAccessValue(value);
                        const values = {
                          email: user?.sharedTo?.email,
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
