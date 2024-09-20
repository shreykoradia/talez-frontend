import api from "@/shared/api/api";

interface requestParamsProp {
  workflowId: string;
}

export const getWorkflow = (requestParams: requestParamsProp) => {
  return api.get("workflow/get-workflows", {
    params: { workflowId: requestParams?.workflowId },
  });
};
