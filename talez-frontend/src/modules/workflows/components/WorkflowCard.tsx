import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/ui/card";
import { Archive } from "lucide-react";
import styles from "@/assets/css/workflow.module.css";
import { Button } from "@/shared/ui/ui/button";
import { workflowResponse } from "../types";

const WorkflowCard = ({ workflow }: { workflow: workflowResponse }) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{workflow?.workFlowTitle}</CardTitle>
        <CardDescription>{`Authored by ${workflow?.authorName}`}</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-secondary-foreground h-[150px] break-words rounded-lg overflow-y-auto no-scrollbar">
        {workflow?.description}
      </CardContent>
      <CardFooter>
        <div className="flex justify-end w-full pt-1">
          <Button
            variant={"ghost"}
            className={styles.workflow_button_container}
          >
            <Archive size={16} />
            Archive
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default WorkflowCard;
