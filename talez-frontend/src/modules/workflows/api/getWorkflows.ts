import api from "@/shared/api/api";

export const getWorkflows = () => {
  return api.get("workflow/get-workflows");
};
