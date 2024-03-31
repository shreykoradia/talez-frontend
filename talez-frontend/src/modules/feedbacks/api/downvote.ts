import api from "@/shared/api/api";
import { reactionRequestProps } from "../types";

export const downvote = (
  data: reactionRequestProps,
  params: { taleId: string | number }
) => {
  return api.post(`/reaction/downvote`, data, {
    params: { taleId: params.taleId },
  });
};
