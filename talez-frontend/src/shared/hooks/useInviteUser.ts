import { useMutation } from "@tanstack/react-query";
import useGetPeopleWithAccess from "./useGetPeopleWithAccess";
import { inviteUser } from "../components/header/api/inviteUser";
import { toast } from "../ui/ui/use-toast";
import { inviteUserRequestProps } from "./../types/index";

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
        title: "Something Went Wrong!",
      });
    },
  });

  const { mutate: inviteUserFn, isPending: isInvitingUser } = query;
  return { inviteUserFn, isInvitingUser, ...query };
};

export default useInviteUser;
