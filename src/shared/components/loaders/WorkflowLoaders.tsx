import { Card, CardContent, CardHeader } from "@/shared/ui/ui/card";
import { Skeleton } from "@/shared/ui/ui/skeleton";

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
      </Card>
    </>
  );
};

export default WorkflowLoaders;
