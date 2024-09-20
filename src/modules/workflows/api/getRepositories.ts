import api from "@/shared/api/api";
import { AxiosResponse } from "axios";
import { RepositoryResponseProp } from "../types";

type getRepositoryProp = {
  offset?: number;
};

export const getRepository = ({
  offset,
}: getRepositoryProp): Promise<AxiosResponse<RepositoryResponseProp>> => {
  return api.get<RepositoryResponseProp>("connect/github/repositories", {
    params: { offset: offset },
  });
};
