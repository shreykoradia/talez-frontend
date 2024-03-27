import * as Yup from "yup";

export const createFeedbackSchema = () =>
  Yup.object({
    feedback: Yup.string()
      .max(250, "Must be atmost 250 characters")
      .required("Feedback is required"),
  });
