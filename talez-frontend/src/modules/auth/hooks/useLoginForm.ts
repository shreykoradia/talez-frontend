import { loginValidationSchema } from "@/shared/helpers/validationSchema/authValidationSchema";
import { useFormik } from "formik";

interface loginFormProps {
  email: string;
  password: string;
}

const initialValues: loginFormProps = {
  email: "",
  password: "",
};
export const useLoginForm = (action: CallableFunction) => {
  return useFormik({
    initialValues: initialValues,
    validateOnChange: false,
    enableReinitialize: true,
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      action(values);
    },
  });
};
