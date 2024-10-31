import api from "@/shared/api/api";
import { createFeedbackProps } from "../types";

export const editFeedback = (
  data: createFeedbackProps,
  params: { feedbackId: string | number }
) => {
  return api.patch("/feedback/edit-feedback", data, {
    params: { feedbackId: params?.feedbackId },
  });
};
