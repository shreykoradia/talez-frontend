import styles from "@/assets/css/feedback.module.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/ui/card";
import clsx from "clsx";

const FeedbackCard = () => {
  return (
    <>
      <Card
        className={clsx(styles.feedback_card_container, "card_hover_primary")}
      >
        <CardHeader className={styles.feedback_card_header}>
          <CardTitle className="text-md">Feedback on Talez</CardTitle>
        </CardHeader>
        <CardContent className={styles.feedback_card_content}>
          hfdkhjkhgjfhgjkghjfghjfghjkfdghfjdgfdjkghfjdsjvhcxhvjkchvjd
        </CardContent>
        <CardFooter className={styles.feedback_card_footer}>
          <CardDescription className="text-sm">
            Authored by Shrey
          </CardDescription>
        </CardFooter>
      </Card>
    </>
  );
};

export default FeedbackCard;
