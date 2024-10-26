import api from "@/shared/api/api";
import { peopleWithAccessProps } from "@/shared/types";

export const removeAccess = (
  data: { shared_user_id: string },
  requestParams: peopleWithAccessProps
) => {
  return api.post(`/share/remove-access/`, data, {
    params: {
      workflowId: requestParams.workflowId,
    },
  });
};
