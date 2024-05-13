import * as Yup from "yup";

export const signupValidationSchema = () =>
  Yup.object({
    username: Yup.string()
      .required("username is required")
      .max(15, "You have reached your maximum character limit, less than 15"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Must be atleast Eight characters"),
  });

export const loginValidationSchema = () =>
  Yup.object({
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Must be atleast Eight characters"),
  });
