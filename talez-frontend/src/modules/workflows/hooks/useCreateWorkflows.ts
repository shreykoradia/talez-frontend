import { useMutation } from "@tanstack/react-query";

import useGetWorkflows from "./useGetWorkflows";

import { workflowRequest } from "../types";
import { createWorkflow } from "../api/createWorkflow";
import { toast } from "@/shared/ui/ui/use-toast";

const useCreateWorkflows = () => {
  const { refetchWorkflowsFn } = useGetWorkflows();
  const query = useMutation({
    mutationFn: (values: workflowRequest) => createWorkflow(values),
    onSuccess: () => {
      refetchWorkflowsFn();
    },
    onError: () => {
      toast({
        title: "Something went wrong huh!",
        description:
          "You can add only limited number of workflows as Talez is currently in development mode, Thanks!",
      });
    },
  });

  const { mutate: createWorkfLowMutateFn, isPending: isCreatingWorkflow } =
    query;
  return { createWorkfLowMutateFn, isCreatingWorkflow };
};

export default useCreateWorkflows;
