import { removeAccess } from "./../components/header/api/removeAccess";
import { useMutation } from "@tanstack/react-query";
import useGetPeopleWithAccess from "./useGetPeopleWithAccess";

const useRemoveAccess = (workflowId: string) => {
  const requestParams = {
    workflowId: workflowId,
  };
  const { refetchPeopleWithAccessFn } = useGetPeopleWithAccess(workflowId);
  const query = useMutation({
    mutationFn: (values: { email: string }) =>
      removeAccess(values, requestParams),
    onSuccess: () => {
      refetchPeopleWithAccessFn();
    },
  });

  const { mutate: removeAccessFn, isPending: isRemovingAccess } = query;
  return { removeAccessFn, isRemovingAccess };
};

export default useRemoveAccess;
