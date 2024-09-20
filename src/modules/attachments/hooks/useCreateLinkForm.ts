import { createLinkSchema } from "@/shared/helpers/validationSchema/createLinkSchema";
import { useFormik } from "formik";

const useCreateLinksForm = () => {
  return useFormik({
    initialValues: {
      linkTitle: "",
      linkUrl: "",
    },
    validationSchema: createLinkSchema,
    validateOnChange: true,
    enableReinitialize: true,
    onSubmit: () => {},
  });
};

export default useCreateLinksForm;
