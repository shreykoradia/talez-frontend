import api from "@/shared/api/api";
import { LIMIT } from "@/shared/constant";

export const getFeedbacks = (params: {
  offset: number;
  taleId: number | string;
}) => {
  return api.get(`feedback/get-feedbacks`, {
    params: { taleId: params.taleId, offset: params.offset, limit: LIMIT },
  });
};
