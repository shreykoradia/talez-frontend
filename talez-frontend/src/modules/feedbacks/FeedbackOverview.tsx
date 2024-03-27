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

const FeedbackOverview = () => {
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
        <div className="p-4 flex flex-col justify-start items-center gap-2 max-h-[calc(100vh-96px)] overflow-y-scroll no-scrollbar w-full">
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FeedbackOverview;
