import { useMutation } from "@tanstack/react-query";

import useGetWorkflows from "./useGetWorkflows";

import { workflowRequest } from "../types";
import { createWorkflow } from "../api/createWorkflow";
import { toast } from "@/shared/ui/ui/use-toast";
import { getServerError } from "@/shared/helpers/helpers";
import { ErrorResponse } from "@/shared/types";

const useCreateWorkflows = () => {
  const { refetchWorkflowsFn } = useGetWorkflows();
  const query = useMutation({
    mutationFn: (values: workflowRequest) => createWorkflow(values),
    onSuccess: () => {
      refetchWorkflowsFn();
    },
    onError: (err: ErrorResponse) => {
      toast({
        title: getServerError(err)?.message,
      });
    },
  });

  const { mutate: createWorkfLowMutateFn, isPending: isCreatingWorkflow } =
    query;
  return { createWorkfLowMutateFn, isCreatingWorkflow };
};

export default useCreateWorkflows;
