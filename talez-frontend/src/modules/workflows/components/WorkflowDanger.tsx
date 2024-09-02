import { Button } from "@/shared/ui/ui/button";
import { AlertTriangle } from "lucide-react";

const WorkflowDanger = () => {
  return (
    <>
      <h3 className="text-xl font-semibold mb-8">Delete Workflow</h3>
      <Button variant={"destructive"}>
        <AlertTriangle size={16} className="mr-2" /> Delete Workflow
      </Button>
    </>
  );
};

export default WorkflowDanger;
