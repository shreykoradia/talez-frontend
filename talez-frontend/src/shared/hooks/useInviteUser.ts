import { inviteUserRequestProps } from "./../types/index";
import { useMutation } from "@tanstack/react-query";
import useGetPeopleWithAccess from "./useGetPeopleWithAccess";
import { inviteUser } from "../components/header/api/inviteUser";

const useInviteUser = (workflowId: string) => {
  const requestParams = {
    workflowId: workflowId,
  };
  const { refetchPeopleWithAccessFn } = useGetPeopleWithAccess(workflowId);
  const query = useMutation({
    mutationFn: (values: inviteUserRequestProps) =>
      inviteUser(values, requestParams),
    onSuccess: () => {
      refetchPeopleWithAccessFn();
    },
  });

  const { mutate: inviteUserFn, isPending: isInvitingUser } = query;
  return { inviteUserFn, isInvitingUser };
};

export default useInviteUser;
