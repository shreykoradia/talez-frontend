import api from "@/shared/api/api";

interface signUpProps {
  email: string;
  password: string;
}

export const signup = (data: signUpProps) => {
  return api.post(`auth/signup`, data);
};
