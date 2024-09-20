import { useFormik } from "formik";

import { createWorkflowSchema } from "@/shared/helpers/validationSchema/createWorkflowSchema";

const useCreateWorkflowForm = (action: CallableFunction) => {
  return useFormik({
    initialValues: {
      workFlowTitle: "",
      description: "",
    },
    validationSchema: createWorkflowSchema,
    validateOnChange: true,
    enableReinitialize: true,
    onSubmit: (values, { resetForm }) => {
      action(values);
      resetForm();
    },
  });
};

export default useCreateWorkflowForm;
