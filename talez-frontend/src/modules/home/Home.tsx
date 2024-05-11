import { Route, Routes } from "react-router";
import Workflows from "../workflows";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/shared/ui/ui/resizable";
import Sidebar from "@/shared/components/sidebar/Sidebar";
import Talez from "../talez";
import TalezView from "../talez/components/TalezView";
import Settings from "../settings";

const Home = () => {
  return (
    <>
      <ResizablePanelGroup
        direction="horizontal"
        className="!h-[100vh] max-w-full rounded-lg border"
      >
        <ResizablePanel defaultSize={20} minSize={15} maxSize={25}>
          <Sidebar />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={80}>
          <Routes>
            <Route path="/workflows" index element={<Workflows />} />;
            <Route path="/:workflowId/tale" index element={<Talez />} />
            <Route path="/tale/:taleId" element={<TalezView />} />
            <Route path="/settings/*" element={<Settings />} />
          </Routes>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
};

export default Home;
