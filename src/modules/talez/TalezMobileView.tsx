import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useGetTaleById } from "./hooks/useGetTaleById";
import TalezDetailCard from "./components/TalezDetailCard";

const TalezMobileView = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const taleId = params?.taleId || "";
  const workflowId = searchParams.get("workflowId");
  const navigate = useNavigate();
  const {
    data: taleDetail,
    isLoadingTale,
    isRefetchingTale,
  } = useGetTaleById({ taleId });

  return (
    <TalezDetailCard
      taleDetail={taleDetail}
      selectedTale={taleId}
      isLoading={isLoadingTale || isRefetchingTale}
      onClose={() => navigate(`/${workflowId}/talez`)}
    />
  );
};
export default TalezMobileView;
