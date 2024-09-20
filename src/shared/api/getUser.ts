import api from "@/shared/api/api";
import { AxiosResponse } from "axios";
import { UserResponse } from "../types";

export const getUser = (): Promise<AxiosResponse<UserResponse>> => {
  return api.get("/auth/me");
};
