import * as Yup from "yup";

export const createTalesSchema = () =>
  Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string()
      .required("Description is required")
      .max(1000, "Must be atmost 550 characters"),
  });
