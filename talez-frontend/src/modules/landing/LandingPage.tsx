import styles from "@/assets/css/landingpage.module.css";
import { useEffect, useRef } from "react";

const LandingPage = () => {
  const blobRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handlePointerMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      if (!blobRef.current) return;
      blobRef.current.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <>
      <div className="h-screen bg-background relative overflow-hidden">
        <div className={styles.blob} ref={blobRef}></div>
        <div className={styles.blur}></div>
        <div className="z-10 w-full absolute">
          <p className="text-divamecha text-xl font-bold p-2">Talez</p>
          <div className="grid gap-4 place-content-center place-items-center h-[calc(100vh-140px)] p-4">
            <p className="text-lg">
              Ever Heard about Talez...... Did it ring a bell?
            </p>
            <p className="text-lg text-center text-balance">
              Talez is now iterated to v1.2, where people can create workflow,
              collaborate on each other's workflow by creating talez, adding
              feedback , upvote or downvote feedback and curating a storyboard
              reference for their products.
            </p>
            <div className="text-divamecha text-lg">
              You can Find us on below platforms :) <br />
              <p className="flex justify-center items-center w-full gap-4 text-xl text-primary">
                <a
                  className="hover:border-b border-primary"
                  href="https://x.com/hello_talez"
                >
                  • Tw
                </a>
                <a
                  className="hover:border-b border-primary"
                  href="https://peerlist.io/shrey_"
                >
                  • Peerlist
                </a>
              </p>
            </div>
          </div>
          {/* <div className="text-xl text-center p-4">
            First time around and don't know what talez is all about?
            <Button variant={"link"} onClick={() => navigate("/product")}>
              Click to know
            </Button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
