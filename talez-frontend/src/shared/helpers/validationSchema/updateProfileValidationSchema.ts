import * as Yup from "yup";

export const profileValidationSchema = () =>
  Yup.object({
    username: Yup.string()
      .required("username is required")
      .max(15, "You have reached your maximum character limit, less than 15"),
    email: Yup.string().email("Invalid Email").optional(),
    status: Yup.string().optional().max(120, "Must be atmost 120 characters"),
  });
