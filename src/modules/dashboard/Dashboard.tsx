import { useEffect, useState } from "react";
import ReactFlow, { Background } from "reactflow";

import styles from "@/assets/css/dashboard.module.css";

import useGetWorkflows from "../workflows/hooks/useGetWorkflows";
import WorkflowCard from "../workflows";
import CreateWorkflowModal from "../workflows/components/CreateWorkflowModal";

const Dashboard = () => {
  const { data: workflowData } = useGetWorkflows();
  const [isMobile, setIsMobile] = useState(false);

  const generateInitialNode = () => {
    if (!workflowData?.workflows) return;
    const element = [];
    for (
      let workflow = 0;
      workflow < workflowData?.workflows?.length;
      workflow++
    ) {
      const x = isMobile ? 0 : (workflow % 3) * 450;
      const y = isMobile ? workflow * 350 : Math.floor(workflow / 3) * 350;
      if (!workflowData?.workflows) return;
      element.push({
        id: workflow.toString(),
        type: "default",
        data: {
          label: (
            <WorkflowCard
              index={workflow}
              workflow={workflowData?.workflows?.[workflow]}
            />
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

  if (workflowData?.workflows?.length === 0) {
    return (
      <section className="flex flex-col gap-2 justify-center items-center h-[calc(100%-74px)] w-full">
        <p className="text-balance text-center">
          Oopsie, No workflows to add tales, create a workflow to add tales for
          your product by clicking button below.
        </p>
        <CreateWorkflowModal />
      </section>
    );
  }

  return (
    <>
      <section className="absolute flex justify-between items-center px-2 py-4 w-full md:p-8 md:max-w-[112.5rem]">
        <p className="text-2xl maxMd:hidden">Workflows</p>
        <div className="flex items-center gap-4 z-10 maxMd:justify-between maxMd:w-full">
          <CreateWorkflowModal />
          {/* <button>
            <Settings />
          </button> */}
        </div>
      </section>
      <div className={styles.dashboard_parent_container}>
        <div
          className="dashboard_workflow_container w-full mx-auto maxMd:hidden"
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <ReactFlow
            zoomOnScroll={false}
            zoomOnPinch={true}
            zoomOnDoubleClick={false}
            zoomActivationKeyCode={null}
            nodes={element}
            panOnScroll={true}
          >
            <Background />
          </ReactFlow>
        </div>
        <div className="flex flex-col gap-2 p-2 w-full h-full overflow-y-scroll">
          {workflowData?.workflows?.map((workflow, index) => (
            <WorkflowCard workflow={workflow} key={index} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Dashboard;
