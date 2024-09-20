import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import ProductFooter from "./ProductFooter";

gsap.registerPlugin(gsap);

const ProductInformation = () => {
  const talezRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  const [showScrollButton, setShowScrollButton] = useState<boolean>(true);

  useGSAP(() =>
    gsap.fromTo(
      talezRef.current,
      { opacity: 0, y: 0, x: 0, scale: 0.5 },
      {
        scale: 8, // try to make it with the screen size
        opacity: 1,
        y: 0,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: talezRef.current,
          start: "top 100%",
          scrub: 2,
        },
      }
    )
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition === 0) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const offsetX = 10;
      const offsetY = 10;
      gsap.to(cursorRef.current, {
        x: e.clientX + offsetX,
        y: e.clientY + offsetY,
        duration: 0.2,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="min-h-screen overflow-y-auto">
        <div className="grid gap-2 place-content-center place-items-center h-screen">
          <div className="flex justify-center items-center ">
            <p className="text-2xl" ref={talezRef}>
              Talez
            </p>
          </div>
          {showScrollButton ? (
            <div className="fixed left-0 bottom-0 p-4">Scroll Down</div>
          ) : null}
        </div>
        {/* Refactor the Part  I dont find it interesting */}
        {/* <div className="flex justify-center items-center bg-gradient-bg">
          <ProductDetails />
        </div> */}
        <div className="flex justify-center items-center h-screen bg-background">
          <ProductFooter />
        </div>
        <div
          ref={cursorRef}
          className="fixed top-0 left-0 w-4 h-4 bg-primary opacity-80 rounded-full pointer-events-none"
          style={{ zIndex: 10 }}
        ></div>
      </div>
    </>
  );
};

export default ProductInformation;
