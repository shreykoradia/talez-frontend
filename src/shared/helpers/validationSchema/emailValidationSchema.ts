import * as Yup from "yup";
export const emailValidationSchema = Yup.string()
  .email("Invalid email format")
  .required("Email is required");

export const isValidUsername = (input: string) =>
  /^[a-zA-Z0-9._]+$/.test(input);
