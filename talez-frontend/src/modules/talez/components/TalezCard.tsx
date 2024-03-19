import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/ui/card";

import { BookMarked } from "lucide-react";
import { talesResponseProps } from "../types";
import { useNavigate } from "react-router-dom";

interface talezCardProps {
  tale: talesResponseProps;
}

const TalezCard = ({ tale }: talezCardProps) => {
  const navigate = useNavigate();

  const onTalezCardClick = (id: string) => {
    navigate(`/talez/${id}`);
  };

  return (
    <>
      <Card
        className="cursor-pointer"
        onClick={() => onTalezCardClick(tale?._id)}
      >
        <CardHeader>
          <CardTitle className="font-medium">{tale?.title}</CardTitle>
          <CardDescription>Authored by {tale?.author_name}</CardDescription>
        </CardHeader>
        <CardContent className="h-[50px] mb-2 rounded-lg overflow-y-auto no-scrollbar">
          <p>{tale?.description}</p>
        </CardContent>
        <CardFooter>
          <div className="flex gap-2 justify-end items-center w-full">
            <BookMarked size={16} />
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default TalezCard;
