import * as Yup from "yup";

export const createWorkflowSchema = () =>
  Yup.object({
    workFlowTitle: Yup.string().required("Title is required"),
    description: Yup.string()
      .required("Description is required")
      .max(550, "Must be atmost 550 characters"),
  });
