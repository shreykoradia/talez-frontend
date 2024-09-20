import { createFeedbackSchema } from "@/shared/helpers/validationSchema/createFeedbackSchema";
import { useFormik } from "formik";

export const useFeedbackForm = () => {
  return useFormik({
    initialValues: {
      feedback: "",
    },
    validateOnChange: true,
    enableReinitialize: true,
    validationSchema: createFeedbackSchema,
    onSubmit: () => {},
  });
};
