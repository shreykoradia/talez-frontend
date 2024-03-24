import CreateTalesModal from "@/modules/talez/components/CreateTalesModal";
import CreateWorkflowModal from "@/modules/workflows/components/CreateWorkflowModal";
import { Button } from "@/shared/ui/ui/button";
import { GanttChart, MessageCircleCode } from "lucide-react";

interface HeaderProps {
  displayMore: boolean;
  displayCreate: boolean;
  displayCreateTalez: boolean;
  headerTitle: string;
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
  headerTitle,
}: HeaderProps) => {
  return (
    <>
      <div className="flex justify-between items-center p-4">
        <p className="text-sm px-2 py-1 font-medium hover:bg-accent rounded-md">
          {headerTitle}
        </p>
        {displayMore ? (
          <div className=" flex items-center gap-2">
            {/* todo for design iterations */}
            <Button variant={"ghost"} className="hover:!text-primary">
              Share
            </Button>
            {/* Visit Feedbacks on development Flow  */}
            <button>
              <MessageCircleCode />
            </button>
            {/* Used for Notification Timeline  */}
            <button>
              <GanttChart />
            </button>
          </div>
        ) : null}

        {displayCreateTalez ? (
          <div className="new_talez_container">
            <CreateTalesModal />
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
