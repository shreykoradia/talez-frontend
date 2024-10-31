import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createFeedbackProps } from "../types";
import { toast } from "@/shared/ui/ui/use-toast";
import { editFeedback } from "../api/editFeedback";

interface EditFeedbackProp {
  taleId: string;
}

interface Feedback {
  _id: number | string;
}

interface FeedbackPage {
  data: {
    feedbacks: {
      feedbacks: Feedback[];
    };
  };
}

const useEditFeedback = ({ taleId }: EditFeedbackProp) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      values,
      params,
    }: {
      values: createFeedbackProps;
      params: { feedbackId: string | number };
    }) => editFeedback(values, params),
    onSuccess: (updatedFeedback, { params }) => {
      queryClient.setQueryData(
        ["get-feedbacks", taleId],
        (oldData: { pages: FeedbackPage[] } | undefined) => {
          if (!oldData) return oldData;
          // Create a new pages array with the updated feedback
          const newPages = oldData.pages.map((page) => {
            const feedbacks = page.data.feedbacks.feedbacks;
            const feedbackIndex = feedbacks.findIndex(
              (feedback) => feedback._id === params.feedbackId
            );
            console.log(feedbacks, feedbackIndex, params.feedbackId);
            // If feedback is not in this page, return the page as is
            if (feedbackIndex === -1) return page;

            // Create a new feedbacks array with the updated feedback
            const newFeedbacks = [...feedbacks];
            newFeedbacks[feedbackIndex] = {
              ...newFeedbacks[feedbackIndex],
              ...updatedFeedback.data.feedback,
            };

            // Return the updated page
            return {
              ...page,
              data: {
                ...page.data,
                feedbacks: {
                  ...page.data.feedbacks,
                  feedbacks: newFeedbacks,
                },
              },
            };
          });

          // Return the updated data
          return {
            ...oldData,
            pages: newPages,
          };
        }
      );

      toast({
        title: "Feedback updated successfully",
        description:
          "Check out feedbacks by other, upvote or downvote and make your product better",
      });
    },
    onError: () => {
      toast({
        title: "Something went wrong huh!",
        description:
          "Try updating feedback after a while, Talez is currently in development mode, Thanks!",
      });
    },
  });
};

export default useEditFeedback;
