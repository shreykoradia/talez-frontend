import Header from "@/shared/components/header/Header";
import { Button } from "@/shared/ui/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/ui/card";
import { Textarea } from "@/shared/ui/ui/textarea";
import styles from "@/assets/css/talez.module.css";
import { useParams } from "react-router-dom";
import { useGetTaleById } from "../hooks/useGetTaleById";
import { useFeedbackForm } from "@/modules/feedbacks/hooks/useFeedbackForm";
import { useMutation } from "@tanstack/react-query";
import { createFeedback } from "@/modules/feedbacks/api/createFeedback";
import { createFeedbackProps } from "@/modules/feedbacks/types";

const TalezView = () => {
  const paramsKey = useParams();
  const taleId = paramsKey?.taleId || 0;

  const params = {
    taleId: taleId,
  };

  const { data: taleData } = useGetTaleById(params);
  const { values, handleChange, errors, resetForm } = useFeedbackForm();

  const { isPending: isCreatingFeedback, mutate: createFeedbackFn } =
    useMutation({
      mutationFn: ({
        values,
        params,
      }: {
        values: createFeedbackProps;
        params: { taleId: string | number };
      }) => createFeedback(values, params),
    });

  const handleFeedbackButton = () => {
    createFeedbackFn({ values, params });
    resetForm();
  };

  return (
    <>
      <Header
        displayCreate={false}
        headerTitle="Talez"
        displayMore={true}
        displayCreateTalez={false}
      />
      <div className={styles.talez_detail_parent_container}>
        <Card className={styles.talez_card_view}>
          <CardHeader>
            <CardTitle>{taleData?.title}</CardTitle>
            <CardDescription>
              Authored By {taleData?.author_name}
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[500px] break-words rounded-md overflow-y-auto no-scrollbar">
            <p>{taleData?.description}</p>
          </CardContent>
        </Card>
        <div className={styles.feedback_container}>
          <div className="relative">
            <Textarea
              id="feedback"
              placeholder="Send your valuable feedback to make user's happy"
              rows={2}
              className="h-[150px] resize-none"
              onChange={handleChange}
              value={values.feedback}
            />
            <div className={styles.action_button_container}>
              <Button
                disabled={
                  (errors?.feedback?.length && errors?.feedback?.length > 0) ||
                  isCreatingFeedback ||
                  false
                }
                variant={"default"}
                onClick={handleFeedbackButton}
              >
                Send Feedback
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TalezView;
