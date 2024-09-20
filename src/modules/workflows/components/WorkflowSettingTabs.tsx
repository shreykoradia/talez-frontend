import { AlertTriangle, Box, Settings } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/ui/tabs";

import WorkflowIntegations from "./WorkflowIntegations";
import WorkflowGeneral from "./WorkflowGeneral";
import WorkflowDanger from "./WorkflowDanger";

const WorkflowSettingTabs = () => {
  return (
    <>
      <Tabs defaultValue="integrations">
        <div className="flex gap-4 maxMd:flex-col w-full pt-16">
          <TabsList className="flex flex-col items-start gap-4 justify-start w-1/6 maxMd:w-full maxMd:flex-row maxMd:overflow-x-auto maxMd:justify-evenly">
            <TabsTrigger value="general" className="tabs_container_button">
              <Settings size={16} className="mr-2" />
              General
            </TabsTrigger>
            <TabsTrigger className="tabs_container_button" value="integrations">
              <Box size={16} className="mr-2" />
              Integrations
            </TabsTrigger>
            <TabsTrigger className="tabs_container_button" value="danger">
              <AlertTriangle size={16} className="mr-2" />
              Danger
            </TabsTrigger>
          </TabsList>
          <div className="w-full">
            <TabsContent value="integrations" className="w-full">
              <WorkflowIntegations />
            </TabsContent>
            <TabsContent value="general" className="w-full">
              <WorkflowGeneral />
            </TabsContent>
            <TabsContent value="danger" className="w-full">
              <WorkflowDanger />
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </>
  );
};

export default WorkflowSettingTabs;
