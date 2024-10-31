import React, { useState } from "react";
import { useFeedbackForm } from "../hooks/useFeedbackForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/ui/dialog";
import { Button } from "@/shared/ui/ui/button";
import { Loader, Plus } from "lucide-react";
import { Label } from "@/shared/ui/ui/label";
import { Textarea } from "@/shared/ui/ui/textarea";
import clsx from "clsx";
import { createFeedbackProps, feedbackData } from "../types";

const CreateFeedbackModal = ({
  createFeedbackFn,
  isCreatingFeedback,
  openModal,
  onCloseModal,
  isEdit,
  feedback,
}: {
  createFeedbackFn: (values: createFeedbackProps) => void;
  isCreatingFeedback: boolean;
  openModal: boolean;
  onCloseModal: () => void;
  isEdit: boolean;
  feedback?: feedbackData;
}) => {
  const [counterFeedback, setCounterFeedback] = useState<number>(0);

  const { values, handleChange, errors, touched, resetForm } = useFeedbackForm(
    feedback || ({} as feedbackData)
  );

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleChange(e);
    setCounterFeedback(e.target.value.length);
  };

  const handleFeedbackButton = () => {
    createFeedbackFn(values);
    resetForm();
    setCounterFeedback(0);
    onCloseModal();
  };
  return (
    <>
      <Dialog open={openModal} onOpenChange={() => onCloseModal()}>
        <DialogTrigger asChild>
          <Button variant={"outline"}>
            <Plus size={16} className="mr-2" />
            {isEdit ? "Edit" : "Add"} Feedback
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{isEdit ? "Edit" : "Create"} Feedback</DialogTitle>
            <DialogDescription>
              Every feedback matter's like your's to us!
            </DialogDescription>
          </DialogHeader>
          <form>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="feedback">Feedback*</Label>
                <div className="relative">
                  <Textarea
                    id="feedback"
                    value={values?.feedback}
                    placeholder="Send your valuable feedback to make user's happy, for example We could directly store the user email inside our database schema of users rather than looking alternative method to do more expensive querying inside the databse share schema it will be lot easier to migrate the databse later on... likewise all within 500 characters :)"
                    className="resize-y max-h-80 min-h-36 no-scrollbar"
                    onChange={handleTextAreaChange}
                    maxLength={5000}
                  />
                  <p
                    className={clsx(
                      "absolute right-2 bottom-1 text-xs text-primary mt-2",
                      { "text-crimsonred": counterFeedback === 5000 }
                    )}
                  >
                    {counterFeedback}
                  </p>
                </div>

                {errors.feedback && touched.feedback ? (
                  <div className={"error_control"}>
                    <p>{errors.feedback}</p>
                  </div>
                ) : null}
              </div>
              <DialogFooter>
                <Button
                  disabled={isCreatingFeedback || !values.feedback}
                  onClick={handleFeedbackButton}
                >
                  {isCreatingFeedback ? (
                    <Loader />
                  ) : (
                    `${isEdit ? "Edit" : "Add"} Feedback`
                  )}
                </Button>
              </DialogFooter>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateFeedbackModal;
