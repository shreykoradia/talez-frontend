import { feedbackData } from "./../types";
import { createFeedbackSchema } from "@/shared/helpers/validationSchema/createFeedbackSchema";
import { useFormik } from "formik";

export const useFeedbackForm = (feedback: feedbackData) => {
  return useFormik({
    initialValues: {
      feedback: feedback?.feedback || "",
    },
    validateOnChange: true,
    enableReinitialize: true,
    validationSchema: createFeedbackSchema,
    onSubmit: () => {},
  });
};
