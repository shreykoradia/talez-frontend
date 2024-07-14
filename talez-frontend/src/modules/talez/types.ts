import { TimeStampedModelMixin } from "@/shared/types";

export type CreateTalesRequestProps = {
  title: string;
  description: string;
};

export type talesResponseProps = {
  _id: string;
  title: string;
  description: string;
  authorId: string;
  authorName: string;
  workflowId: string;
  __v: number;
} & TimeStampedModelMixin;

export interface talesProps {
  totalPages: number;
  tales: talesResponseProps[];
}
