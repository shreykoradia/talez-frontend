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
import { toast } from "@/shared/ui/ui/use-toast";
import { BookmarkCheck } from "lucide-react";
import { Button } from "@/shared/ui/ui/button";
import styles from "@/assets/css/talez.module.css";
import clsx from "clsx";

interface talezCardProps {
  tale: talesResponseProps;
  isTaleOpen: boolean;
  handleCardClick: (taleId: string) => void;
}

const TalezCard = ({ tale, handleCardClick, isTaleOpen }: talezCardProps) => {
  const onTalezCardClick = (id: string) => {
    handleCardClick(id);
  };

  return (
    <>
      <div className={styles.talez_card_container}>
        <Card className="border-foreground maxMd:border-0 maxMd:border-b maxMd:rounded-none">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="font-medium hover:text-primary break-words">
                  {tale?.title}
                </CardTitle>
                <CardDescription>
                  Authored by {tale?.author_name}
                </CardDescription>
              </div>
              <button
                className={clsx(
                  { [styles.open_talez_button]: !isTaleOpen },
                  "hidden"
                )}
                onClick={() => onTalezCardClick(tale?._id)}
              >
                open
              </button>
            </div>
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
                  <TooltipContent>
                    <p>Bookmark</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default TalezCard;
