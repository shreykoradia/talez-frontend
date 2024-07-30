import { useState } from "react";
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
import useCreateLinksForm from "../hooks/useCreateLinkForm";
import { useMutation } from "@tanstack/react-query";
import createLink from "../api/createLink";
import useGetLinks from "../hooks/useGetLinks";

interface CreateLinkModalProp {
  taleId: string;
}

const CreateLinkModal = ({ taleId }: CreateLinkModalProp) => {
  const [openModal, setOpenModal] = useState(false);
  const { refetch: refetchLinksFn } = useGetLinks(taleId);

  const { values, errors, touched, handleChange, handleSubmit, resetForm } =
    useCreateLinksForm();

  const { mutate: addLinkFn, isPending: isAddingLink } = useMutation({
    mutationFn: () => createLink({ ...values, taleId: taleId }),
    onSuccess: () => {
      resetForm();
      refetchLinksFn();
      setOpenModal(!openModal);
    },
    onError: () => {},
  });

  return (
    <>
      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogTrigger asChild>
          <Button variant={"outline"}>
            <PlusIcon size={16} className="mr-2" />
            Add Link
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Link</DialogTitle>
            <DialogDescription>
              Efficiency Starts Here: Create, Describe, Optimize
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="linkTitle">Link Title*</Label>
                <div className="relative">
                  <Input
                    type="text"
                    id="linkTitle"
                    value={values?.linkTitle}
                    placeholder="Add a Link title with 150 characters max😊"
                    onChange={handleChange}
                  />
                </div>
                {errors.linkTitle && touched.linkTitle ? (
                  <div className={"error_control"}>
                    <p>{errors.linkTitle}</p>
                  </div>
                ) : null}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="linkUrl">Url*</Label>
                <div className="relative">
                  <Input
                    type="url"
                    id="linkUrl"
                    value={values?.linkUrl}
                    onChange={handleChange}
                  />
                </div>
                {errors.linkUrl && touched.linkUrl ? (
                  <div className={"error_control"}>
                    <p>{errors.linkUrl}</p>
                  </div>
                ) : null}
              </div>
              <DialogFooter>
                <Button
                  type="button"
                  disabled={!values.linkUrl || !values.linkTitle}
                  onClick={() => addLinkFn()}
                >
                  Add Link
                  {isAddingLink ? <Loader size={16} /> : " Add Link"}
                </Button>
              </DialogFooter>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateLinkModal;
