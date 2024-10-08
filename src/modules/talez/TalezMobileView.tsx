import { useParams } from "react-router-dom";
import { useGetTaleById } from "./hooks/useGetTaleById";
import TalezDetailCard from "./components/TalezDetailCard";

const TalezMobileView = () => {
  const params = useParams();
  const taleId = params?.taleId || "";
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
    />
  );
};

export default TalezMobileView;
