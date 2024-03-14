import { signupValidationSchema } from "@/shared/helpers/validationSchema/authValidationSchema";
import { useFormik } from "formik";

interface signupForms {
  username: string;
  email: string;
  password: string;
}

const initialValues: signupForms = {
  username: "",
  email: "",
  password: "",
};
export const useSignupForm = (action: CallableFunction) => {
  return useFormik({
    initialValues: initialValues,
    validateOnChange: true,
    enableReinitialize: true,
    validationSchema: signupValidationSchema,
    onSubmit: (values, { resetForm }) => {
      action(values);
      return resetForm();
    },
  });
};
