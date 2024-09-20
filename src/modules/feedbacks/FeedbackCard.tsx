import styles from "@/assets/css/feedback.module.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/ui/card";
import clsx from "clsx";
import { feedbackData } from "./types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const FeedbackCard = ({
  feedbackData,
  onOpenViewMode,
}: {
  feedbackData: feedbackData;
  onOpenViewMode: CallableFunction;
}) => {
  dayjs.extend(relativeTime);

  return (
    <>
      <Card className={styles.feedback_card_container}>
        <CardHeader className={styles.feedback_card_header}>
          <CardTitle className="text-md">
            <div className="flex justify-between items-center">
              <p>Feedback by {feedbackData?.feedbackAuthorName}</p>
              <button
                className={clsx(styles.open_feedback_button, "hidden")}
                onClick={() => onOpenViewMode(feedbackData?._id)}
              >
                open
              </button>
            </div>
          </CardTitle>
          <CardDescription className="text-sm">
            🗨️ {dayjs(feedbackData?.createdAt).fromNow()}
          </CardDescription>
        </CardHeader>
        <CardContent className={styles.feedback_card_content}>
          {feedbackData?.feedback}
        </CardContent>
      </Card>
    </>
  );
};

export default FeedbackCard;
