import { useQuery } from "@tanstack/react-query";
import { getTales } from "../api/getTales";
import { talesProps } from "../types";

export const useGetTales = (params: { offset: number; workflowId: string }) => {
  const query = useQuery({
    queryKey: ["get-tales", params?.offset, params?.workflowId],
    queryFn: () => getTales(params),
    enabled: !!params?.offset || !!params?.workflowId,
  });
  const data: talesProps = query?.data?.data?.tales;
  const { isLoading: isLoadingTales, refetch: refetchTalesFn } = query;

  return {
    ...query,
    data,
    isLoadingTales,
    refetchTalesFn,
  };
};
