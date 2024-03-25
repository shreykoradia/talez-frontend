import { useQuery } from "@tanstack/react-query";
import { getTaleById } from "../api/getTaleById";
import { talesResponseProps } from "../types";

export const useGetTaleById = (params: { taleId: string | number }) => {
  const query = useQuery({
    queryKey: ["get-tale-by-id", params?.taleId],
    queryFn: () => getTaleById(params),
  });
  const data: talesResponseProps = query?.data?.data?.tale;
  const {
    isLoading: isLoadingTale,
    refetch: refetchTaleFn,
    isRefetching: isRefetchingTale,
  } = query;

  return { data, isLoadingTale, refetchTaleFn, isRefetchingTale };
};
