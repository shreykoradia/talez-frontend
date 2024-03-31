import api from "@/shared/api/api";

export const getReactionType = (params: { feedbackId: string | number }) => {
  return api.get(`/reaction/reaction-type`, {
    params: { feedbackId: params.feedbackId },
  });
};
