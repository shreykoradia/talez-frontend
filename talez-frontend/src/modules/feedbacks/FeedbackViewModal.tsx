import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/ui/dialog";
import React, { SetStateAction } from "react";
import { useGetFeedbackId } from "./hooks/useGetFeedbackId";
import { Card, CardContent, CardFooter } from "@/shared/ui/ui/card";
import { useMutation } from "@tanstack/react-query";
import { upvote } from "./api/upvote";
import { toast } from "@/shared/ui/ui/use-toast";
import { useParams } from "react-router";
import { downvote } from "./api/downvote";
import { useGetReactionCount } from "./hooks/useGetReactionCount";
import { useGetReactionType } from "./hooks/useGetReactionType";
import clsx from "clsx";

interface feedbackViewModalProps {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  feedbackId: string | undefined;
}

const FeedbackViewModal = ({
  open,
  setOpen,
  feedbackId,
}: feedbackViewModalProps) => {
  const { data } = useGetFeedbackId({ feedbackId: feedbackId });

  const paramskey = useParams();
  const params = {
    taleId: paramskey.taleId || 0,
  };
  const upvoteValues = {
    feedbackId: feedbackId,
    vote_type: "upvote",
  };

  const downVoteValues = {
    feedbackId: feedbackId,
    vote_type: "downvote",
  };

  const feedbackParams = {
    feedbackId: feedbackId || 0,
  };

  const { data: reactionCountData, refetch: reactionCountFn } =
    useGetReactionCount(feedbackParams);

  const { data: reactionTypeData, refetch: reactionTypeFn } =
    useGetReactionType(feedbackParams);

  const voteType = reactionTypeData?.vote_type?.vote_type;

  const { mutate: upvoteFn } = useMutation({
    mutationFn: () => upvote(upvoteValues, params),
    onSuccess: () => {
      toast({
        title: "Upvote added successfully",
        description: "One more user will get happy and trust us more",
      }),
        reactionTypeFn();
      reactionCountFn();
    },
  });

  const { mutate: downvoteFn } = useMutation({
    mutationFn: () => downvote(downVoteValues, params),
    onSuccess: () => {
      toast({
        title: "Downvote added successfully",
        description: "One more user will love using what we do, Like you",
      }),
        reactionTypeFn();
      reactionCountFn();
    },
  });

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-8">
          <DialogHeader>
            <div className="flex justify-between items-center mr-2">
              <div>
                <DialogTitle>Feedback</DialogTitle>
                <DialogDescription>
                  Your feedback, made our day❤️
                </DialogDescription>
              </div>
              <div className="flex gap-2 items-center">
                <button onClick={() => upvoteFn()}>
                  <ArrowBigUp
                    strokeWidth={1.5}
                    className={clsx({ upvoted: voteType === "upvote" })}
                  />
                </button>
                <button onClick={() => downvoteFn()}>
                  <ArrowBigDown
                    strokeWidth={1.5}
                    className={clsx({ downvoted: voteType === "downvote" })}
                  />
                </button>
              </div>
            </div>
          </DialogHeader>
          <Card className="border-none outline-none shadow-none">
            <CardContent className="px-0 max-h-[600px] h-full overflow-scroll no-scrollbar">
              <p>{data?.feedback?.feedback}</p>
            </CardContent>
            <CardFooter className="!px-0">
              <div className="flex justify-between items-center w-full">
                <div className="text-xs text-primary">
                  {reactionCountData?.response?.count}{" "}
                  {reactionCountData?.response?.count_type}
                </div>
                <div className="text-xs text-primary">
                  <p>Authored by {data?.feedback?.feedback_author_name}</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FeedbackViewModal;
