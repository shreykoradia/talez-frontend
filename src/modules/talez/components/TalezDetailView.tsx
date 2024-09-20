import Attachments from "@/modules/attachments";
import Loader from "@/shared/components/loader/Loader";
import { talesResponseProps } from "../types";
import { Button } from "@/shared/ui/ui/button";
import useCreateIssueHooks from "../hooks/useCreateIssues";
import useIntegratedRepo from "@/modules/workflows/hooks/useIntegratedRepo";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "@/shared/ui/ui/use-toast";

const TalezDetailView = ({
  tale,
  isLoading,
}: {
  tale: talesResponseProps;
  isLoading: boolean;
}) => {
  const { workflowId } = useParams();
  const navigate = useNavigate();
  const { mutate: issueFn, isPending: isIssuePending } = useCreateIssueHooks(
    tale?._id
  );

  const { data } = useIntegratedRepo(workflowId || "");

  const handleIssueFn = () => {
    if (data?.connectedRepo === null) {
      toast({
        title: "Please connect a repository",
        action: (
          <Button
            variant={"link"}
            onClick={() => navigate(`/${workflowId}/settings`)}
          >
            Connect
          </Button>
        ),
      });
      return;
    }
    return issueFn();
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <section className="p-4 h-full">
        <div className="grid gap-4">
          <div className="flex justify-end gap-4 items-center maxMd:hidden">
            <Attachments selectedTale={tale?._id} />
            <Button
              variant={"outline"}
              onClick={handleIssueFn}
              disabled={isIssuePending}
              type="button"
            >
              {isIssuePending ? <Loader /> : null}
              Create Issues
            </Button>
          </div>
          <p className="text-md w-full md:break-words maxMd:text-justify">
            {tale?.description}
          </p>
        </div>
      </section>
    </>
  );
};

export default TalezDetailView;
