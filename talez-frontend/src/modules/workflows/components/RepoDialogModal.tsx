import React, { useCallback, useRef, useState, useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Button } from "@/shared/ui/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/ui/dialog";
import Loader from "@/shared/components/loader/Loader";
import { getRepository } from "../api/getRepositories";
import { LISTING_LIMIT } from "@/shared/constant";
import { ConnectReqProp, repositoryData } from "../types";

type RepoDialogProp = {
  onClose: () => void;
  onSelectRepository: (repo: ConnectReqProp) => void;
};

const RepoDialogModal: React.FC<RepoDialogProp> = ({
  onClose,
  onSelectRepository,
}) => {
  const params = useParams();
  const [selectedRepo, setSelectedRepo] = useState<repositoryData | null>(null);
  const observerTarget = useRef<HTMLDivElement>(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ["repositories", params.workflowId],
    queryFn: ({ pageParam = 0 }) => getRepository({ offset: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.data.hasMoreData ? allPages.length * LISTING_LIMIT : undefined,
    enabled: !!params?.workflowId,
  });

  const repositories =
    data?.pages.flatMap((page) => page.data.repositories) ?? [];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  const handleSelectRepository = useCallback(() => {
    if (selectedRepo) {
      const payload = {
        repo_id: `${selectedRepo?.id}`,
        repo_name: selectedRepo?.name,
        repo_owner_name: selectedRepo?.owner?.login,
        repo_clone_url: selectedRepo?.clone_url,
        repo_ssh_url: selectedRepo?.ssh_url,
        repo_git_url: selectedRepo?.git_url,
        repoOpenIssueCount: selectedRepo?.open_issues_count,
        workflowId: params?.workflowId || "",
      };
      onSelectRepository(payload);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRepo, onSelectRepository]);

  const renderRepositoryItem = (repo: repositoryData) => (
    <Button
      variant={repo?.id === selectedRepo?.id ? "default" : "outline"}
      key={repo.id}
      onClick={() => setSelectedRepo(repo)}
    >
      {repo.name}
    </Button>
  );

  const renderRepositoryList = () => (
    <div className="flex flex-col gap-4">
      {repositories.map(renderRepositoryItem)}
      {renderLoadingOrEndMessage()}
    </div>
  );

  const renderLoadingOrEndMessage = () => {
    if (isFetchingNextPage || hasNextPage) {
      return (
        <div
          ref={observerTarget}
          className="h-10 flex items-center justify-center"
        >
          {isFetchingNextPage && <Loader />}
        </div>
      );
    }
    if (!hasNextPage && repositories.length > 0) {
      return (
        <div className="text-center text-gray-500 py-2">
          No more repositories to load.
        </div>
      );
    }
    return null;
  };

  const renderContent = () => {
    if (isError) {
      return (
        <div className="text-destructive">
          Error loading repositories. Please try again.
        </div>
      );
    }

    return (
      <div className="flex-grow max-h-[40vh] h-full overflow-y-auto mb-4 no-scrollbar">
        {isLoading ? <Loader /> : renderRepositoryList()}
      </div>
    );
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Select Repository</DialogTitle>
          <DialogDescription>
            Selected repository will be linked to the current workflow.
          </DialogDescription>
        </DialogHeader>

        {renderContent()}

        <DialogFooter>
          <Button onClick={handleSelectRepository} disabled={!selectedRepo}>
            Select Repository
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RepoDialogModal;
