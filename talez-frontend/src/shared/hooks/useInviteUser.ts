import { inviteUserRequestProps } from "./../types/index";
import { useMutation } from "@tanstack/react-query";
import useGetPeopleWithAccess from "./useGetPeopleWithAccess";
import { inviteUser } from "../components/header/api/inviteUser";
import { toast } from "../ui/ui/use-toast";

const useInviteUser = (workflowId: string) => {
  const requestParams = {
    workflowId: workflowId,
  };
  const { refetchPeopleWithAccessFn } = useGetPeopleWithAccess(workflowId);
  const query = useMutation({
    mutationFn: (values: inviteUserRequestProps) =>
      inviteUser(values, requestParams),
    onSuccess: () => {
      toast({
        title: "Invite Added Successfully",
        description:
          "Fun Fact: Now Invited Memeber can also write talez on the workflow, hopefully if they know the Product",
      });
      refetchPeopleWithAccessFn();
    },
    onError: () => {
      toast({
        title:
          "Users having an account on talez are only being allowed to invited",
        description:
          "Currently we don't allow any external user to be a part of any workflows, for invites a member should atleast have account on talez and be verified.",
      });
    },
  });

  const { mutate: inviteUserFn, isPending: isInvitingUser } = query;
  return { inviteUserFn, isInvitingUser };
};

export default useInviteUser;
