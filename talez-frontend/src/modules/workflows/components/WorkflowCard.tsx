import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/ui/card";
import { Archive } from "lucide-react";
import styles from "@/assets/css/workflow.module.css";
import { Button } from "@/shared/ui/ui/button";

const WorkflowCard = () => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Talez</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-secondary-foreground h-[250px] rounded-lg overflow-y-auto no-scrollbar">
        Your Neighbourly Product Managment Tool Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Deleniti similique temporibus voluptate
        iste totam quas error odit alias quaerat delectus eos at, illum incidunt
        veniam! dfjskldgjfjgkldgkhfjgfg fgdfg Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Hic iste placeat asperiores perspiciatis
        expedita aliquid veniam quod doloribus voluptate voluptas molestiae,
        quia facere quam maxime laboriosam voluptatem dolores quaerat eum. Quae
        ut sunt alias nisi sequi temporibus minima! Aliquid a dolor, dolores
        libero maiores necessitatibus officiis. Excepturi accusantium ea
        temporibus?
      </CardContent>
      <CardFooter>
        <div className="flex justify-end w-full pt-1">
          <Button
            variant={"ghost"}
            className={styles.workflow_button_container}
          >
            <Archive size={16} />
            Archive
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default WorkflowCard;
