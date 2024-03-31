import { useQuery } from "@tanstack/react-query";
import { getReactionCount } from "../api/getReactionCount";

export const useGetReactionCount = (feedbackParams: {
  feedbackId: string | number;
}) => {
  const query = useQuery({
    queryKey: ["get-feedback-reaction-count"],
    queryFn: () => getReactionCount(feedbackParams),
  });

  const data = query?.data?.data;
  const { isLoading, isError, refetch } = query;

  return { data, isLoading, isError, refetch };
};
