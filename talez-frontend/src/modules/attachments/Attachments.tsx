import { Button } from "@/shared/ui/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/shared/ui/ui/drawer";
import { Link } from "lucide-react";
import CreateLinkModal from "./components/CreateLinkModal";
import useGetLinks from "./hooks/useGetLinks";

interface AttachementProp {
  selectedTale: string;
}

const Attachments = ({ selectedTale }: AttachementProp) => {
  const { data } = useGetLinks(selectedTale || "");

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
          <div className="flex items-center justify-start gap-4 flex-wrap p-4">
            {data?.data.links?.map((link, index) => (
              <div
                className="border border-input px-3 py-2 text-sm text-input rounded-lg hover:bg-secondary hover:transition hover:delay-200"
                key={index}
              >
                <a href={link?.linkUrl} target="_blank">
                  {link?.linkTitle}
                </a>
              </div>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Attachments;
