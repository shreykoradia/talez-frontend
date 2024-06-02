import clsx from "clsx";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import styles from "@/assets/css/talez.module.css";
import CreateTalesModal from "./components/CreateTalesModal";
import { Settings } from "lucide-react";
import { useGetTales } from "./hooks/useGetTales";
import { useParams } from "react-router-dom";
import { useState } from "react";
import TalezCard from "./components/TalezCard";
import { talesResponseProps } from "./types";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/ui/tabs";
import { useGetTaleById } from "./hooks/useGetTaleById";
import useGetFeedbacks from "../feedbacks/hooks/useGetFeedbacks";
import FeedbackCard from "../feedbacks/FeedbackCard";
import { feedbackData } from "../feedbacks/types";
import FeedbackViewModal from "../feedbacks/FeedbackViewModal";

const TalezV2 = () => {
  const params = useParams();
  const workflowId = params.workflowId || "";
  const [offset] = useState<number>(0);
  const [selectedTale, setSelectedTale] = useState<string | null>(null);
  const { data: talesData } = useGetTales({ workflowId, offset });
  const handleTalezCardClick = (taleId: string) => {
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
            <Card className="cursor-pointer border-foreground maxMd:border-0 maxMd:border-b maxMd:rounded-none h-full">
              <CardHeader>
                <CardTitle>{taleDetail?.title}</CardTitle>
                <CardDescription>
                  Published 🗨️ {dayjs(taleDetail?.created_at).fromNow()}
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[calc(100%-140px)] overflow-y-scroll no-scrollbar">
                <div className={styles.tabs_talez_container}>
                  <Tabs defaultValue={"description"}>
                    <TabsList className="grid w-full grid-cols-2 sticky top-0 bg-background">
                      <TabsTrigger value="description">Description</TabsTrigger>
                      <TabsTrigger value="feedback">Feedbacks</TabsTrigger>
                    </TabsList>
                    <TabsContent value="description">
                      <TaleDetailView tale={taleDetail?.description} />
                    </TabsContent>
                    <TabsContent value="feedback">
                      <div className="flex flex-col gap-4 w-full h-full">
                        {feedbackData?.feedbacks.length === 0 ? (
                          <>
                            <section className="flex flex-col gap-2 justify-center items-center h-full w-full">
                              <p className="text-balance text-center">
                                No No No, There are no feedbacks on your talez
                                to brainstorm the solutions, get feedbacks by
                                sharing it with your team add it by writing the
                                emails in the share pop over above or create a
                                feedback meanwhile they join by clicking below
                              </p>
                            </section>
                          </>
                        ) : null}
                        {feedbackData?.feedbacks.map(
                          (feedback: feedbackData) => (
                            <FeedbackCard
                              key={feedback?._id}
                              feedbackData={feedback}
                              onOpenViewMode={(feedbackId: string) =>
                                handleViewModeChange(feedbackId)
                              }
                            />
                          )
                        )}
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {isFeedbackViewOpen ? (
        <FeedbackViewModal
          open={isFeedbackViewOpen}
          setOpen={setIsFeedbackViewOpen}
          feedbackId={feedbackId}
        />
      ) : null}
    </>
  );
};

export default TalezV2;

const TaleDetailView = ({ tale }: { tale: string }) => {
  return (
    <>
      <section className="p-4 h-full">
        <p className="text-md w-full break-words">{tale}</p>
      </section>
    </>
  );
};
