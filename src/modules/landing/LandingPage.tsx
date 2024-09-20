import styles from "@/assets/css/landingpage.module.css";
import { Button } from "@/shared/ui/ui/button";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
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
          <div className="flex justify_between items-center w-full p-4">
          <p className="text-divamecha text-xl font-bold w-full">Talez</p>
          <Button variant="outline" onClick={() => navigate("/signin")}>Sign In</Button>
          </div>
          <div className="grid gap-4 place-content-center place-items-center h-[calc(100vh-140px)] p-4 w-full">
            <p className="text-lg font-semibold w-full">
              Ever Heard about Talez...... Did it ring a bell?
            </p>
            <p className="text-lg text-balance w-full break-words">
              Talez will soon iterate to v1.2, Earlier user's could add account
              create workflows and manage talez by sharing and brainstorming
              applications with each other. Soon changelog's will be added here
              to track new features before v1.2 is launched.
            </p>
            <div className="text-divamecha text-lg w-full">
              You can find us on below platforms, to discuss new features :){" "}
              <br />
              <p className="flex justify-start items-center w-full gap-4 text-xl text-primary">
                <a
                  className="hover:underline"
                  href="https://x.com/hello_talez"
                >
                  • Tw
                </a>
                <a
                  className="hover:underline"
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
