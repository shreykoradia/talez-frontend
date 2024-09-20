import { removeAccess } from "./../components/header/api/removeAccess";
import { useMutation } from "@tanstack/react-query";
import useGetPeopleWithAccess from "./useGetPeopleWithAccess";
import { ErrorResponse } from "../types";
import { toast } from "../ui/ui/use-toast";
import { getServerError } from "../helpers/helpers";

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
    onError: (err: ErrorResponse) => {
      toast({
        title: getServerError(err)?.message,
      });
    },
  });

  const { mutate: removeAccessFn, isPending: isRemovingAccess } = query;
  return { removeAccessFn, isRemovingAccess };
};

export default useRemoveAccess;
