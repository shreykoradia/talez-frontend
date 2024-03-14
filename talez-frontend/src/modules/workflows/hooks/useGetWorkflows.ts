import { LIMIT } from "@/shared/constant";
import { useQuery } from "@tanstack/react-query";

import { getWorkflows } from "../api/getWorkflows";

const useGetWorkflows = (offset?: number) => {
  const query = useQuery({
    queryKey: ["get-workflows"],
    queryFn: () => getWorkflows({ limit: LIMIT, offset: offset || 0 }),
  });
  const { isLoading, isError, refetch: refetchWorkflowsFn } = query;
  const data = query?.data?.data;
  return { data, isLoading, isError, refetchWorkflowsFn };
};

export default useGetWorkflows;
