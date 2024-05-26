import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/ui/card";
import { Archive, Heart } from "lucide-react";
import styles from "@/assets/css/workflow.module.css";
import { Button } from "@/shared/ui/ui/button";
import { workflowResponse } from "../types";
import { useNavigate } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/ui/ui/tooltip";
import { toast } from "@/shared/ui/ui/use-toast";

const WorkflowCard = ({ workflow }: { workflow: workflowResponse }) => {
  const navigate = useNavigate();
  const onWorkflowCardClick = (id: string) => {
    navigate(`/${id}/tale`);
  };

  return (
    <Card
      className="maxMd:w-full maxMd:!border-x-transparent cursor-pointer w-[21.875rem]"
      onClick={() => onWorkflowCardClick(workflow?._id)}
    >
      <CardHeader className="maxMd:px-0">
        <div className="flex justify-between  items-center">
          <div className="maxMd:px-4 w-full">
            <CardTitle className="font-medium">
              {workflow?.workFlowTitle}
            </CardTitle>
            <CardDescription>{`Authored by ${workflow?.authorName}`}</CardDescription>
          </div>
          <div className="flex justify-end w-full py-1 px-2 md:hidden">
            <div className="flex justify-end items-center w-full">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant={"link"}
                      className={styles.workflow_button_container}
                      onClick={(e) => {
                        e.stopPropagation();
                        toast({
                          title: "Can't wait anymore for this feature to ship!",
                          description:
                            "Ah you might need to wait for the next iteration to add this to archives",
                        });
                      }}
                    >
                      <Archive size={16} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="text-accent-foreground border border-accent">
                    <p>Archives</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant={"link"}
                      className={styles.workflow_button_container}
                      onClick={(e) => {
                        e.stopPropagation();
                        toast({
                          title: "Can't wait anymore for this feature to ship!",
                          description:
                            "Ah you might need to wait for the next iteration to add this to favourites",
                        });
                      }}
                    >
                      <Heart size={16} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="text-accent-foreground border border-accent">
                    <p>Favourites</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="h-[9.375rem] text-justify break-words rounded-lg overflow-y-auto no-scrollbar">
        {workflow?.description}
      </CardContent>
      <CardFooter className="maxMd:hidden px-0">
        <div className="flex justify-end w-full py-1 px-2">
          <div className="flex justify-end items-center w-full">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={"link"}
                    className={styles.workflow_button_container}
                    onClick={(e) => {
                      e.stopPropagation();
                      toast({
                        title: "Can't wait anymore for this feature to ship!",
                        description:
                          "Ah you might need to wait for the next iteration to add this to archives",
                      });
                    }}
                  >
                    <Archive size={16} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="text-accent-foreground border border-accent">
                  <p>Archives</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={"link"}
                    className={styles.workflow_button_container}
                    onClick={(e) => {
                      e.stopPropagation();
                      toast({
                        title: "Can't wait anymore for this feature to ship!",
                        description:
                          "Ah you might need to wait for the next iteration to add this to favourites",
                      });
                    }}
                  >
                    <Heart size={16} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="text-accent-foreground border border-accent">
                  <p>Favourites</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default WorkflowCard;
