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
import useCreateTalesForm from "../hooks/useCreateTalesForm";
import useCreateTales from "../hooks/useCreateTales";
import { useParams } from "react-router-dom";
import { Textarea } from "@/shared/ui/ui/textarea";
import { useState } from "react";

const CreateTalesModal = () => {
  const queryParams = useParams();

  const params = {
    workflowId: queryParams?.workflowId || 0,
  };

  const { createTalesFn, isCreatingTales } = useCreateTales();

  const { values, errors, touched, handleChange, resetForm } =
    useCreateTalesForm();

  const [openModal, setOpenModal] = useState(false);

  const onSubmitButtonClick = () => {
    createTalesFn({ values, params });
    resetForm();
    setOpenModal(!open);
  };

  return (
    <>
      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogTrigger asChild>
          <Button
            variant={"default"}
            className="flex gap-1 items-center text-sm"
          >
            <Plus size={14} className="mt-[0.125rem]" />
            Create Talez
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Talez</DialogTitle>
            <DialogDescription>
              Every product has a Tale, Write your's!
            </DialogDescription>
          </DialogHeader>
          <form>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Talez Title*</Label>
                <Input
                  type="text"
                  id="title"
                  value={values?.title}
                  onChange={handleChange}
                />
                {errors.title && touched.title ? (
                  <div className={"error_control"}>
                    <p>{errors.title}</p>
                  </div>
                ) : null}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description*</Label>
                <Textarea
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
                  disabled={
                    isCreatingTales || !values.title || !values.description
                  }
                  onClick={onSubmitButtonClick}
                >
                  Create Talez
                </Button>
              </DialogFooter>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateTalesModal;
