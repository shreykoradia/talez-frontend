import { X } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import WorkflowSettingTabs from "./WorkflowSettingTabs";

const WorkflowSettings = () => {
  const navigate = useNavigate();
  const params = useParams();
  const workflowId = params?.workflowId;
  return (
    <>
      <div className="p-8 my-20 mx-16 border border-muted rounded-lg h-[calc(100vh-72.67px)] max-h-full bg-background bg-opacity-20 maxMd:my-10 maxMd:mx-8 ">
        <div className="flex justify-between items-center">
          <h3 className="text-3xl">Workflow Settings</h3>
          <button onClick={() => navigate(`/${workflowId}/talez`)}>
            <X size={20} />
          </button>
        </div>
        <WorkflowSettingTabs />
      </div>
    </>
  );
};

export default WorkflowSettings;
