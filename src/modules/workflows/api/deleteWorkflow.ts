import api from "@/shared/api/api";
import { workflowArchivePayload } from "../types";

export const deleteWorkflow = (data: workflowArchivePayload) => {
  return api.patch(
    "workflow/delete-workflow",
    {},
    {
      params: { workflowId: data.workflowId },
    }
  );
};
