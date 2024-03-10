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
        <p className="text-sm px-2 py-1 hover:bg-accent rounded-md">
          Workflows
        </p>
        {displayMore ? (
          <div className="display_more_container flex justify-evenly gap-2">
            <p className="text-sm text-secondary-foreground">Edited 1hr ago</p>
            <p className="text-sm text-secondary-foreground">Share</p>
            <History />
            <Star />
          </div>
        ) : null}
        {displayCreate ? (
          <div className="new_workflow_container">
            <button className="flex gap-2 items-center hover:bg-accent px-2 py-1 rounded-md text-sm text-secondary-foreground">
              <Plus size={14} />
              Create Workflow
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Header;
