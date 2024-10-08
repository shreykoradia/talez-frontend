import { useState } from "react";
import clsx from "clsx";
import { Loader, PlusIcon } from "lucide-react";

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
import { Textarea } from "@/shared/ui/ui/textarea";

import { workflowRequest } from "../types";
import useCreateWorkflowForm from "../hooks/useCreateWorkflowForm";
import useCreateWorkflows from "../hooks/useCreateWorkflows";

const CreateWorkflowModal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [workflowCharCounter, setWorkflowCharCounter] = useState<number>(0);
  const [workflowTitleCounter, setWorkflowTitleCounter] = useState<number>(0);

  const { createWorkfLowMutateFn, isCreatingWorkflow } = useCreateWorkflows();
  const { values, errors, touched, handleChange, handleSubmit } =
    useCreateWorkflowForm((values: workflowRequest) => {
      createWorkfLowMutateFn(values);
      setOpenModal(!openModal);
      setWorkflowCharCounter(0);
      setWorkflowTitleCounter(0);
    });

  const handleInputCounter = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    setWorkflowTitleCounter(e.target.value.length);
  };
  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleChange(e);
    setWorkflowCharCounter(e.target.value.length);
  };

  return (
    <>
      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogTrigger asChild>
          <Button variant={"outline"}>
            <PlusIcon size={16} className="mr-2" />
            New Workflow
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
                <div className="relative">
                  <Input
                    type="text"
                    id="workFlowTitle"
                    value={values?.workFlowTitle}
                    placeholder="Add a Workflow title with 50 characters max😊"
                    onChange={handleInputCounter}
                    maxLength={50}
                  />
                  <p
                    className={clsx(
                      "absolute right-2 bottom-1 text-xs text-primary mt-2",
                      { "text-crimsonred": workflowTitleCounter === 50 }
                    )}
                  >
                    {workflowTitleCounter}
                  </p>
                </div>
                {errors.workFlowTitle && touched.workFlowTitle ? (
                  <div className={"error_control"}>
                    <p>{errors.workFlowTitle}</p>
                  </div>
                ) : null}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description*</Label>
                <div className="relative">
                  <Textarea
                    id="description"
                    value={values?.description}
                    className="resize-y max-h-80 no-scrollbar"
                    placeholder="Add a workflow description, for example explain why this workflow even exists, what it is all about, users, use-cases etc all within 1000 characters."
                    onChange={handleTextAreaChange}
                    maxLength={1000}
                  />
                  <p
                    className={clsx(
                      "absolute right-2 bottom-1 text-xs text-primary mt-2",
                      { "text-crimsonred": workflowCharCounter === 1000 }
                    )}
                  >
                    {workflowCharCounter}
                  </p>
                </div>
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
                  {isCreatingWorkflow ? <Loader /> : " Create Workflow"}
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
