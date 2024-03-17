import { useMutation } from "@tanstack/react-query";

import { CreateTalesRequestProps } from "../types";
import { createTales } from "../api/createtales";

const useCreateTales = () => {
  //   const { refetchWorkflowsFn } = useGetWorkflows();
  const query = useMutation({
    mutationFn: ({
      values,
      params,
    }: {
      values: CreateTalesRequestProps;
      params: { workflowId: string | number };
    }) => createTales(values, params),
    onSuccess: (res) => console.log(res),
  });

  const { mutate: createTalesFn, isPending: isCreatingTales } = query;
  return { createTalesFn, isCreatingTales };
};

export default useCreateTales;
