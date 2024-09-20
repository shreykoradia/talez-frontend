import api from "@/shared/api/api";
import { reactionRequestProps } from "../types";

export const upvote = (
  data: reactionRequestProps,
  params: { taleId: string | number }
) => {
  return api.post(`/reaction/upvote`, data, {
    params: { taleId: params.taleId },
  });
};
