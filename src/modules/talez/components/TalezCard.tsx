import clsx from "clsx";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/ui/card";

import styles from "@/assets/css/talez.module.css";

import { talesResponseProps } from "../types";

interface talezCardProps {
  tale: talesResponseProps;
  isTaleOpen: boolean;
  handleCardClick: (taleId: string) => void;
}

const TalezCard = ({ tale, handleCardClick, isTaleOpen }: talezCardProps) => {
  const onTalezCardClick = (id: string) => {
    handleCardClick(id);
  };

  return (
    <>
      <div className={styles.talez_card_container}>
        <Card className="border-foreground maxMd:border-0 maxMd:border-b maxMd:rounded-none">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="font-medium hover:text-primary break-words">
                  {tale?.title}
                </CardTitle>
                <CardDescription>
                  Authored by {tale?.authorName}
                </CardDescription>
              </div>
              <button
                className={clsx(
                  { [styles.open_talez_button]: !isTaleOpen },
                  "hidden text-primary text-xs maxMd:block maxMd:border maxMd:rounded-sm maxMd:px-2 maxMd:border-input maxMd:bg-background"
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  onTalezCardClick(tale?._id);
                }}
              >
                open
              </button>
            </div>
          </CardHeader>
          <CardContent className="h-[50px] break-words mb-2 rounded-lg overflow-hidden">
            <p>{tale?.description}</p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default TalezCard;
