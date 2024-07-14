import { TimeStampedModelMixin } from "@/shared/types";
import { AxiosResponse } from "axios";

export type infiniteFeedback = {
  pageParams: Array<number>;
  pages: Array<AxiosResponse<feedbackResponseData>>;
};

export type createFeedbackProps = {
  feedback: string;
};

export type createFeedbackRequestParams = {
  taleId: string;
};

export type feedbackData = {
  _id: string;
  feedback: string;
  feedbackAuthorId: string;
  feedbackAuthorName: string;
  taleId: string;
  __v: number;
} & TimeStampedModelMixin;

export type feedbackResponseData = {
  totalPages: number;
  feedbacks: feedbackData[];
};

export type reactionRequestProps = {
  feedbackId: string | undefined;
  vote_type: string;
};
