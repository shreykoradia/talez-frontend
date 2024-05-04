import { AtSign } from "lucide-react";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <>
      <div className="flex gap-4 justify-center items-center">
        <Link to="https://twitter.com/hello_talez">
          <p className="font-mono font-bold text-primary text-xl">Tw</p>
        </Link>
        <Link
          to="#"
          onClick={(e) => {
            window.location.href = "mailto:hello.insideai@gmail.com";
            e.preventDefault();
          }}
        >
          <AtSign size={20} stroke="#2563EB" strokeWidth={2.5} />
        </Link>
      </div>
    </>
  );
};

export default FooterSection;
