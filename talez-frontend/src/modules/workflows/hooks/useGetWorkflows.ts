import { useQuery } from "@tanstack/react-query";

import { getWorkflows } from "../api/getWorkflows";

const useGetWorkflows = () => {
  const query = useQuery({
    queryKey: ["get-workflows"],
    queryFn: getWorkflows,
  });
  const { isLoading, isError, refetch: refetchWorkflowsFn } = query;
  const data = query?.data?.data;
  return { data, isLoading, isError, refetchWorkflowsFn };
};

export default useGetWorkflows;
