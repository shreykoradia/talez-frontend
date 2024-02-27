import * as Yup from "yup";

export const signupValidationSchema = () =>
  Yup.object({
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Must be atleast Eight characters"),
  });

export const loginValidationSchema = () =>
  Yup.object({
    username: Yup.string()
      .required("Username is required")
      .max(15, "You have reached your maximum character limit, less than 15"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Must be atleast six characters"),
  });
