import { AxiosResponse } from "axios";
import api from "./api";

export const getVerificationLink = (): Promise<AxiosResponse> => {
  return api.get("auth/verify");
};
