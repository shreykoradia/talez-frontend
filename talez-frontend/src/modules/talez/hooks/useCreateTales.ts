import { useMutation } from "@tanstack/react-query";

import { CreateTalesRequestProps } from "../types";
import { createTales } from "../api/createtales";
import { toast } from "@/shared/ui/ui/use-toast";
import { useGetTales } from "./useGetTales";
import { useParams } from "react-router-dom";

const useCreateTales = () => {
  const queryParams = useParams();

  const params = {
    workflowId: queryParams?.workflowId || "",
  };

  const { refetchTalesFn } = useGetTales({
    offset: 0,
    workflowId: params?.workflowId,
  });
  const query = useMutation({
    mutationFn: ({
      values,
      params,
    }: {
      values: CreateTalesRequestProps;
      params: { workflowId: string | number };
    }) => createTales(values, params),
    onSuccess: () => {
      refetchTalesFn();
    },
    onError: () => {
      toast({
        title: "Something went wrong huh!",
        description:
          "Try adding feedback after a while, Talez is currently in development mode, Thanks!",
      });
    },
  });

  const { mutate: createTalesFn, isPending: isCreatingTales } = query;
  return { createTalesFn, isCreatingTales };
};

export default useCreateTales;
