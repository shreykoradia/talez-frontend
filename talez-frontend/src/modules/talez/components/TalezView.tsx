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
import useGetFeedbacks from "@/modules/feedbacks/hooks/useGetFeedbacks";
import { toast } from "@/shared/ui/ui/use-toast";
import { useState } from "react";
import clsx from "clsx";
import { Loader } from "lucide-react";

const TalezView = () => {
  const [counterFeedback, setCounterFeedback] = useState<number>(0);

  const paramsKey = useParams();
  const taleId = paramsKey?.taleId || 0;

  const params = {
    taleId: taleId,
  };

  const { data: taleData } = useGetTaleById(params);
  const { values, handleChange, errors, resetForm } = useFeedbackForm();
  const { refetch: refetchFeedbacksFn } = useGetFeedbacks(params);

  const { isPending: isCreatingFeedback, mutate: createFeedbackFn } =
    useMutation({
      mutationFn: ({
        values,
        params,
      }: {
        values: createFeedbackProps;
        params: { taleId: string | number };
      }) => createFeedback(values, params),
      onSuccess: () => {
        toast({
          title: "Feedback added successfully",
          description:
            "Check out feedbacks by other, upvote or downvote and make your product better",
        });
        refetchFeedbacksFn();
      },
      onError: () => {
        toast({
          title: "Something went wrong huh!",
          description:
            "Try adding feedback after a while, Talez is currently in development mode, Thanks!",
        });
      },
    });

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleChange(e);
    setCounterFeedback(e.target.value.length);
  };

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
          <div className="relative w-full">
            <Textarea
              id="feedback"
              placeholder="Send your valuable feedback to make user's happy, for example We could directly store the user email inside our database schema of users rather than looking alternative method to do more expensive querying inside the databse share schema it will be lot easier to migrate the databse later on... likewise all within 500 characters :)"
              rows={4}
              className="resize-y max-h-32 min-h-16 border-none focus-visible:ring-0 no-scrollbar"
              onChange={handleTextAreaChange}
              value={values.feedback}
              maxLength={500}
            />
            <p
              className={clsx("absolute right-2 bottom-1 text-sm", {
                "text-crimsonred opacity-80": counterFeedback === 500,
              })}
            >
              {counterFeedback}
            </p>
          </div>
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
              {isCreatingFeedback ? <Loader /> : "Send Feedback"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TalezView;
