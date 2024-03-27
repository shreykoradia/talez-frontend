import api from "@/shared/api/api";
import { createFeedbackProps } from "../types";

export const createFeedback = (
  data: createFeedbackProps,
  params: { taleId: string | number }
) => {
  return api.post("/feedback/add-feedback", data, {
    params: { taleId: params?.taleId },
  });
};
