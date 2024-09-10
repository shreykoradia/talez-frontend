import { Button } from "@/shared/ui/ui/button";
import { toast } from "@/shared/ui/ui/use-toast";
import { AlertTriangle } from "lucide-react";

const WorkflowDanger = () => {
  const handleDeleteFn = () => {
    toast({
      title: `Can't Wait to ship this feature`,
      description:
        "We are working hard to not allow you to delete this workflow, but deleting would be added soon For Real!",
    });
  };
  return (
    <>
      <h3 className="text-xl font-semibold mb-8">Delete Workflow</h3>

      <div className="border border-destructive text-sm w-1/2 text-destructive p-4 mb-8 rounded-lg">
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
        onClick={() => handleDeleteFn()}
      >
        Delete Workflow
      </Button>
    </>
  );
};

export default WorkflowDanger;
