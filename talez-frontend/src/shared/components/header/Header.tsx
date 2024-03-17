import CreateTalesModal from "@/modules/talez/components/CreateTalesModal";
import CreateWorkflowModal from "@/modules/workflows/components/CreateWorkflowModal";

interface HeaderProps {
  displayMore: boolean;
  displayCreate: boolean;
  headerTitle: string;
}

const defaultProps = {
  displayMore: true,
  displayCreate: false,
};

const Header = ({
  displayCreate = defaultProps.displayCreate,
  displayMore = defaultProps.displayMore,
  headerTitle,
}: HeaderProps) => {
  return (
    <>
      <div className="flex justify-between items-center p-4">
        <p className="text-sm px-2 py-1 font-medium hover:bg-accent rounded-md">
          {headerTitle}
        </p>
        {displayMore ? (
          <div className="display_more_container flex items-center justify-evenly gap-4">
            {/* todo for design iterations */}
            {/* <p className="text-sm text-secondary-foreground">Edited 1hr ago</p> */}
            <CreateTalesModal />
            {/* <p className="text-sm text-secondary-foreground">Share</p> */}
            {/* <History /> */}
            {/* <Star /> */}
          </div>
        ) : null}
        {displayCreate ? (
          <div className="new_workflow_container">
            <CreateWorkflowModal />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Header;
