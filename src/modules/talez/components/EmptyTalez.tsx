import SharePopOver from "@/shared/components/header/SharePopOver";
import CreateTalesModal from "./CreateTalesModal";

const EmptyTalez = () => {
  return (
    <>
      <section className="flex flex-col gap-2 justify-center items-center h-[calc(100%-74px)] w-full">
        <p className="text-balance text-center">
          Oh boi, No talez to brainstorm or get feedbacks, share the Workflow
          with your team or create a tale to brainstorm your product by clicking
          button below.
        </p>
        <div className="flex gap-4 items-center">
          <CreateTalesModal />
          <SharePopOver />
        </div>
      </section>
    </>
  );
};

export default EmptyTalez;
