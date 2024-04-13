import api from "@/shared/api/api";

interface peopleWithAccessProps {
  workflowId: string | number;
}

export const peopleWithAccess = (requestParams: peopleWithAccessProps) => {
  return api.get(`/share/get-users`, {
    params: { workflowId: requestParams.workflowId },
  });
};
