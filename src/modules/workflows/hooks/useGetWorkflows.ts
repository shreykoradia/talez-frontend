import { LIMIT } from "@/shared/constant";
import { useQuery } from "@tanstack/react-query";

import { getWorkflows } from "../api/getWorkflows";
import { WorkflowData } from "../types";

const useGetWorkflows = (offset?: number) => {
  const query = useQuery({
    queryKey: ["get-workflows"],
    queryFn: () => getWorkflows({ limit: LIMIT, offset: offset || 0 }),
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

export default useGetWorkflows;
