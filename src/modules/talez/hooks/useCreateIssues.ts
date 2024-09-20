import { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "@/shared/ui/ui/use-toast";
import { createIssues } from "../api/createIssues";

const useCreateIssueHooks = (id: string) => {
  return useMutation({
    mutationFn: () => createIssues({ taleId: id }),
    onSuccess: (res) => toast({ title: res?.data?.message }),
    onError: (err: AxiosResponse) => toast({ title: err?.data?.message }),
  });
};

export default useCreateIssueHooks;
