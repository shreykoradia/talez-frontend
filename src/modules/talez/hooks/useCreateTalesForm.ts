import { talesResponseProps } from "./../types";
import { useFormik } from "formik";

import { createTalesSchema } from "@/shared/helpers/validationSchema/createTalesSchema";
import { useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

const useCreateTalesForm = (selectedTale?: string) => {
  const queryClient = useQueryClient();

  const responseData: AxiosResponse<{ tale: talesResponseProps }> | undefined =
    queryClient.getQueryData(["get-tale-by-id", selectedTale]);

  return useFormik({
    initialValues: {
      title: responseData?.data.tale.title || "",
      description: responseData?.data.tale.description || "",
    },
    validationSchema: createTalesSchema,
    validateOnChange: true,
    enableReinitialize: true,
    onSubmit: () => {},
  });
};

export default useCreateTalesForm;
