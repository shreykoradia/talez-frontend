import styles from "@/assets/css/workflow.module.css";
import Header from "@/shared/components/header/Header";
import { Card, CardDescription, CardTitle } from "@/shared/ui/ui/card";

const Workflows = () => {
  return (
    <>
      <Header displayMore={false} displayCreate={true} />
      <div className={styles.workflow_parent_container}>
        <Card className="w-[300px]">
          <CardTitle>Talez</CardTitle>
          <CardDescription>
            Your Neighbourly Product Managment Tool
          </CardDescription>
        </Card>
      </div>
    </>
  );
};

export default Workflows;
