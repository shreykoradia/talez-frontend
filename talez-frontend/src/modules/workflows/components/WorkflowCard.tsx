import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/ui/card";
import { Archive } from "lucide-react";
import styles from "@/assets/css/workflow.module.css";

const WorkflowCard = () => {
  return (
    <Card className="w-[350px] p-2">
      <CardHeader>
        <CardTitle>Talez</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-secondary-foreground">
        Your Neighbourly Product Managment Tool Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Deleniti similique temporibus voluptate
        iste totam quas error odit alias quaerat delectus eos at, illum incidunt
        veniam!
      </CardContent>
      <CardFooter>
        <div className="flex justify-end w-full">
          <button className={styles.button_container}>
            <Archive size={16} />
            Archive
          </button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default WorkflowCard;
