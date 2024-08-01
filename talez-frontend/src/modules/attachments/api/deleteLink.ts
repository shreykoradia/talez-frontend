import api from "@/shared/api/api";

interface getLinkProp {
  linkId: string;
  taleId: string;
}

const deleteLink = (data: getLinkProp) => {
  return api.delete(`/links/delete-link/${data?.linkId}`, {
    params: { taleId: data?.taleId },
  });
};

export default deleteLink;
