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
      className="w-[21.875rem] cursor-pointer card_hover_primary"
      onClick={() => onWorkflowCardClick(workflow?._id)}
    >
      <CardHeader>
        <CardTitle className="font-medium hover:text-primary">
          {workflow?.workFlowTitle}
        </CardTitle>
        <CardDescription>{`Authored by ${workflow?.authorName}`}</CardDescription>
      </CardHeader>
      <CardContent className="h-[9.375rem] text-justify break-words rounded-lg overflow-y-auto no-scrollbar">
        {workflow?.description}
      </CardContent>
      <CardFooter>
        <div className="flex justify-end w-full pt-1">
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
                <TooltipContent className="text-muted-foreground">
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
                <TooltipContent className="text-muted-foreground">
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
