import api from "@/shared/api/api";
import { peopleWithAccessProps } from "@/shared/types";

export const peopleWithAccess = (requestParams: peopleWithAccessProps) => {
  return api.get(`/share/get-users/`, {
    params: { workflowId: requestParams.workflowId },
  });
};
