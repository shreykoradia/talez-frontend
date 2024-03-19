import Header from "@/shared/components/header/Header";
import { useParams } from "react-router-dom";
import styles from "@/assets/css/talez.module.css";
import TalezCard from "./components/TalezCard";
import { Button } from "@/shared/ui/ui/button";
import { useGetTales } from "./hooks/useGetTales";
import { useEffect, useState } from "react";
import { LIMIT } from "@/shared/constant";
import { talesResponseProps } from "./types";

const Talez = () => {
  const params = useParams();
  const [talesOffset, setTalesOffset] = useState<number>(0);

  const requestParams = {
    offset: talesOffset,
    workflowId: params?.workflowId || 0,
  };
  const { data } = useGetTales(requestParams);
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
      <div className="grid place-items-center gap-2 overflow-y-auto h-[calc(100%-88px)] no-scrollbar">
        <div className={styles.talez_parent_container}>
          {data?.tales.map((tale: talesResponseProps, index: number) => (
            <TalezCard tale={tale} key={index} />
          ))}
        </div>
        <div className="flex gap-4 items-center">
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
      </div>
    </>
  );
};

export default Talez;
