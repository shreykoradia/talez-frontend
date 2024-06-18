const TalezDetailView = ({ tale }: { tale: string }) => {
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
