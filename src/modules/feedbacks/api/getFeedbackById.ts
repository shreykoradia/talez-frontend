import api from "@/shared/api/api";

export const getFeedbackById = (params: { feedbackId: string | undefined }) => {
  if (params?.feedbackId === undefined) {
    return;
  }
  return api.get(`feedback/get-feedback`, {
    params: { feedbackId: params.feedbackId },
  });
};
