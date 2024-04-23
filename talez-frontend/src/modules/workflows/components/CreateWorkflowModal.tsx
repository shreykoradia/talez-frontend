import { Button } from "@/shared/ui/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/ui/dialog";
import { Input } from "@/shared/ui/ui/input";
import { Label } from "@/shared/ui/ui/label";
import { Plus } from "lucide-react";
import { workflowRequest } from "../types";
import useCreateWorkflowForm from "../hooks/useCreateWorkflowForm";
import useCreateWorkflows from "../hooks/useCreateWorkflows";
import { useState } from "react";
import useGetWorkflows from "../hooks/useGetWorkflows";

const CreateWorkflowModal = () => {
  const [openModal, setOpenModal] = useState(false);
  const { createWorkfLowMutateFn, isCreatingWorkflow } = useCreateWorkflows();
  const { refetchWorkflowsFn } = useGetWorkflows();
  const { values, errors, touched, handleChange, handleSubmit } =
    useCreateWorkflowForm((values: workflowRequest) => {
      createWorkfLowMutateFn(values);
      setOpenModal(!openModal);
      refetchWorkflowsFn();
    });

  return (
    <>
      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogTrigger asChild>
          <Button
            variant={"default"}
            className="flex gap-1 items-center text-sm"
          >
            <Plus size={14} className="mt-[0.125rem]" />
            Create Workflow
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Workflow</DialogTitle>
            <DialogDescription>
              Efficiency Starts Here: Create, Describe, Optimize
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="workFlowTitle">Workflow Title*</Label>
                <Input
                  type="text"
                  id="workFlowTitle"
                  value={values?.workFlowTitle}
                  onChange={handleChange}
                />
                {errors.workFlowTitle && touched.workFlowTitle ? (
                  <div className={"error_control"}>
                    <p>{errors.workFlowTitle}</p>
                  </div>
                ) : null}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description*</Label>
                <Input
                  type="text"
                  id="description"
                  value={values?.description}
                  onChange={handleChange}
                />
                {errors.description && touched.description ? (
                  <div className={"error_control"}>
                    <p>{errors.description}</p>
                  </div>
                ) : null}
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  disabled={
                    isCreatingWorkflow ||
                    !values.description ||
                    !values.workFlowTitle
                  }
                >
                  Create Workflow
                </Button>
              </DialogFooter>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateWorkflowModal;
