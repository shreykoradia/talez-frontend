import api from "@/shared/api/api";
import { CreateTalesRequestProps } from "../types";

export const createTales = (
  data: CreateTalesRequestProps,
  params: { workflowId: number | string }
) => {
  return api.post("tales/create-tales", data, {
    params: { workflowId: params?.workflowId },
  });
};
