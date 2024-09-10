import { Input } from "@/shared/ui/ui/input";
import { Label } from "@/shared/ui/ui/label";
import { useParams } from "react-router-dom";
import useGetWorkflow from "../hooks/useGetWorkflow";
import Loader from "@/shared/components/loader/Loader";
import { Textarea } from "@/shared/ui/ui/textarea";

const WorkflowGeneral = () => {
  const { workflowId } = useParams();

  const {
    data: workflows,
    isLoading,
    isRefetching,
  } = useGetWorkflow(workflowId || "");
  const workflow = workflows?.workflows?.filter(
    (workflow) => workflow?._id === workflowId
  );

  if (!workflow || isLoading || isRefetching) {
    return <Loader />;
  }

  return (
    <>
      <h3 className="text-xl font-semibold mb-8">Workflow Info</h3>
      <div className="grid gap-8 w-1/2 maxMd:w-full">
        <div className="grid gap-2">
          <Label className="text-muted font-semibold">Workflow Title</Label>
          <Input type="text" value={workflow[0]?.workFlowTitle} readOnly />
        </div>
        <div>
          <Label className="text-muted font-semibold">Description</Label>
          <Textarea
            value={workflow[0]?.description}
            readOnly
            className="min-h-32"
          />
        </div>
        <div>
          <Label className="text-muted font-semibold">Project Id</Label>
          <Input type="text" value={workflow[0]?._id} readOnly />
        </div>
      </div>
    </>
  );
};

export default WorkflowGeneral;
