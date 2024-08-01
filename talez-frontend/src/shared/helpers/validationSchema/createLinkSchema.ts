import * as Yup from "yup";

export const createLinkSchema = () =>
  Yup.object({
    linkTitle: Yup.string()
      .required("Title is required")
      .max(150, "Must Be atmost 150 characters"),
    linkUrl: Yup.string().url().required("Link Url is required"),
  });
