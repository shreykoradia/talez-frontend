import { Input } from "@/shared/ui/ui/input";
import { Label } from "@/shared/ui/ui/label";

const WorkflowGeneral = () => {
  return (
    <>
      <h3 className="text-xl font-semibold mb-8">Workflow Info</h3>
      <div className="grid gap-8 w-1/2 maxMd:w-full">
        <div className="grid gap-2">
          <Label className="text-muted font-semibold">Workflow Title</Label>
          <Input type="text" value="Workflow Title" readOnly />
        </div>
        <div>
          <Label className="text-muted font-semibold">Description</Label>
          <Input type="text" value="Workflow Description" readOnly />
        </div>
        <div>
          <Label className="text-muted font-semibold">Project Id</Label>
          <Input type="text" value="Project Id" readOnly />
        </div>
      </div>
    </>
  );
};

export default WorkflowGeneral;
