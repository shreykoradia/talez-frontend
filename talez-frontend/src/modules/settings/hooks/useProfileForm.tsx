import { useUser } from "@/shared/context/UserProvider";
import { profileValidationSchema } from "@/shared/helpers/validationSchema/updateProfileValidationSchema";
import { useFormik } from "formik";

export const useProfileForm = (action: CallableFunction) => {
  const { user } = useUser();
  return useFormik({
    initialValues: {
      email: user?.email || "",
      username: user?.username || "",
      status: user?.status || "",
    },
    validateOnChange: false,
    enableReinitialize: true,
    validationSchema: profileValidationSchema,
    onSubmit: (values) => {
      action(values);
    },
  });
};
