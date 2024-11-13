import { Button } from "@/shared/ui/ui/button";
import { useMutation } from "@tanstack/react-query";
import { AlertTriangle } from "lucide-react";
import { deleteWorkflow } from "../api/deleteWorkflow";
import { useNavigate, useParams } from "react-router-dom";
import { workflowArchivePayload } from "../types";

const WorkflowDanger = () => {
  const params = useParams();
  const navigate = useNavigate();
  const workflowId = params.workflowId || "";
  const { mutate: deleteFn } = useMutation({
    mutationFn: (data: workflowArchivePayload) => deleteWorkflow(data),
    onSuccess: () => {
      navigate("/dashboard");
    },
    onError: () => {},
  });

  return (
    <>
      <h3 className="text-xl font-semibold mb-8">Delete Workflow</h3>

      <div className="border border-destructive text-sm w-1/2 maxXl:w-full text-destructive p-4 mb-8 rounded-lg">
        <div className="flex justify-start items-center gap-4">
          <AlertTriangle size={32} />
          <p>
            Deleting the project will permanently delete all data stored in the
            project plugins for all environments. This can't be undone.
          </p>
        </div>
      </div>
      <Button
        type="button"
        variant={"destructive"}
        onClick={() => {
          console.log("first");
          deleteFn({ workflowId });
          console.log("second");
        }}
      >
        Delete Workflow
      </Button>
    </>
  );
};

export default WorkflowDanger;
