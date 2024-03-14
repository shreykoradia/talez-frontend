import styles from "@/assets/css/workflow.module.css";
import Header from "@/shared/components/header/Header";

import WorkflowCard from "./components/WorkflowCard";
import { workflowResponse } from "./types";
import useGetWorkflows from "./hooks/useGetWorkflows";
import clsx from "clsx";

const Workflows = () => {
  const { data: workflowsData } = useGetWorkflows();

  return (
    <>
      <Header displayMore={false} displayCreate={true} />
      <div className={clsx(styles.workflow_parent_container, "no-scrollbar")}>
        {workflowsData
          ? workflowsData?.workflows?.map(
              (workflow: workflowResponse, index: number) => (
                <WorkflowCard workflow={workflow} key={index} />
              )
            )
          : null}
      </div>
    </>
  );
};

export default Workflows;
