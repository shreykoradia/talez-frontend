import { talesResponseProps } from "./../types";
import { useFormik } from "formik";

import { createTalesSchema } from "@/shared/helpers/validationSchema/createTalesSchema";

const useCreateTalesForm = (selectedTale?: talesResponseProps) => {
  return useFormik({
    initialValues: {
      title: selectedTale?.title || "",
      description: selectedTale?.description || "",
    },
    validationSchema: createTalesSchema,
    validateOnChange: true,
    enableReinitialize: true,
    onSubmit: () => {},
  });
};

export default useCreateTalesForm;
