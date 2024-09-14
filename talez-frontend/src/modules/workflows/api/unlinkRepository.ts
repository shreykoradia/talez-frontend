import api from "@/shared/api/api";
import { AxiosResponse } from "axios";
import { linkedRepository } from "../types";

type ResponseType = {
  connetedRepo: linkedRepository;
  message: string;
};

const unlinkedRepository = (
  data: string
): Promise<AxiosResponse<ResponseType>> => {
  return api.delete(`connect/github/linked/repo`, {
    params: { workflowId: data },
  });
};

export default unlinkedRepository;
