import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/ui/card";

import styles from "@/assets/css/talez.module.css";
import { BookMarked } from "lucide-react";
import { talesResponseProps } from "../types";

interface talezCardProps {
  tale: talesResponseProps;
}

const TalezCard = ({ tale }: talezCardProps) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{tale?.title}</CardTitle>
          <CardDescription>Authored by {tale?.author_name}</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-secondary-foreground h-[100px] mb-2 break-words rounded-lg overflow-y-auto no-scrollbar">
          <p className={styles.talez_description_section}>
            {tale?.description}
          </p>
        </CardContent>
        <CardFooter>
          <div className="flex gap-2 justify-end items-center w-full">
            <BookMarked />
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default TalezCard;
