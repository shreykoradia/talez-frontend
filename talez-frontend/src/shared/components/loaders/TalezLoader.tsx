import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/ui/card";
import { Skeleton } from "@/shared/ui/ui/skeleton";

const TalezLoader = () => {
  return (
    <>
      <Card className="cursor-pointer card_hover_primary">
        <CardHeader>
          <CardTitle className="font-medium">
            <Skeleton className="h-6 w-1/4" />
          </CardTitle>
          <CardDescription>
            <Skeleton className="h-5 w-1/5" />
          </CardDescription>
        </CardHeader>
        <CardContent className="h-[3.125rem] break-words mb-2 rounded-lg overflow-hidden">
          <Skeleton className="h-[3.125rem] w-full" />
        </CardContent>
      </Card>
    </>
  );
};

export default TalezLoader;
