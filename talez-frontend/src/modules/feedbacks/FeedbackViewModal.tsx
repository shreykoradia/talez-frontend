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
import { Card, CardContent } from "@/shared/ui/ui/card";

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

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-8">
          <DialogHeader>
            <div className="flex justify-between items-center mr-2">
              <div>
                <DialogTitle>Feedback</DialogTitle>
                <DialogDescription>
                  Every Feedback matters, Like you are to us!
                </DialogDescription>
              </div>
              <div className="flex gap-2 items-center">
                <button>
                  <ArrowBigUp strokeWidth={1.5} />
                </button>
                <button>
                  <ArrowBigDown strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </DialogHeader>
          <Card className="border-none outline-none shadow-none">
            <CardContent className="px-0 max-h-[600px] h-full overflow-scroll no-scrollbar">
              <p>{data?.feedback?.feedback}</p>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FeedbackViewModal;
