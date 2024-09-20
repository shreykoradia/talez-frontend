import api from "@/shared/api/api";

export const getTaleById = (params: { taleId: number | string }) => {
  return api.get("tales/get-tale", {
    params: {
      taleId: params?.taleId,
    },
  });
};
