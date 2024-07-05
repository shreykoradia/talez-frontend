import TalezAmplify from "@/assets/icons/launchDark.svg?react";
const ProductFooter = () => {
  return (
    <>
      <div className="product_footer_container">
        <div className="flex items-center justify-center">
          <div className="p-8">
            <TalezAmplify />
          </div>
          <div className="text-balance w-1/2">
            We Launched an early demo version, to get ourselves feedback from
            the potential users. we would love to onboard new users once we set
            the platform right, as a lot of changes are happening.
          </div>
        </div>
        <div className="text-lg text-center grid gap-2 p-2">
          <p>Follow us on below platforms to read the latest Talez!</p>
          <div className="flex justify-center items-center gap-4">
            <a href="https://x.com/hello_talez">• Tw</a>
            <a href="https://peerlist.io/shrey_">• Peerlist</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductFooter;
