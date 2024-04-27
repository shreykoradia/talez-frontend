import * as Yup from "yup";

export const createTalesSchema = () =>
  Yup.object({
    title: Yup.string()
      .required("Title is required")
      .max(50, "Must Be atmost 50 characters"),
    description: Yup.string()
      .required("Description is required")
      .max(5000, "Must be atmost 5000 characters"),
  });
