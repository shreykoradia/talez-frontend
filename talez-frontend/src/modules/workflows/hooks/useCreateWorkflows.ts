import { useMutation } from "@tanstack/react-query";

import useGetWorkflows from "./useGetWorkflows";

import { workflowRequest } from "../types";
import { createWorkflow } from "../api/createWorkflow";

const useCreateWorkflows = () => {
  const { refetchWorkflowsFn } = useGetWorkflows();
  const query = useMutation({
    mutationFn: (values: workflowRequest) => createWorkflow(values),
    onSuccess: () => {
      refetchWorkflowsFn();
    },
  });

  const { mutate: createWorkfLowMutateFn, isPending: isCreatingWorkflow } =
    query;
  return { createWorkfLowMutateFn, isCreatingWorkflow };
};

export default useCreateWorkflows;
