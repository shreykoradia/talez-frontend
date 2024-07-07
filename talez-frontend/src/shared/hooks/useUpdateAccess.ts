import { ErrorResponse, updateAccessRequestprops } from "./../types/index";
import { useMutation } from "@tanstack/react-query";
import { updateAccess } from "../components/header/api/updateAccess";
import useGetPeopleWithAccess from "./useGetPeopleWithAccess";
import { toast } from "../ui/ui/use-toast";
import { getServerError } from "../helpers/helpers";

const useUpdateAccess = (workflowId: string) => {
  const requestParams = {
    workflowId: workflowId,
  };
  const { refetchPeopleWithAccessFn } = useGetPeopleWithAccess(workflowId);
  const query = useMutation({
    mutationFn: (values: updateAccessRequestprops) =>
      updateAccess(values, requestParams),
    onSuccess: () => {
      refetchPeopleWithAccessFn();
    },
    onError: (err: ErrorResponse) => {
      toast({
        title: getServerError(err)?.message,
      });
    },
  });

  const { mutate: updateAccessFn, isPending: isUpdatingAccess } = query;
  return { updateAccessFn, isUpdatingAccess };
};

export default useUpdateAccess;
