import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/ui/card";

import styles from "@/assets/css/feedback.module.css";
import clsx from "clsx";
import { Skeleton } from "@/shared/ui/ui/skeleton";

const FeedbackLoader = () => {
  return (
    <>
      <Card
        className={clsx(styles.feedback_card_container, "card_hover_primary")}
      >
        <CardHeader className={styles.feedback_card_header}>
          <CardTitle className="text-md">
            <div className="flex justify-between items-center">
              <Skeleton className="h-6 w-1/2" />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className={styles.feedback_card_content}>
          <Skeleton className="h-16 w-full" />
        </CardContent>
        <CardFooter className={styles.feedback_card_footer}>
          <Skeleton className="h-5 w-full" />
        </CardFooter>
      </Card>
    </>
  );
};

export default FeedbackLoader;
