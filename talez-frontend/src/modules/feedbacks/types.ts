export type createFeedbackProps = {
  feedback: string;
};

export type createFeedbackRequestParams = {
  taleId: string;
};

export type feedbackData = {
  _id: string;
  feedback: string;
  feedback_author_id: string;
  feedback_author_name: string;
  tale_id: string;
  created_at: string;
  __v: number;
};

export type feedbackResponseData = {
  totalPages: number;
  feedbacks: feedbackData[];
};
