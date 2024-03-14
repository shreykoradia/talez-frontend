import { TimeStampedModelMixin } from "@/shared/types";

export type workflowResponse = {
  id: string;
  authorId: string;
  authorName: string;
  description: string;
  members: [] | null;
  workFlowTitle: string;
} & TimeStampedModelMixin;

export type workflowRequest = {
  workFlowTitle: string;
  description: string;
};
