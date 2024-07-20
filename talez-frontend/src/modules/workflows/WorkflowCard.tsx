import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/ui/card";
import { ChevronsUpDown } from "lucide-react";
import styles from "@/assets/css/workflow.module.css";
import { Button } from "@/shared/ui/ui/button";
import { workflowResponse } from "./types";
import { useNavigate } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/ui/ui/tooltip";
import clsx from "clsx";

const WorkflowCard = ({
  workflow,
  index,
}: {
  workflow: workflowResponse;
  index: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const onWorkflowCardClick = (id: string) => {
    navigate(`/${id}/talez`);
  };

  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded((prev) => !prev);
  };

  return (
    <Card
      className={clsx(
        "maxMd:w-full maxMd:border-1 border-foreground maxMd:rounded-lg cursor-pointer w-[21.875rem]"
      )}
      onClick={() => onWorkflowCardClick(workflow?._id)}
      key={index}
    >
      <CardHeader className="maxMd:px-0">
        <div className="flex justify-between items-center">
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
                      className={clsx(
                        styles.workflow_button_container,
                        "hidden maxMd:block"
                      )}
                      onClick={toggleExpand}
                    >
                      <ChevronsUpDown size={16} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="text-accent-foreground border border-accent">
                    {isExpanded ? <p>Show Less</p> : <p>Show More</p>}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent
        className={clsx(
          "break-words rounded-lg overflow-hidden transition-max-height duration-300 ease-in-out maxMd:pl-4",
          { "max-h-[5rem]": !isExpanded, "max-h-[20rem]": isExpanded }
        )}
      >
        {isExpanded ? (
          <p className="text-sm text-left">{workflow?.description}</p>
        ) : (
          <p className="text-ellipsis whitespace-nowrap overflow-hidden text-sm">
            {workflow?.description}
          </p>
        )}
      </CardContent>
      <CardFooter className="maxMd:hidden px-0">
        <div className="flex justify-end w-full py-1 px-2">
          <div className="flex justify-end items-center w-full">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={"link"}
                    className={clsx(styles.workflow_button_container)}
                    onClick={toggleExpand}
                  >
                    <ChevronsUpDown size={16} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="text-accent-foreground border border-accent">
                  {isExpanded ? <p>Show Less</p> : <p>Show More</p>}
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
