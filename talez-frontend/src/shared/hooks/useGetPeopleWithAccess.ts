import { useQuery } from "@tanstack/react-query";
import { peopleWithAccess } from "../components/header/api/peopleWithAccess";
import { sharedUserResponse } from "../types";

const useGetPeopleWithAccess = (workflowId: string | number) => {
  const requestParams = {
    workflowId: workflowId,
  };
  const query = useQuery({
    queryKey: ["get-user-with-access", workflowId],
    queryFn: () => peopleWithAccess(requestParams),
  });
  const { isLoading, isError, refetch: refetchPeopleWithAccessFn } = query;
  const data: sharedUserResponse = query?.data?.data;
  return { data, isLoading, isError, refetchPeopleWithAccessFn };
};

export default useGetPeopleWithAccess;
