import { useQuery } from "@tanstack/react-query";
import { getFeedbackById } from "../api/getFeedbackById";

export const useGetFeedbackId = (feedbackParams: {
  feedbackId: string | undefined;
}) => {
  const query = useQuery({
    queryKey: ["get-feedback"],
    queryFn: () => getFeedbackById(feedbackParams),
  });

  const data = query?.data?.data;
  const { isLoading, isError, refetch } = query;

  return { data, isLoading, isError, refetch };
};
