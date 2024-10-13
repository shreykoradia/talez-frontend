import api from "@/shared/api/api";
import { AxiosResponse } from "axios";
import { ConnectRepositoryRes, ConnectReqProp } from "../types";

type ConnectReqPayloadProp = {
  data?: ConnectReqProp;
};

export const connectRepo = ({
  data,
}: ConnectReqPayloadProp): Promise<AxiosResponse<ConnectRepositoryRes>> => {
  return api.post<ConnectRepositoryRes>("connect/github/repository", data, {
    params: { workflowId: data?.workflowId },
  });
};
