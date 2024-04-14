import api from "@/shared/api/api";
import { peopleWithAccessProps } from "@/shared/types";

export const removeAccess = (
  data: { email: string },
  requestParams: peopleWithAccessProps
) => {
  return api.post(`/share/remove-access/`, data, {
    params: {
      workflowId: requestParams.workflowId,
    },
  });
};
