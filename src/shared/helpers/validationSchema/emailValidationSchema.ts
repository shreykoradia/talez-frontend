import * as Yup from "yup";
export const emailValidationSchema = Yup.string()
  .email("Invalid email format")
  .required("Email is required");
