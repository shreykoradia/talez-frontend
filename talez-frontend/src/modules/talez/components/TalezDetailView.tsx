import Loader from "@/shared/components/loader/Loader";

const TalezDetailView = ({
  tale,
  isLoading,
}: {
  tale: string;
  isLoading: boolean;
}) => {
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <section className="p-4 h-full">
        <p className="text-md w-full md:break-words maxMd:text-justify">
          {tale}
        </p>
      </section>
    </>
  );
};

export default TalezDetailView;
