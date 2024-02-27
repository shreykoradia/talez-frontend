import { loginValidationSchema } from "@/shared/helpers/validationSchema";
import { useFormik } from "formik";

interface loginFormProps {
  email: string;
  password: string;
}

const initialValues: loginFormProps = {
  email: "",
  password: "",
};
export const useLoginForm = () => {
  return useFormik({
    initialValues: initialValues,
    validateOnChange: true,
    enableReinitialize: true,
    validationSchema: loginValidationSchema,
    onSubmit: () => {},
  });
};
