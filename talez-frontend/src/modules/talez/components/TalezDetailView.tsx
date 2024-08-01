import Attachments from "@/modules/attachments";
import Loader from "@/shared/components/loader/Loader";
import { talesResponseProps } from "../types";

const TalezDetailView = ({
  tale,
  isLoading,
}: {
  tale: talesResponseProps;
  isLoading: boolean;
}) => {
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <section className="p-4 h-full">
        <div className="grid gap-4">
          <div className="maxMd:hidden">
            <Attachments selectedTale={tale?._id} />
          </div>
          <p className="text-md w-full md:break-words maxMd:text-justify">
            {tale?.description}
          </p>
        </div>
      </section>
    </>
  );
};

export default TalezDetailView;
