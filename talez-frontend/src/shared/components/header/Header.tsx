import { History, Star } from "lucide-react";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center p-4">
        <p className="text-sm">Workflows</p>
        <div className="display_more_container flex justify-evenly gap-2">
          <p className="text-sm">Edited 1hr ago</p>
          <p className="text-sm">Share</p>
          <History />
          <Star />
        </div>
      </div>
    </>
  );
};

export default Header;
