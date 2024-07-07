import TalezAmplify from "@/assets/icons/launchDark.svg?react";
import { Link } from "react-router-dom";

const ProductFooter = () => {
  return (
    <>
      <div className="product_footer_container">
        <div className="flex items-center justify-center">
          <div className="p-8">
            <TalezAmplify />
          </div>
          <div className="text-justify w-1/2">
            We Launched an early demo version, to get feedback's from potential
            user's. We would love to onboard new users soon, as a lot of changes
            are happening keep an eye on changelog's on{" "}
            <Link
              className="text-primary hover:border-b border-b-primary"
              to="https://talez-flames.vercel.app/"
            >
              Talez.
            </Link>
          </div>
        </div>
        <div className="text-lg text-center grid gap-2 p-2">
          <p>Follow us on below platforms to read the latest Talez!</p>
          <div className="flex justify-center items-center gap-4 text-primary">
            <a
              className="hover:border-b border-b-primary"
              href="https://x.com/hello_talez"
            >
              • Tw
            </a>
            <a
              className="hover:border-b border-b-primary"
              href="https://peerlist.io/shrey_"
            >
              • Peerlist
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductFooter;
