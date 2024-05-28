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
import { Loader, Plus } from "lucide-react";
import useCreateTalesForm from "../hooks/useCreateTalesForm";
import useCreateTales from "../hooks/useCreateTales";
import { useParams } from "react-router-dom";
import { Textarea } from "@/shared/ui/ui/textarea";
import { useState } from "react";
import clsx from "clsx";

const CreateTalesModal = () => {
  const [taleTitleCounter, setTaleTitleCounter] = useState<number>(0);
  const [taleDescCounter, setTaleDescCounter] = useState<number>(0);
  const [openModal, setOpenModal] = useState(false);

  const queryParams = useParams();

  const params = {
    workflowId: queryParams?.workflowId || 0,
  };

  const { createTalesFn, isCreatingTales } = useCreateTales();

  const { values, errors, touched, handleChange, resetForm } =
    useCreateTalesForm();

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleChange(e);
    setTaleDescCounter(e.target.value.length);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    setTaleTitleCounter(e.target.value.length);
  };

  const onSubmitButtonClick = () => {
    createTalesFn({ values, params });
    resetForm();
    setTaleTitleCounter(0);
    setTaleDescCounter(0);
    setOpenModal(!open);
  };

  return (
    <>
      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogTrigger asChild>
          <Button variant={"outline"}>
            <Plus size={16} className="mr-2" />
            Create Talez
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Tale</DialogTitle>
            <DialogDescription>
              Every product has a Tale, Write your's!
            </DialogDescription>
          </DialogHeader>
          <form>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Tale Title*</Label>
                <div className="relative">
                  <Input
                    type="text"
                    id="title"
                    value={values?.title}
                    placeholder="Add a Tale title with 50 characters max😊"
                    onChange={handleInputChange}
                    maxLength={50}
                  />
                  <p
                    className={clsx(
                      "absolute right-2 bottom-1 text-xs text-primary mt-2",
                      { "text-crimsonred": taleTitleCounter === 50 }
                    )}
                  >
                    {taleTitleCounter}
                  </p>
                </div>
                {errors.title && touched.title ? (
                  <div className={"error_control"}>
                    <p>{errors.title}</p>
                  </div>
                ) : null}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description*</Label>
                <div className="relative">
                  <Textarea
                    id="description"
                    value={values?.description}
                    placeholder="Add a Tale description, for example `Role Access doesn't, make sense if the owner of the document is attached in different API endpoint and the owner when transfered is just removed from the document but not the access response..., Tale title could be like User Roles in Sharing Document doesn't fit well`, all within 5000 characters limit :)"
                    className="resize-y max-h-80 min-h-36 no-scrollbar"
                    onChange={handleTextAreaChange}
                    maxLength={5000}
                  />
                  <p
                    className={clsx(
                      "absolute right-2 bottom-1 text-xs text-primary mt-2",
                      { "text-crimsonred": taleDescCounter === 5000 }
                    )}
                  >
                    {taleDescCounter}
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
                  disabled={
                    isCreatingTales || !values.title || !values.description
                  }
                  onClick={onSubmitButtonClick}
                >
                  {isCreatingTales ? <Loader /> : "Create Tale"}
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
