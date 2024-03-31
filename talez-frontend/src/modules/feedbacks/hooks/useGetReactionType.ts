import { useQuery } from "@tanstack/react-query";
import { getReactionType } from "../api/getReactionType";

export const useGetReactionType = (feedbackParams: {
  feedbackId: string | number;
}) => {
  const query = useQuery({
    queryKey: ["get-feedback-reaction-type"],
    queryFn: () => getReactionType(feedbackParams),
  });

  const data = query?.data?.data;
  const { isLoading, isError, refetch } = query;

  return { data, isLoading, isError, refetch };
};
