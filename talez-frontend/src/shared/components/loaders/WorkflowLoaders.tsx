import { Button } from "@/shared/ui/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/ui/card";
import { Skeleton } from "@/shared/ui/ui/skeleton";
import { Archive } from "lucide-react";

import styles from "@/assets/css/workflow.module.css";

const WorkflowLoaders = () => {
  return (
    <>
      <Card className="w-[21.875rem] cursor-pointer card_hover_primary">
        <CardHeader>
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-5 w-1/2" />
        </CardHeader>
        <CardContent className="h-[9.375rem] text-justify break-words rounded-lg overflow-y-auto no-scrollbar">
          <Skeleton className="h-[9.375rem] w-full" />
        </CardContent>
        <CardFooter>
          <div className="flex justify-end w-full mt-2 pt-1">
            <Button
              variant={"ghost"}
              className={styles.workflow_button_container}
              disabled={true}
            >
              <Archive size={16} />
              Archive
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default WorkflowLoaders;
