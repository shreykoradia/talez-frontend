import api from "@/shared/api/api";
import { AxiosResponse } from "axios";
import { ConnectRepositoryResponseProp, ConnectReqProp } from "../types";

type ConnectReqPayloadProp = {
  data?: ConnectReqProp;
};

export const connectRepo = ({
  data,
}: ConnectReqPayloadProp): Promise<
  AxiosResponse<ConnectRepositoryResponseProp>
> => {
  return api.post<ConnectRepositoryResponseProp>(
    "connect/github/repository",
    data,
    { params: { workflowId: data?.workflowId } }
  );
};
