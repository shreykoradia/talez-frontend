import * as Yup from "yup";

export const createFeedbackSchema = () =>
  Yup.object({
    feedback: Yup.string()
      .max(500, "Must be atmost 500 characters")
      .required("Feedback is required"),
  });
