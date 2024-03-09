import { History, Plus, Star } from "lucide-react";

interface HeaderProps {
  displayMore: boolean;
  displayCreate: boolean;
}

const defaultProps = {
  displayMore: true,
  displayCreate: false,
};

const Header = ({
  displayCreate = defaultProps.displayCreate,
  displayMore = defaultProps.displayMore,
}: HeaderProps) => {
  return (
    <>
      <div className="flex justify-between items-center p-4">
        <p className="text-sm px-2 py-0.5 hover:bg-accent rounded-md">
          Workflows
        </p>
        {displayMore ? (
          <div className="display_more_container flex justify-evenly gap-2">
            <p className="text-sm">Edited 1hr ago</p>
            <p className="text-sm">Share</p>
            <History />
            <Star />
          </div>
        ) : null}
        {displayCreate ? (
          <div className="new_workflow_container">
            <div className="flex gap-2 items-center hover:bg-accent px-2 py-0.5 rounded-md">
              <Plus size={14} />
              <p className="text-sm">Create Workflow</p>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Header;
