import styles from "@/assets/css/workflow.module.css";
import Header from "@/shared/components/header/Header";
import WorkflowCard from "./components/WorkflowCard";
import { useQuery } from "@tanstack/react-query";
import { getWorkflows } from "./api/getWorkflows";
import { workflowResponse } from "./types";

const Workflows = () => {
  const {
    data: workflowData,
    isLoading: isWorkflowsLoading,
    isError: isWorkflowError,
  } = useQuery({
    queryKey: ["get-workflows"],
    queryFn: getWorkflows,
  });
  const workflows = workflowData?.data?.workflows;
  if (isWorkflowsLoading) {
    return "Loading";
  }
  if (isWorkflowError) {
    return "Something Went Wrong";
  }
  return (
    <>
      <Header displayMore={false} displayCreate={true} />
      <div className={styles.workflow_parent_container}>
        {workflows
          ? workflows?.map((workflow: workflowResponse) => (
              <WorkflowCard workflow={workflow} />
            ))
          : null}
      </div>
    </>
  );
};

export default Workflows;
