import api from "@/shared/api/api";
import { CreateTalesRequestProps } from "../types";

export const editTales = (
  data: CreateTalesRequestProps,
  params: { taleId: number | string }
) => {
  return api.patch("tales/edit-tale", data, {
    params: { taleId: params?.taleId },
  });
};
