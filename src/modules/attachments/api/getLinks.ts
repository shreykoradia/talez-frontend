import api from "@/shared/api/api";
import { AxiosResponse } from "axios";
import { linkResponse } from "../types";

const getLinks = (taleId: string): Promise<AxiosResponse<linkResponse>> => {
  return api.get<linkResponse>(`/links/get-link`, { params: { taleId } });
};

export default getLinks;
