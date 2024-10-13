import { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "@/shared/ui/ui/use-toast";
import { createIssues } from "../api/createIssues";
import { useNavigate, useParams } from "react-router-dom";

const useCreateIssueHooks = (id: string) => {
  const navigate = useNavigate();
  const params = useParams();
  return useMutation({
    mutationFn: () => createIssues({ taleId: id }),
    onSuccess: (res) => toast({ title: res?.data?.message }),
    onError: (err: AxiosError) => {
      const error = (err as unknown as AxiosError)?.response
        ?.data as unknown as {
        message: string;
        status: number;
      };

      if (error?.status === 401) {
        console.log(err);
        navigate(`/${params.workflowId}/settings?re_authorize=true`);
        toast({
          title: `${error?.message}`,
          description:
            "To ensure the security of your account and maintain uninterrupted access to GitHub features, please re-authorize the application. This step is important to comply with the latest security standards and protect your workflows. Thank you for your cooperation!",
        });
        return;
      }
      toast({ title: (err as unknown as AxiosResponse)?.data?.message });
    },
  });
};

export default useCreateIssueHooks;
