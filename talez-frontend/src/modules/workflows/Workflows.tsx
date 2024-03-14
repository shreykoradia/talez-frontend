import styles from "@/assets/css/workflow.module.css";
import Header from "@/shared/components/header/Header";

import WorkflowCard from "./components/WorkflowCard";
import { workflowResponse } from "./types";
import useGetWorkflows from "./hooks/useGetWorkflows";
import clsx from "clsx";
import { Button } from "@/shared/ui/ui/button";
import { useEffect, useState } from "react";
import { LIMIT } from "@/shared/constant";

const Workflows = () => {
  const [workflowOffset, setWorkflowOffset] = useState(0);
  const { data: workflowsData, refetchWorkflowsFn } =
    useGetWorkflows(workflowOffset);

  const onFetchMore = () => {
    setWorkflowOffset(workflowOffset + LIMIT);
  };

  useEffect(() => {
    console.log(workflowOffset);
    if (workflowOffset) {
      refetchWorkflowsFn();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [workflowOffset]);

  return (
    <>
      <Header displayMore={false} displayCreate={true} />
      <div className="grid place-items-center gap-2 overflow-y-auto h-[calc(100%-88px)] no-scrollbar">
        <div className={clsx(styles.workflow_parent_container, "no-scrollbar")}>
          {workflowsData
            ? workflowsData?.workflows?.map(
                (workflow: workflowResponse, index: number) => (
                  <WorkflowCard workflow={workflow} key={index} />
                )
              )
            : null}
        </div>
        <Button variant={"link"} onClick={onFetchMore}>
          Show More
        </Button>
      </div>
    </>
  );
};

export default Workflows;
