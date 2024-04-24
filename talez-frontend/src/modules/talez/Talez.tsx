import Header from "@/shared/components/header/Header";
import { useParams } from "react-router-dom";
import styles from "@/assets/css/talez.module.css";
import TalezCard from "./components/TalezCard";
import { Button } from "@/shared/ui/ui/button";
import { useGetTales } from "./hooks/useGetTales";
import { useEffect, useState } from "react";
import { LIMIT } from "@/shared/constant";
import { talesResponseProps } from "./types";
import TalezLoader from "@/shared/components/loaders/TalezLoader";

const Talez = () => {
  const params = useParams();
  const [talesOffset, setTalesOffset] = useState<number>(0);

  const requestParams = {
    offset: talesOffset,
    workflowId: params?.workflowId || 0,
  };
  const { data, isLoadingTales, isRefetchingTales } =
    useGetTales(requestParams);
  const { refetchTalesFn } = useGetTales(requestParams);

  const onFetchMore = () => {
    setTalesOffset(talesOffset + LIMIT);
  };

  const onFetchPrevious = () => {
    if (talesOffset - LIMIT < 0) return;
    setTalesOffset((prevOffset) => prevOffset - LIMIT);
  };

  useEffect(() => {
    if (talesOffset >= 0) {
      refetchTalesFn();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [talesOffset]);

  if (!params?.workflowId) {
    return "Workflow Doesn't Exists";
  }

  return (
    <>
      <Header
        displayCreate={false}
        displayMore={false}
        displayCreateTalez={true}
        headerTitle={`${params.workflowId}/Talez`}
      />
      <div className="flex flex-col gap-2 overflow-y-auto h-[calc(100%-120px)] no-scrollbar">
        <div className={styles.talez_parent_container}>
          {(isLoadingTales || isRefetchingTales) &&
            Array.from({ length: LIMIT }).map((_, index) => (
              <TalezLoader key={index} />
            ))}
          {data?.tales &&
            !isLoadingTales &&
            !isRefetchingTales &&
            data?.tales.map((tale: talesResponseProps, index: number) => (
              <TalezCard tale={tale} key={index} />
            ))}
        </div>
      </div>
      <div className="flex justify-center gap-4 items-center">
        {talesOffset > 0 ? (
          <Button
            variant={"link"}
            onClick={onFetchPrevious}
            disabled={talesOffset <= 0}
          >
            Go to Previous
          </Button>
        ) : null}

        <Button
          variant={"link"}
          onClick={onFetchMore}
          disabled={
            talesOffset + LIMIT >= data?.totalPages * LIMIT ||
            !data ||
            data.length < LIMIT
          }
        >
          Show More
        </Button>
      </div>
    </>
  );
};

export default Talez;
