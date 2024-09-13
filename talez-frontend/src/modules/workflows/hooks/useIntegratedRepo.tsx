import { useQuery } from "@tanstack/react-query";

import getIntegratedRepository from "../api/getIntegratedRepo";

const useIntegratedRepo = (workflowId: string) => {
  const query = useQuery({
    queryKey: ["get-integrated-repo", workflowId],
    queryFn: () => getIntegratedRepository({ data: { workflowId } }),
    enabled: !!workflowId,
  });
  const {
    isLoading,
    isError,
    refetch: refetchWorkflowsFn,
    isRefetching,
  } = query;
  const data = query?.data?.data;
  console.log(data);
  return { data, isLoading, isRefetching, isError, refetchWorkflowsFn };
};

export default useIntegratedRepo;
