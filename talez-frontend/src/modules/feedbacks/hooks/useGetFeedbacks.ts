import { useInfiniteQuery } from "@tanstack/react-query";
import { getFeedbacks } from "../api/getFeedbacks";
import { LIMIT } from "@/shared/constant";

const useGetFeedbacks = (params: { taleId: number | string }) => {
  const fetchFeedbacks = ({ pageParam = 0 }) => {
    return getFeedbacks({ taleId: params.taleId, offset: pageParam });
  };

  const query = useInfiniteQuery({
    queryKey: ["get-feedbacks", params?.taleId],
    queryFn: fetchFeedbacks,
    initialPageParam: 0,
    getNextPageParam: (lastPage, lastPageParam) => {
      if (lastPage.data.feedbacks.feedbacks.length === 0) {
        return undefined;
      }
      return lastPageParam.length * LIMIT;
    },
    enabled: !!params?.taleId,
  });

  const data = query?.data?.pages;

  const {
    fetchNextPage,
    hasNextPage,
    isError,
    isLoading,
    refetch,
    isFetchingNextPage,
  } = query;

  return {
    data,
    fetchNextPage,
    hasNextPage,
    isError,
    isLoading,
    refetch,
    isFetchingNextPage,
  };
};

export default useGetFeedbacks;
