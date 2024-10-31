import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createFeedbackProps, feedbackData } from "../types";
import { createFeedback } from "../api/createFeedback";
import { toast } from "@/shared/ui/ui/use-toast";

interface CreateFeedbackProp {
  taleId: string;
}

interface FeedbackPage {
  data: {
    feedbacks: {
      feedbacks: feedbackData[];
    };
  };
}

const useCreateFeedback = ({ taleId }: CreateFeedbackProp) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      values,
      params,
    }: {
      values: createFeedbackProps;
      params: { taleId: string | number };
    }) => createFeedback(values, params),
    onSuccess: (newFeedback) => {
      queryClient.setQueryData(
        ["get-feedbacks", taleId],
        (oldData: { pages: FeedbackPage[] } | undefined) => {
          if (!oldData || !oldData.pages.length) return oldData;

          // Create a new pages array
          const newPages = [...oldData.pages];

          // Add the new feedback to the beginning of the first page
          const firstPage = newPages[0];
          const updatedFirstPage = {
            ...firstPage,
            data: {
              ...firstPage.data,
              feedbacks: {
                ...firstPage.data.feedbacks,
                feedbacks: [
                  newFeedback.data.newFeedback,
                  ...firstPage.data.feedbacks.feedbacks,
                ],
              },
            },
          };

          newPages[0] = updatedFirstPage;

          return {
            ...oldData,
            pages: newPages,
          };
        }
      );

      toast({
        title: "Feedback added successfully",
        description:
          "Check out feedbacks by other, upvote or downvote and make your product better",
      });
    },
    onError: () => {
      toast({
        title: "Something went wrong huh!",
        description:
          "Try adding feedback after a while, Talez is currently in development mode, Thanks!",
      });
    },
  });
};

export default useCreateFeedback;
