import { useQuery } from "@tanstack/react-query";
import { getTales } from "../api/getTales";

export const useGetTales = (params: {
  offset: number;
  workflowId: string | number;
}) => {
  const query = useQuery({
    queryKey: ["get-tales"],
    queryFn: () => getTales(params),
  });
  const data = query?.data?.data?.tales;
  const {
    isLoading: isLoadingTales,
    refetch: refetchTalesFn,
    isRefetching: isRefetchingTales,
  } = query;

  return { data, isLoadingTales, refetchTalesFn, isRefetchingTales };
};
