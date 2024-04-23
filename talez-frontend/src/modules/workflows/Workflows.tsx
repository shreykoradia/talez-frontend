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

const Workflows = () => {
  const [workflowOffset, setWorkflowOffset] = useState(0);
  const {
    data: workflowsData,
    isLoading: isWorkflowsLoading,
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
      <div className="overflow-y-auto h-[calc(100%-120px)] no-scrollbar">
        <div className={clsx(styles.workflow_parent_container, "no-scrollbar")}>
          {isWorkflowsLoading &&
            Array.from({ length: LIMIT }).map((_, index) => (
              <WorkflowLoaders key={index} />
            ))}
          {workflowsData && !isWorkflowsLoading
            ? workflowsData?.workflows?.map(
                (workflow: workflowResponse, index: number) => (
                  <WorkflowCard workflow={workflow} key={index} />
                )
              )
            : null}
        </div>
      </div>
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
    </>
  );
};

export default Workflows;
