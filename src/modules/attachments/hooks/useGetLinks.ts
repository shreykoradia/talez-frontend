import { useQuery } from "@tanstack/react-query";
import getLinks from "../api/getLinks";

const useGetLinks = (taleId: string) => {
  const query = useQuery({
    queryKey: ["get-link-attahchments"],
    queryFn: () => getLinks(taleId),
    enabled: !!taleId,
  });

  return { ...query };
};

export default useGetLinks;
