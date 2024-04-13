import { useQuery } from "@tanstack/react-query";
import { peopleWithAccess } from "../components/header/api/peopleWithAccess";

const useGetPeopleWithAccess = (workflowId: string | number) => {
  const requestParams = {
    workflowId: workflowId,
  };
  const query = useQuery({
    queryKey: ["get-user-with-access", workflowId],
    queryFn: () => peopleWithAccess(requestParams),
  });
  const { isLoading, isError, refetch: refetchWorkflowsFn } = query;
  const data = query?.data?.data;
  return { data, isLoading, isError, refetchWorkflowsFn };
};

export default useGetPeopleWithAccess;
