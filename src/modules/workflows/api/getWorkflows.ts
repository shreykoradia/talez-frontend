import { requestParams } from "./../../../shared/types/index";
import api from "@/shared/api/api";

export const getWorkflows = (requestParams: requestParams) => {
  return api.get("workflow/get-workflows", {
    params: { limit: requestParams?.limit, offset: requestParams?.offset },
  });
};
