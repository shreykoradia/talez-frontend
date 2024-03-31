import api from "@/shared/api/api";

export const getReactionCount = (params: { feedbackId: string | number }) => {
  return api.get(`/reaction/reactions-count`, {
    params: { feedbackId: params.feedbackId },
  });
};
