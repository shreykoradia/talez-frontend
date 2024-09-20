import api from "@/shared/api/api";
import { workflowRequest } from "../types";

export const createWorkflow = (data: workflowRequest) => {
  return api.post("workflow/create-workflow", data);
};
