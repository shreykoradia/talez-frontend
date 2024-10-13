import React from "react";
import { Button } from "@/shared/ui/ui/button";
import { Card, CardContent, CardFooter } from "@/shared/ui/ui/card";
import { Github, Trash } from "lucide-react";
import RepoDialogModal from "./RepoDialogModal";
import { ConnectReqProp } from "../types";
import { useMutation } from "@tanstack/react-query";
import { connectRepo } from "../api/connectRepository";
import useIntegratedRepo from "../hooks/useIntegratedRepo";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Label } from "@/shared/ui/ui/label";
import { Input } from "@/shared/ui/ui/input";
import Loader from "@/shared/components/loader/Loader";
import unlinkedRepository, {
  UnlinkedResponseType,
} from "../api/unlinkRepository";
import { toast } from "@/shared/ui/ui/use-toast";
import { AxiosResponse } from "axios";
import { useUser } from "@/shared/context/UserProvider";

const WorkflowIntegations = () => {
  const [openRepoModal, setOpenRepoModal] = React.useState<boolean>(false);
  const { workflowId } = useParams();
  const { user } = useUser();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const isReauthorizeNeeded = searchParams.get("re_authorize");

  const {
    isLoading: isLoadingLinkedRepo,
    data: linkedData,
    refetchWorkflowsFn: refetchLinkedRepoFn,
  } = useIntegratedRepo(workflowId || "");

  const { mutate: connectRepoFn, isPending: isConnectingRepo } = useMutation({
    mutationFn: (selectedRepo: ConnectReqProp) =>
      connectRepo({ data: selectedRepo }),
    onSuccess: (res) => {
      toast({
        title: `${res?.data?.repositoryDetails?.repoName} is linked successfully`,
      }),
        refetchLinkedRepoFn();
      setOpenRepoModal(!openRepoModal);
    },
    onError: () =>
      toast({ title: "Something went wrong try connecting later." }),
  });

  const { mutate: unlinkRepoFn, isPending: isUnlinking } = useMutation({
    mutationFn: () => unlinkedRepository(workflowId || ""),
    onSuccess: (res) => {
      navigate(`/${workflowId}/settings`);
      toast({ title: res?.data?.message });
    },
    onError: (err: AxiosResponse<UnlinkedResponseType>) =>
      toast({ title: err.data.message }),
  });

  if (isLoadingLinkedRepo || isConnectingRepo) {
    return <Loader />;
  }
  return (
    <>
      <h3 className="text-xl font-semibold mb-8">Integrations</h3>
      {!user?.githubToken ||
        (isReauthorizeNeeded && (
          <div className="border border-muted text-sm w-1/2 text-primary p-4 mb-8 rounded-lg">
            <div className="flex justify-start items-center gap-4">
              <Github size={30} />
              <p>
                Please authorize your GitHub account for seamless integration.
                For authorization,
                <button
                  className="text-muted ml-2 hover:underline"
                  onClick={() =>
                    (window.location.href = `${
                      import.meta.env.VITE_BACKEND_URL
                    }auth/github`)
                  }
                >
                  click here to enable access
                </button>
              </p>
            </div>
          </div>
        ))}
      {linkedData?.connectedRepo ? (
        <>
          <div className="grid gap-8 w-1/2 maxMd:w-full">
            <div className="grid gap-2">
              <Label className="text-muted font-semibold">
                Repository Name
              </Label>
              <Input
                type="text"
                value={linkedData?.connectedRepo?.repoName}
                readOnly
              />
            </div>
            <div>
              <Label className="text-muted font-semibold">Clone URL</Label>
              <Input
                type="text"
                value={linkedData?.connectedRepo?.repoCloneUrl}
                readOnly
              />
            </div>
            <div>
              <Button variant={"destructive"} onClick={() => unlinkRepoFn()}>
                {isUnlinking ? <Loader /> : null}
                <Trash size={14} className="mr-2" /> Unlink Repository
              </Button>
            </div>
          </div>
        </>
      ) : (
        <Card className="border-muted w-[300px] maxMd:w-full">
          <CardContent className="p-8">
            <div className="grid gap-2 place-content-center  place-items-center">
              <div className="flex flex-col gap-2 items-center">
                <Github size={30} />
                <p className="text-xl font-semibold">Github</p>
              </div>
              <div className="text-sm text-muted text-center">
                Connect Github Repository to workflow and start writing your
                tickets from scratch.
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center items-center">
            <Button
              onClick={() => setOpenRepoModal(!openRepoModal)}
              disabled={!user?.githubToken}
            >
              Connect to Repository
            </Button>
          </CardFooter>
        </Card>
      )}

      {openRepoModal ? (
        <RepoDialogModal
          onClose={() => setOpenRepoModal(!openRepoModal)}
          onSelectRepository={(repo: ConnectReqProp) => connectRepoFn(repo)}
        />
      ) : null}
    </>
  );
};

export default WorkflowIntegations;
