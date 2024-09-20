import api from "@/shared/api/api";
import {
  peopleWithAccessProps,
  updateAccessRequestprops,
} from "@/shared/types";

export const updateAccess = (
  data: updateAccessRequestprops,
  requestParams: peopleWithAccessProps
) => {
  return api.patch(`/share/update-access/`, data, {
    params: { workflowId: requestParams.workflowId },
  });
};
