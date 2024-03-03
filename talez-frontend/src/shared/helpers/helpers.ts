import { getCookie } from "typescript-cookie";

export const checkToken = () => {
  const token = getCookie("accessToken");
  return token;
};
