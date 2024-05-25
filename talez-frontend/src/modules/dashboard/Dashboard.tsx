import ReactFlow, { Background } from "reactflow";
import styles from "@/assets/css/dashboard.module.css";
import useGetWorkflows from "../workflows/hooks/useGetWorkflows";
import { LIMIT } from "@/shared/constant";
import WorkflowCard from "../workflows/components/WorkflowCard";
import { useEffect, useState } from "react";
import { PlusIcon, Settings } from "lucide-react";
import { Button } from "@/shared/ui/ui/button";

const Dashboard = () => {
  const { data: workflowData } = useGetWorkflows();
  const [isMobile, setIsMobile] = useState(false);

  const generateInitialNode = () => {
    const element = [];
    for (let workflow = 0; workflow < LIMIT; workflow++) {
      const x = isMobile ? 0 : (workflow % 2) * 500;
      const y = isMobile ? workflow * 350 : Math.floor(workflow / 2) * 350;
      element.push({
        id: workflow.toString(),
        type: "default",
        data: {
          label: (
            <WorkflowCard workflow={workflowData?.workflows?.[workflow]} />
          ),
        },
        position: { x: x, y: y },
      });
    }
    return element;
  };

  const element = generateInitialNode();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1023);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.dashboard_parent_container}>
      <div
        className="dashboard_workflow_container maxMd:hidden"
        style={{ height: "100%", width: "100%" }}
      >
        <div className="z-10 absolute flex justify-between items-center p-8 w-full">
          <p className="text-2xl">Workflows</p>
          <div className="flex items-center gap-4">
            <Button variant={"outline"}>
              <PlusIcon size={16} className="mr-2" />
              New Workflow
            </Button>
            <button>
              <Settings />
            </button>
          </div>
        </div>
        <ReactFlow
          zoomOnScroll={false}
          zoomOnPinch={true}
          zoomOnDoubleClick={false}
          zoomActivationKeyCode={null}
          nodes={element}
          panOnScroll={true}
          fitView
        >
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
};

export default Dashboard;
