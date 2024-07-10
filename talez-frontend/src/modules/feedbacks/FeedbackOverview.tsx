import React, { useState } from "react";
import { Button } from "@/shared/ui/ui/button";

import { MessageCircleCode } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/ui/ui/sheet";

import FeedbackCard from "./FeedbackCard";
import useGetFeedbacks from "./hooks/useGetFeedbacks";
import { useParams } from "react-router-dom";
import FeedbackViewModal from "./FeedbackViewModal";
import { feedbackData } from "./types";

const FeedbackOverview = () => {
  const paramsKey = useParams();
  const [sheetOpen, setSheetOpen] = useState<boolean>(false);
  const [isFeedbackViewOpen, setIsFeedbackViewOpen] = useState<boolean>(false);
  const [feedbackId, setFeedbackId] = useState<string | undefined>();

  const handleViewModeChange = (feedbackId: string) => {
    setSheetOpen(!sheetOpen);
    setIsFeedbackViewOpen(!isFeedbackViewOpen);
    setFeedbackId(feedbackId);
  };

  const params = {
    taleId: paramsKey.taleId || 0,
  };

  const {
    data: feedbackData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading: isLoadingFeedback,
  } = useGetFeedbacks(params);

  return (
    <>
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger asChild>
          <Button variant={"link"}>
            <MessageCircleCode strokeWidth={1.5} />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-divaMecha">Feedbacks</SheetTitle>
            <SheetDescription className="!mt-0 text-muted">
              Every feedback matters', Like you are to us!
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col justify-start items-center pt-2 gap-2 max-h-[calc(100vh-6rem)] overflow-y-scroll no-scrollbar w-full">
            {!isFetchingNextPage &&
              !isLoadingFeedback &&
              feedbackData?.map((data, index) => (
                <React.Fragment key={index}>
                  {data?.data.feedbacks.feedbacks.map(
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
                </React.Fragment>
              ))}
            {!isLoadingFeedback && feedbackData && feedbackData.length === 0 ? (
              <p className="text-primary">You are all caught up</p>
            ) : (
              hasNextPage && (
                <Button
                  disabled={isFetchingNextPage}
                  variant={"link"}
                  onClick={() => fetchNextPage()}
                >
                  Show More
                </Button>
              )
            )}
          </div>
        </SheetContent>
      </Sheet>
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

export default FeedbackOverview;
