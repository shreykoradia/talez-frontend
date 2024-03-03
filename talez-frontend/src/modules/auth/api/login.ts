import api from "@/shared/api/api";

interface loginProps {
  email: string;
  password: string;
}

export const login = (data: loginProps) => {
  return api.post(`auth/login`, data);
};
