import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/ui/card";

import { talesResponseProps } from "../types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/ui/ui/tooltip";
import { Button } from "@/shared/ui/ui/button";
import { toast } from "@/shared/ui/ui/use-toast";
import { BookmarkCheck } from "lucide-react";

interface talezCardProps {
  tale: talesResponseProps;
  handleCardClick: (taleId: string) => void;
}

const TalezCard = ({ tale, handleCardClick }: talezCardProps) => {
  const onTalezCardClick = (id: string) => {
    handleCardClick(id);
  };

  return (
    <>
      <Card
        className="cursor-pointer border-foreground maxMd:border-0 maxMd:border-b maxMd:rounded-none"
        onClick={() => onTalezCardClick(tale?._id)}
      >
        <CardHeader>
          <CardTitle className="font-medium hover:text-primary">
            {tale?.title}
          </CardTitle>
          <CardDescription>Authored by {tale?.author_name}</CardDescription>
        </CardHeader>
        <CardContent className="h-[50px] break-words mb-2 rounded-lg overflow-hidden">
          <p>{tale?.description}</p>
        </CardContent>
        <CardFooter>
          <div className="flex gap-2 justify-end items-center w-full">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={"link"}
                    className="hover:!text-primary hover:!bg-pattensBlue"
                    onClick={(e) => {
                      e.stopPropagation();
                      toast({
                        title: "Can't wait anymore for this feature to ship!",
                        description:
                          "Ah you might need to wait for the next iteration to add this to bookmark",
                      });
                    }}
                  >
                    <BookmarkCheck size={16} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="text-muted-foreground">
                  <p>Bookmark</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default TalezCard;
