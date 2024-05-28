import { useQuery } from "@tanstack/react-query";
import { getTales } from "../api/getTales";
import { talesProps } from "../types";

export const useGetTales = (params: { offset: number; workflowId: string }) => {
  const query = useQuery({
    queryKey: ["get-tales"],
    queryFn: () => getTales(params),
  });
  const data: talesProps = query?.data?.data?.tales;
  const {
    isLoading: isLoadingTales,
    refetch: refetchTalesFn,
    isRefetching: isRefetchingTales,
  } = query;

  return { data, isLoadingTales, refetchTalesFn, isRefetchingTales };
};
