import clsx from "clsx";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Settings } from "lucide-react";

import styles from "@/assets/css/talez.module.css";

import CreateTalesModal from "./components/CreateTalesModal";
import { useGetTales } from "./hooks/useGetTales";
import TalezCard from "./components/TalezCard";
import { talesResponseProps } from "./types";
import { useGetTaleById } from "./hooks/useGetTaleById";
import TalezDetailCard from "./components/TalezDetailCard";

import useGetFeedbacks from "../feedbacks/hooks/useGetFeedbacks";
import FeedbackViewModal from "../feedbacks/FeedbackViewModal";

const TalezV2 = () => {
  const navigate = useNavigate();
  const params = useParams();
  const workflowId = params.workflowId || "";
  const [offset] = useState<number>(0);
  const [selectedTale, setSelectedTale] = useState<string | null>(null);
  const { data: talesData } = useGetTales({ workflowId, offset });
  const handleTalezCardClick = (taleId: string) => {
    if (window.innerWidth <= 768) {
      navigate(`/${taleId}/tale`);
    }
    setSelectedTale(taleId);
  };
  const { data: taleDetail } = useGetTaleById({ taleId: selectedTale || "" });
  const { data: feedbackData } = useGetFeedbacks({
    taleId: selectedTale || "",
  });
  const [isFeedbackViewOpen, setIsFeedbackViewOpen] = useState<boolean>(false);
  const [feedbackId, setFeedbackId] = useState<string | undefined>();

  const handleViewModeChange = (feedbackId: string) => {
    setIsFeedbackViewOpen(!isFeedbackViewOpen);
    setFeedbackId(feedbackId);
  };

  dayjs.extend(relativeTime);

  if (talesData?.tales.length === 0) {
    return (
      <>
        <section className="flex flex-col gap-2 justify-center items-center h-[calc(100%-74px)] w-full">
          <p className="text-balance text-center">
            Oh boi, No talez to brainstorm or get feedbacks, create a tale to
            brainstorm your product by clicking button below.
          </p>
          <CreateTalesModal />
        </section>
      </>
    );
  }
  return (
    <>
      <section className="flex justify-between items-center px-2 py-4 w-full md:p-8">
        <p className="text-2xl maxMd:hidden">Talez</p>
        <div className="flex items-center gap-4 z-10 maxMd:justify-between maxMd:w-full">
          <CreateTalesModal />
          <button>
            <Settings />
          </button>
        </div>
      </section>
      <div className={styles.talez_main_container}>
        <div className={styles.talez_parent_view_container}>
          <div className={clsx(styles.talez_view_container, "no-scrollbar")}>
            {talesData?.tales?.map((tale: talesResponseProps) => (
              <TalezCard
                tale={tale}
                key={tale?._id}
                handleCardClick={handleTalezCardClick}
              />
            ))}
          </div>
          <div
            className={clsx(styles.talez_detail_view_container, {
              [styles.talez_detail_view_show]: selectedTale,
            })}
          >
            <TalezDetailCard
              taleDetail={taleDetail}
              feedbackData={feedbackData}
              selectedTale={selectedTale}
              handleModeChange={handleViewModeChange}
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
