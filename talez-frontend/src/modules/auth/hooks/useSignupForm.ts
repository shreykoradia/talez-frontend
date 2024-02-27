import { signupValidationSchema } from "@/shared/helpers/validationSchema";
import { useFormik } from "formik";

interface signupForms {
  email: string;
  password: string;
}

const initialValues: signupForms = {
  email: "",
  password: "",
};
export const useSignupForm = () => {
  return useFormik({
    initialValues: initialValues,
    validateOnChange: true,
    enableReinitialize: true,
    validationSchema: signupValidationSchema,
    onSubmit: () => {},
  });
};
