import React from "react";
import { Button } from "@/shared/ui/ui/button";
import { Card, CardContent, CardFooter } from "@/shared/ui/ui/card";
import { Github } from "lucide-react";
import RepoDialogModal from "./RepoDialogModal";
import { ConnectReqProp } from "../types";
import { useMutation } from "@tanstack/react-query";
import { connectRepo } from "../api/connectRepository";

const WorkflowIntegations = () => {
  const [openRepoModal, setOpenRepoModal] = React.useState<boolean>(false);

  // const onSelectRepository = (repo: repositoryData) => {
  //   setSelectedRepo(repo);
  // };

  const { mutate: connectRepoFn, isPending: isConnectingRepo } = useMutation({
    mutationFn: (selectedRepo: ConnectReqProp) =>
      connectRepo({ data: selectedRepo }),
    onSuccess: () => console.log("connected"),
    onError: () => console.log("not connected"),
  });

  console.log(isConnectingRepo);

  return (
    <>
      <h3 className="text-xl font-semibold mb-8">Integrations</h3>
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
          <Button onClick={() => setOpenRepoModal(!openRepoModal)}>
            Connect to Repository
          </Button>
        </CardFooter>
      </Card>

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
