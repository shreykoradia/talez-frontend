import { Button } from "@/shared/ui/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/shared/ui/ui/drawer";
import { Link, Trash2Icon } from "lucide-react";
import CreateLinkModal from "./components/CreateLinkModal";
import useGetLinks from "./hooks/useGetLinks";
import { useMutation } from "@tanstack/react-query";
import deleteLink from "./api/deleteLink";
import Loader from "@/shared/components/loader/Loader";

interface AttachementProp {
  selectedTale: string;
}

const Attachments = ({ selectedTale }: AttachementProp) => {
  const { data, refetch: getLinksRefetchFn } = useGetLinks(selectedTale || "");

  const { mutate: deleteLinkFn, isPending: isDeletingLink } = useMutation({
    mutationFn: (linkId: string) =>
      deleteLink({ linkId: linkId, taleId: selectedTale }),
    onSuccess: () => {
      getLinksRefetchFn();
    },
  });

  if (isDeletingLink) {
    return <Loader />;
  }

  return (
    <>
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant={"outline"}>
            <Link size={16} className="mr-2" />
            Links
          </Button>
        </DrawerTrigger>
        <DrawerContent className="max-h-[20rem] h-full border-muted">
          <DrawerHeader>
            <div className="flex justify-between items-center">
              <div>
                <DrawerTitle>Link's</DrawerTitle>
                <DrawerDescription>
                  Share links, not confusion.
                </DrawerDescription>
              </div>
              <div>
                <CreateLinkModal taleId={selectedTale} />
              </div>
            </div>
          </DrawerHeader>
          <div className="flex items-center justify-start gap-2 flex-wrap p-4">
            {data?.data.links?.map((link, index) => (
              <div className="flex gap-2 items-center border border-input px-3 py-2 text-sm text-input rounded-lg hover:bg-secondary hover:transition hover:delay-200 ">
                <a
                  href={link?.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  <p>{link?.linkTitle}</p>
                </a>
                <button
                  className="p-2"
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteLinkFn(link?._id);
                  }}
                >
                  <Trash2Icon size={14} />
                </button>
              </div>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Attachments;
