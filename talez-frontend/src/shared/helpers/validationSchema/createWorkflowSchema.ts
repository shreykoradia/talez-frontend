import * as Yup from "yup";

export const createWorkflowSchema = () =>
  Yup.object({
    workFlowTitle: Yup.string()
      .required("Title is required")
      .max(50, "Must be atmost 50 charecters"),
    description: Yup.string()
      .required("Description is required")
      .max(1000, "Must be atmost 1000 characters"),
  });
