import api from "@/shared/api/api";

export const signup = () => {
  return api.post(`auth/signup`);
};
