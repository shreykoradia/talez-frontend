import styles from "@/assets/css/workflow.module.css";
import Header from "@/shared/components/header/Header";

import WorkflowCard from "./components/WorkflowCard";
import { workflowResponse } from "./types";
import useGetWorkflows from "./hooks/useGetWorkflows";
import clsx from "clsx";
import { Button } from "@/shared/ui/ui/button";
import { useEffect, useState } from "react";
import { LIMIT } from "@/shared/constant";
import WorkflowLoaders from "@/shared/components/loaders/WorkflowLoaders";
import ResponseNotFound from "@/shared/components/not-found/ResponseNotFound";
import { Info, Workflow } from "lucide-react";

const Workflows = () => {
  const [workflowOffset, setWorkflowOffset] = useState(0);
  const {
    data: workflowsData,
    isLoading: isWorkflowsLoading,
    isRefetching: isWorkflowRefetching,
    refetchWorkflowsFn,
  } = useGetWorkflows(workflowOffset);

  const onFetchMore = () => {
    setWorkflowOffset(workflowOffset + LIMIT);
  };

  const onFetchPrevious = () => {
    if (workflowOffset - LIMIT < 0) return;
    setWorkflowOffset((prevOffset) => prevOffset - LIMIT);
  };

  useEffect(() => {
    if (workflowOffset >= 0) {
      refetchWorkflowsFn();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [workflowOffset]);

  return (
    <>
      <Header
        displayMore={false}
        displayCreate={true}
        headerTitle="Workflows"
        displayCreateTalez={false}
      />
      <div className="overflow-y-auto h-[calc(100%-120px)] max-h-full no-scrollbar">
        <div
          className={clsx(styles.workflow_parent_container, "no-scrollbar", {
            "h-full": workflowsData?.workflows?.length === 0,
          })}
        >
          <div className="bg-pattensBlue w-full font-medium text-sm flex gap-2 items-center rounded-sm p-2 sticky top-0">
            <Info size={20} />
            <p>
              Currently you can create{" "}
              <span className="text-primary">Three</span> workflows at max
              during the MVP Phase Development, we are eager to on-board users
              once we iterate the current version of application to the next
              level, Thanks by Team Talez
            </p>
          </div>
          {(isWorkflowsLoading || isWorkflowRefetching) &&
            Array.from({ length: LIMIT }).map((_, index) => (
              <WorkflowLoaders key={index} />
            ))}
          {workflowsData &&
            !isWorkflowRefetching &&
            !isWorkflowsLoading &&
            workflowsData?.workflows?.map(
              (workflow: workflowResponse, index: number) => (
                <WorkflowCard workflow={workflow} key={index} />
              )
            )}
          {workflowsData?.workflows?.length === 0 && (
            <ResponseNotFound
              icon={
                <Workflow size={60} className="mx-auto hover:stroke-primary" />
              }
              title="No Workflows Found"
              description="You have not added any workflows. Add one by clicking Create Workflow."
            />
          )}
        </div>
      </div>
      {workflowsData?.workflows?.length > 0 &&
        workflowsData?.totalPages > 1 && (
          <div className="flex gap-4 justify-center items-center">
            {workflowOffset > 0 ? (
              <Button
                variant={"link"}
                onClick={onFetchPrevious}
                disabled={workflowOffset <= 0}
              >
                Go to Previous
              </Button>
            ) : null}
            <Button
              variant={"link"}
              onClick={onFetchMore}
              disabled={
                workflowOffset + LIMIT >= workflowsData?.totalPages * LIMIT ||
                !workflowsData ||
                workflowsData.workflows.length < LIMIT
              }
            >
              Show More
            </Button>
          </div>
        )}
    </>
  );
};

export default Workflows;
