import api from "@/shared/api/api";
import { AxiosResponse } from "axios";
import { linkedRepository } from "../types";

type IntegratedRepoProp = {
  data: { workflowId: string };
};

const getIntegratedRepository = ({
  data,
}: IntegratedRepoProp): Promise<AxiosResponse<linkedRepository>> => {
  return api.get(`connect/github/linked/repo`, {
    params: { workflowId: data?.workflowId },
  });
};

export default getIntegratedRepository;
