import { useFormik } from "formik";

import { createTalesSchema } from "@/shared/helpers/validationSchema/createTalesSchema";

const useCreateTalesForm = () => {
  return useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: createTalesSchema,
    validateOnChange: true,
    enableReinitialize: true,
    onSubmit: () => {},
  });
};

export default useCreateTalesForm;
