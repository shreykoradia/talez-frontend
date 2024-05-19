import { getVerificationLink } from "@/shared/api/getVerificationLink";
import { cn } from "@/shared/lib/utils";
import { buttonVariants } from "@/shared/ui/ui/button";
import { toast } from "@/shared/ui/ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import { BellPlus, Verified } from "lucide-react";

const VerifyModal = () => {
  const { mutate: verificationFn } = useMutation({
    mutationFn: () => getVerificationLink(),
    onSuccess: () => {
      toast({
        title: "Verification Link sent on the registered address",
        description:
          "Remember link gets expired after 10 mins click it soon, once you verify refresh the page!",
      });
    },
    onError: () => {
      toast({
        title: "Verification Link was not sent",
        description:
          "Try after some time currently Talez is in development phase, it might take some while, Thanks",
      });
    },
  });

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="modal_container max-w-[600px] max-h-[200px]">
          <div className="modal_container_title w-full">
            <div className="text-xl text-primary flex justify-center items-center w-full gap-4">
              <p>Verify your Email Address</p>
              <Verified size={40} />
            </div>
            <p className="text-muted-foreground text-center">
              Please verify your email address to activate your account. This
              helps us keep our application secure. We respect your privacy and
              never share your data or send spam. If you didn't receive the
              verification email or if the link has expired, click below to
              resend the verification email. Once verified Refresh the Page.
            </p>
          </div>
          <div className="w-full text-center">
            <p
              className={cn(buttonVariants({ variant: "link" }))}
              onClick={() => verificationFn()}
            >
              Get Verification Link{" "}
              <span className="ml-2">
                <BellPlus size={20} />
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyModal;
