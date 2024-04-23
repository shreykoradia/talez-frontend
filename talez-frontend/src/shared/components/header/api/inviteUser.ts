import api from "@/shared/api/api";
import { inviteUserRequestProps, peopleWithAccessProps } from "@/shared/types";

export const inviteUser = (
  data: inviteUserRequestProps,
  requestParams: peopleWithAccessProps
) => {
  return api.post(`/share/invite-user/`, data, {
    params: { workflowId: requestParams.workflowId },
  });
};
