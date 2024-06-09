import { useQuery } from "@tanstack/react-query";
import { getWorkflow } from "../api/getWorkflow";
import { WorkflowData } from "../types";

const useGetWorkflow = (workflowId: string) => {
  const query = useQuery({
    queryKey: ["get-workflow", workflowId],
    queryFn: () => getWorkflow({ workflowId: workflowId }),
  });
  const {
    isLoading,
    isError,
    refetch: refetchWorkflowsFn,
    isRefetching,
  } = query;
  const data: WorkflowData = query?.data?.data;

  return { data, isLoading, isRefetching, isError, refetchWorkflowsFn };
};

export default useGetWorkflow;
