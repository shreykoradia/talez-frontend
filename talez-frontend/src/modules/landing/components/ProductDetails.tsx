const ProductDetails = () => {
  return (
    <>
      <section className="w-full grid gap-8 place-content-center place-items-center">
        <div className="text-lg text-justify w-1/2">
          Talez is a SaaS platform designed for users and stakeholders to share
          ideas, gather collective feedback, and engage in thorough discussions
          to reach conclusive decisions. Unlike traditional scrum meetings,
          Talez fosters collaboration without the time constraints of formal
          meetings, allowing for in-depth conversations to unfold organically.
        </div>
        <div className="text-lg text-justify w-1/2">
          <div className="font-semibold pb-2">
            Not an Alternative to Scrum Meetings, But...
          </div>
          <div>
            Talez is not positioned as an alternative to scrum meetings, which
            primarily serve to track task deadlines and sprint progress.
            Instead, Talez complements the scrum methodology by offering a
            dedicated platform for discussing blockers, exploring new ideas, and
            gaining different perspectives on project-related matters.
          </div>
        </div>
        <div className="text-lg text-justify w-1/2">
          <p className="font-semibold">Key Features :</p>
          <ul className="list-disc px-4">
            <li className="py-2">
              Idea Collaboration: Talez provides a space for users to
              brainstorm, propose features, or discuss modules collaboratively.
              It goes beyond the limitations of traditional scrum meetings,
              enabling a dynamic exchange of insights.
            </li>
            <li className="py-2">
              Collective Feedback: Users can gather feedback from various
              stakeholders in real-time, creating a more inclusive
              decision-making process. Talez streamlines the feedback loop,
              making it efficient and accessible to all team members.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
