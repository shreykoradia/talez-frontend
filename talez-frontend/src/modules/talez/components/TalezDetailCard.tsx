import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/ui/tabs";
import CreateFeedbackModal from "@/modules/feedbacks/component/CreateFeedbackModal";
import FeedbackCard from "@/modules/feedbacks/FeedbackCard";
import styles from "@/assets/css/talez.module.css";
import { feedbackData, feedbackResponseData } from "@/modules/feedbacks/types";

import TalezDetailView from "./TalezDetailView";
import { talesResponseProps } from "../types";
import clsx from "clsx";
import FeedbackOverview from "@/modules/feedbacks";

interface talezDetailViewProp {
  taleDetail: talesResponseProps;
  feedbackData?: feedbackResponseData;
  selectedTale: string | null;
  handleModeChange?: (feedback: string) => void;
}

const TalezDetailCard = ({
  taleDetail,
  handleModeChange,
  feedbackData,
  selectedTale,
}: talezDetailViewProp) => {
  dayjs.extend(relativeTime);

  return (
    <>
      <Card className="cursor-pointer border-foreground maxMd:border-0 maxMd:border-b maxMd:rounded-none h-full maxMd:bg-transparent">
        <CardHeader>
          <CardTitle>{taleDetail?.title}</CardTitle>
          <CardDescription>
            Published 🗨️ {dayjs(taleDetail?.created_at).fromNow()}
          </CardDescription>
        </CardHeader>
        <CardContent className="h-[calc(100%-140px)] overflow-y-scroll no-scrollbar maxMd:px-2 maxMd:h-[calc(100%-195px)]">
          <div className="md:hidden flex justify-between items-center">
            <CreateFeedbackModal taleId={selectedTale || ""} />
            <FeedbackOverview />
          </div>
          <div className={clsx(styles.tabs_talez_container, "maxMd:hidden")}>
            <Tabs defaultValue={"description"}>
              <TabsList className="grid w-full grid-cols-2 sticky top-0 bg-background">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="feedback">Feedbacks</TabsTrigger>
              </TabsList>
              <TabsContent value="description">
                <TalezDetailView tale={taleDetail?.description} />
              </TabsContent>
              <TabsContent value="feedback">
                <div className="w-full flex justify-end pb-4">
                  <CreateFeedbackModal taleId={selectedTale || ""} />
                </div>
                <div className="flex flex-col gap-4 w-full h-full">
                  {feedbackData?.feedbacks.length === 0 ? (
                    <>
                      <section className="flex flex-col gap-2 justify-center items-center h-full w-full">
                        <p className="text-balance text-center">
                          No No No, There are no feedbacks on your talez to
                          brainstorm the solutions, get feedbacks by sharing it
                          with your team add it by writing the emails in the
                          share pop over above or create a feedback meanwhile
                          they join by clicking below
                        </p>
                      </section>
                    </>
                  ) : null}
                  {feedbackData?.feedbacks.map((feedback: feedbackData) => (
                    <FeedbackCard
                      key={feedback?._id}
                      feedbackData={feedback}
                      onOpenViewMode={(feedbackId: string) => {
                        if (handleModeChange) {
                          handleModeChange(feedbackId);
                        }
                        return;
                      }}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <div className="md:hidden">
            <TalezDetailView tale={taleDetail?.description} />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default TalezDetailCard;
