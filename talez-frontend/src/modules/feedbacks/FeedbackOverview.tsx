import { Button } from "@/shared/ui/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/shared/ui/ui/drawer";
import { MessageCircleCode, MoveLeft, MoveRight } from "lucide-react";
import FeedbackCard from "./FeedbackCard";

const FeedbackOverview = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant={"link"} className="text-black hover:text-primary">
          <MessageCircleCode strokeWidth={1.5} />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Feedbacks</DrawerTitle>
          <DrawerDescription>
            Every feedback is valuable as our users are to us
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex items-center gap-2 px-4 w-full">
          <button>
            <MoveLeft />
          </button>
          <div className="p-4 flex justify-start items-center gap-2 overflow-x-scroll no-scrollbar w-full">
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
          </div>
          <button>
            <MoveRight />
          </button>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default FeedbackOverview;
