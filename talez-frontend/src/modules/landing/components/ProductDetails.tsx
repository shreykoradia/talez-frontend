import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProductDetails = () => {
  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".fade_in").forEach((ele) => {
      gsap.from(ele, {
        scrollTrigger: {
          trigger: ele,
          start: "top 70%",
          scrub: false,
          toggleActions: "play none none none",
        },
        stagger: 0.2,
        x: -2000,
      });
    });
  });

  return (
    <>
      <section className="w-full h-full grid gap-8 place-content-start place-items-center">
        <div className="text-xl">Story about What we do!</div>
        <div className="text-lg text-balance w-1/2 fade_in">
          Talez is a SaaS platform designed for users and stakeholders to share
          ideas, gather collective feedback, and engage in thorough discussions
          to reach conclusive decisions. Unlike traditional scrum meetings,
          Talez fosters collaboration without the time constraints of formal
          meetings, allowing for in-depth conversations to unfold organically.
        </div>
        <div className="text-lg text-balance w-1/2 fade_in">
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
        <div className="text-lg text-balance w-1/2 fade_in">
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
