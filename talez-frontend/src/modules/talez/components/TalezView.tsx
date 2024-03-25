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

const TalezView = () => {
  const paramsKey = useParams();
  const taleId = paramsKey?.taleId || 0;

  const params = {
    taleId: taleId,
  };

  const { data: taleData } = useGetTaleById(params);

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
              placeholder="Send your valuable feedback to make user's happy"
              rows={2}
              className="h-[150px] resize-none"
            />
            <div className={styles.action_button_container}>
              <Button variant={"default"}>Send Feedback</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TalezView;
