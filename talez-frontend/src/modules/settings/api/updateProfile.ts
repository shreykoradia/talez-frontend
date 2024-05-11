import api from "@/shared/api/api";
import { updateProfileProps } from "../types";

export const updateProfile = (data: updateProfileProps) => {
  return api.patch("/profile/update", data);
};
