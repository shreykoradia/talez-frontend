import React from "react";
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
import { feedbackData } from "./types";

const FeedbackOverview = () => {
  const paramsKey = useParams();

  const params = {
    taleId: paramsKey.taleId || 0,
  };
  const {
    data: feedbackData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetFeedbacks(params);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"link"} className="text-black hover:text-primary">
          <MessageCircleCode strokeWidth={1.5} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Feedbacks</SheetTitle>
          <SheetDescription className="!mt-0">
            Every feedback is valuable as our users are to us
          </SheetDescription>
        </SheetHeader>
        <div className="py-4 px-2 flex flex-col justify-start items-center gap-2 max-h-[calc(100vh-96px)] overflow-y-scroll no-scrollbar w-full">
          {feedbackData?.map((data, index) => (
            <React.Fragment key={index}>
              {data?.data.feedbacks.feedbacks.map((feedback: feedbackData) => (
                <FeedbackCard feedbackData={feedback} key={feedback?._id} />
              ))}
            </React.Fragment>
          ))}
          <Button
            disabled={!hasNextPage || isFetchingNextPage}
            variant={"link"}
            onClick={() => fetchNextPage()}
          >
            {hasNextPage ? " Show More" : " Nothing more to Load"}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FeedbackOverview;
