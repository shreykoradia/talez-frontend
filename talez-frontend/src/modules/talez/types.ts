import { TimeStampedModelMixin } from "@/shared/types";

export type CreateTalesRequestProps = {
  title: string;
  description: string;
};

export type talesResponseProps = {
  _id: string;
  title: string;
  description: string;
  author_id: string;
  author_name: string;
  workflow_id: string;
  __v: number;
} & TimeStampedModelMixin;

export interface talesProps {
  totalPages: number;
  tales: talesResponseProps[];
}
