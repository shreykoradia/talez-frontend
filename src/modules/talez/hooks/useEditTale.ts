import { talesResponseProps } from "./../types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { CreateTalesRequestProps, talesProps } from "../types";
import { toast } from "@/shared/ui/ui/use-toast";
import { ErrorResponse } from "@/shared/types";
import { getServerError } from "@/shared/helpers/helpers";
import { editTales } from "../api/editTales";

interface useEditProps {
  queryKeyParams: { workflowId: string; offset: number };
  handleUpdatedTale: (updatedTale: talesResponseProps) => void;
}

const useEditTale = ({ queryKeyParams, handleUpdatedTale }: useEditProps) => {
  const queryClient = useQueryClient();
  const query = useMutation({
    mutationFn: ({
      values,
      params,
    }: {
      values: CreateTalesRequestProps;
      params: { taleId: string | number };
    }) => editTales(values, params),
    onSuccess: (res) => {
      toast({
        title: res?.data?.message,
      });
      handleUpdatedTale(res?.data?.updatedTale);
      queryClient.setQueryData(
        ["get-tales", queryKeyParams.offset, queryKeyParams.workflowId],
        (oldData: { data: { tales: talesProps } }) => {
          if (!oldData) {
            return oldData;
          }
          const oldTaleDataIndex = oldData.data.tales.tales.findIndex(
            (tale) => tale._id === res?.data?.updatedTale._id
          );
          oldData.data.tales.tales[oldTaleDataIndex] = res?.data?.updatedTale;
          return oldData;
        }
      );
    },
    onError: (err: ErrorResponse) => {
      toast({
        title: getServerError(err)?.message,
      });
    },
  });

  const { mutate: editTaleMutateFn, isPending: isTaleEditPending } = query;
  return { editTaleMutateFn, isTaleEditPending };
};

export default useEditTale;
