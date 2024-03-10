import styles from "@/assets/css/workflow.module.css";
import Header from "@/shared/components/header/Header";
import WorkflowCard from "./components/WorkflowCard";

const Workflows = () => {
  return (
    <>
      <Header displayMore={false} displayCreate={true} />
      <div className={styles.workflow_parent_container}>
        <WorkflowCard />
      </div>
    </>
  );
};

export default Workflows;
