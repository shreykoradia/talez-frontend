import clsx from "clsx";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Settings } from "lucide-react";

import styles from "@/assets/css/talez.module.css";
import { LIMIT } from "@/shared/constant";
import { Button } from "@/shared/ui/ui/button";
import SharePopOver from "@/shared/components/header/SharePopOver";

import CreateTalesModal from "./components/CreateTalesModal";
import { useGetTales } from "./hooks/useGetTales";
import TalezCard from "./components/TalezCard";
import { talesResponseProps } from "./types";
import { useGetTaleById } from "./hooks/useGetTaleById";
import TalezDetailCard from "./components/TalezDetailCard";

import FeedbackViewModal from "../feedbacks/FeedbackViewModal";
import EmptyTalez from "./components/EmptyTalez";
import Loader from "@/shared/components/loader/Loader";

const TalezV2 = () => {
  const navigate = useNavigate();
  const params = useParams();
  const workflowId = params.workflowId || "";
  const [offset, setOffset] = useState<number>(0);
  const [selectedTale, setSelectedTale] = useState<string | null>(null);
  const [isDetailCardOpen, setIsDetailCardOpen] = useState<boolean>(false);

  const taleRef = useRef<HTMLDivElement>(null);

  const {
    data: talesData,
    refetchTalesFn,
    isLoadingTales,
  } = useGetTales({
    workflowId,
    offset,
  });

  const handleTalezCardClick = (taleId: string) => {
    if (window.innerWidth <= 768) {
      navigate(`/${taleId}/tale`);
    }
    setSelectedTale(taleId);
    setIsDetailCardOpen(!isDetailCardOpen);
  };

  const handleCloseSelectedTale = () => {
    if (selectedTale) {
      setIsDetailCardOpen(!isDetailCardOpen);
    }
    return;
  };

  const { data: taleDetail } = useGetTaleById({ taleId: selectedTale || "" });

  const [isFeedbackViewOpen, setIsFeedbackViewOpen] = useState<boolean>(false);
  const [feedbackId, setFeedbackId] = useState<string | undefined>();

  const handleViewModeChange = (feedbackId: string) => {
    setIsFeedbackViewOpen(!isFeedbackViewOpen);
    setFeedbackId(feedbackId);
  };

  const onFetchMore = () => {
    setOffset(offset + LIMIT);
    scrollToTop();
  };

  const onFetchPrevious = () => {
    if (offset - LIMIT < 0) return;
    setOffset((prevOffset) => prevOffset - LIMIT);
    scrollToTop();
  };

  const scrollToTop = () => {
    if (taleRef.current) {
      taleRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  dayjs.extend(relativeTime);

  useEffect(() => {
    if (offset >= 0) {
      refetchTalesFn();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  if (talesData?.tales.length === 0) {
    return <EmptyTalez />;
  }

  if (isLoadingTales) {
    return <Loader />;
  }

  return (
    <>
      <section className="flex justify-between items-center px-2 py-4 w-full md:p-8">
        <p className="text-2xl maxMd:hidden">Talez</p>
        <div className="flex items-center gap-4 z-10 maxMd:justify-between maxMd:w-full">
          <CreateTalesModal />
          <div className="flex gap-2 items-center md:gap-4">
            <SharePopOver />
            <button>
              <Settings />
            </button>
          </div>
        </div>
      </section>
      <div className={styles.talez_main_container}>
        <div className={styles.talez_parent_view_container}>
          <div
            className={clsx(styles.talez_view_container, "no-scrollbar")}
            ref={taleRef}
          >
            {talesData?.tales?.map((tale: talesResponseProps) => (
              <TalezCard
                tale={tale}
                key={tale?._id}
                handleCardClick={handleTalezCardClick}
                isTaleOpen={isDetailCardOpen}
              />
            ))}
            <div className="flex gap-4 justify-evenly items-center">
              {offset > 0 ? (
                <Button
                  variant={"link"}
                  onClick={onFetchPrevious}
                  disabled={offset <= 0}
                >
                  Go to Previous
                </Button>
              ) : null}
              {talesData?.totalPages > 1 ? (
                <Button
                  variant={"link"}
                  onClick={onFetchMore}
                  disabled={
                    offset + LIMIT >= talesData?.totalPages * LIMIT ||
                    !talesData ||
                    talesData?.tales.length < LIMIT
                  }
                >
                  Show More
                </Button>
              ) : null}
            </div>
          </div>
          <div
            className={clsx(styles.talez_detail_view_container, {
              [styles.talez_detail_view_show]: isDetailCardOpen,
            })}
          >
            <TalezDetailCard
              taleDetail={taleDetail}
              selectedTale={selectedTale}
              handleModeChange={handleViewModeChange}
              onClose={handleCloseSelectedTale}
            />
          </div>
        </div>
      </div>
      {isFeedbackViewOpen ? (
        <FeedbackViewModal
          open={isFeedbackViewOpen}
          setOpen={setIsFeedbackViewOpen}
          feedbackId={feedbackId}
          taleId={selectedTale || ""}
        />
      ) : null}
    </>
  );
};

export default TalezV2;
