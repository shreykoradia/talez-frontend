import api from "@/shared/api/api";

interface createLinkProp {
  linkTitle: string;
  linkUrl: string;
  taleId: string;
}

const createLink = (data: createLinkProp) => {
  const { taleId, ...dataRest } = data;
  return api.post(`/links/add-link`, dataRest, {
    params: { taleId: taleId },
  });
};

export default createLink;
