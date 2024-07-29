import React from "react";
import clsx from "clsx";

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
import { feedbackData } from "@/modules/feedbacks/types";
import FeedbackOverview from "@/modules/feedbacks";
import { Button } from "@/shared/ui/ui/button";
import useGetFeedbacks from "@/modules/feedbacks/hooks/useGetFeedbacks";
import Loader from "@/shared/components/loader/Loader";
import { Skeleton } from "@/shared/ui/ui/skeleton";

import TalezDetailView from "./TalezDetailView";
import { talesResponseProps } from "../types";
import Attachments from "@/modules/attachments";

interface talezDetailViewProp {
  taleDetail: talesResponseProps;
  selectedTale: string | null;
  isLoading: boolean;
  handleModeChange?: (feedback: string) => void;
  onClose?: CallableFunction;
}

const TalezDetailCard = ({
  taleDetail,
  handleModeChange,
  selectedTale,
  onClose,
  isLoading,
}: talezDetailViewProp) => {
  const {
    data: feedbackData,
    hasNextPage,
    isFetchingNextPage,
    isLoading: isFeedbackLoading,
    fetchNextPage,
  } = useGetFeedbacks({
    taleId: selectedTale || "",
  });

  dayjs.extend(relativeTime);

  return (
    <>
      <Card className="cursor-pointer border-foreground maxMd:border-0 maxMd:border-b maxMd:rounded-none h-full maxMd:bg-transparent">
        <CardHeader>
          {isLoading ? (
            <div className="grid gap-2">
              <Skeleton className="h-4" />
              <Skeleton className="h-2 w-1/2" />
            </div>
          ) : (
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>{taleDetail?.title}</CardTitle>
                <CardDescription>
                  Published 🗨️ {dayjs(taleDetail?.createdAt).fromNow()}
                </CardDescription>
              </div>
              <Button
                variant={"ghost"}
                size={"sm"}
                onClick={() => onClose && onClose()}
              >
                Close
              </Button>
            </div>
          )}
        </CardHeader>
        <CardContent className="h-[calc(100%-140px)] overflow-x-hidden overflow-y-scroll no-scrollbar maxMd:px-2 maxMd:h-[calc(100%-195px)]">
          <div className="md:hidden flex flex-wrap gap-2 justify-start items-center">
            <CreateFeedbackModal taleId={selectedTale || ""} />
            <Attachments selectedTale={selectedTale || ""} />
            <FeedbackOverview />
          </div>
          <div className={clsx(styles.tabs_talez_container, "maxMd:hidden")}>
            <Tabs defaultValue={"description"}>
              <TabsList className="grid w-full grid-cols-2 sticky top-0 bg-background">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="feedback">Feedbacks</TabsTrigger>
              </TabsList>
              <TabsContent value="description">
                <TalezDetailView tale={taleDetail} isLoading={isLoading} />
              </TabsContent>
              <TabsContent value="feedback">
                <div className="w-full flex justify-end pb-4">
                  <CreateFeedbackModal taleId={selectedTale || ""} />
                </div>
                <div className="flex flex-col gap-4 w-full h-full">
                  {isFeedbackLoading || (isFetchingNextPage && <Loader />)}
                  {!isFetchingNextPage &&
                    !isFeedbackLoading &&
                    feedbackData?.map((data, index) => (
                      <React.Fragment key={index}>
                        {data?.data.feedbacks.feedbacks.map(
                          (feedback: feedbackData) => (
                            <FeedbackCard
                              key={feedback?._id}
                              feedbackData={feedback}
                              onOpenViewMode={(feedbackId: string) => {
                                if (handleModeChange) {
                                  handleModeChange(feedbackId);
                                }
                              }}
                            />
                          )
                        )}
                      </React.Fragment>
                    ))}
                  {!hasNextPage ? (
                    <p className="text-primary text-center">
                      You are all caught up
                    </p>
                  ) : (
                    <Button
                      disabled={!hasNextPage || isFetchingNextPage}
                      variant={"link"}
                      onClick={() => fetchNextPage()}
                    >
                      Show More
                    </Button>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <div className="md:hidden">
            <TalezDetailView tale={taleDetail} isLoading={isLoading} />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default TalezDetailCard;
