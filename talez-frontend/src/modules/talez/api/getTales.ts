import api from "@/shared/api/api";
import { LIMIT } from "@/shared/constant";

export const getTales = (params: {
  offset: number;
  workflowId: number | string;
}) => {
  return api.get("tales/get-tales", {
    params: {
      limit: LIMIT,
      offset: params?.offset,
      workflowId: params?.workflowId,
    },
  });
};
