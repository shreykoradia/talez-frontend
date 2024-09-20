import api from "@/shared/api/api";

export const createIssues = (data: { taleId: string }) => {
  return api.get("issues/create-issue", {
    params: { taleId: data?.taleId },
  });
};
