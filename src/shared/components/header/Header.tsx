import FeedbackOverview from "@/modules/feedbacks";
import CreateTalesModal from "@/modules/talez/components/CreateTalesModal";
import CreateWorkflowModal from "@/modules/workflows/components/CreateWorkflowModal";
import SharePopOver from "./SharePopOver";
import { Link } from "react-router-dom";

interface HeaderProps {
  displayMore: boolean;
  displayCreate: boolean;
  displayCreateTalez: boolean;
  headerDetails: { headerTitle: string; headerAction: string };
}

const defaultProps = {
  displayMore: true,
  displayCreate: false,
  displayCreateTalez: false,
};

const Header = ({
  displayCreate = defaultProps.displayCreate,
  displayMore = defaultProps.displayMore,
  displayCreateTalez = defaultProps.displayCreateTalez,
  headerDetails,
}: HeaderProps) => {
  return (
    <>
      <div className="flex justify-between items-center p-2">
        <Link
          to={headerDetails?.headerAction}
          className="text-sm px-2 py-1 font-medium text-primary hover:bg-accent rounded-md"
        >
          {headerDetails?.headerTitle}
        </Link>
        {displayMore ? (
          <div className=" flex items-center gap-2">
            {/* Visit Feedbacks on development Flow  */}
            <FeedbackOverview />
            {/* Used for Notification Timeline 
            <button>
              <GanttChart strokeWidth={1.5} />
            </button> */}
          </div>
        ) : null}

        {displayCreateTalez ? (
          <div className="flex items-center gap-2">
            <SharePopOver />
            <div className="new_talez_container">
              <CreateTalesModal />
            </div>
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
