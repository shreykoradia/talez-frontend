import styles from "@/assets/css/settings.module.css";
import { Button } from "@/shared/ui/ui/button";
import { Input } from "@/shared/ui/ui/input";
import { Label } from "@/shared/ui/ui/label";
import { Textarea } from "@/shared/ui/ui/textarea";
import { useProfileForm } from "../hooks/useProfileForm";
import { useState } from "react";
import clsx from "clsx";
import { useMutation } from "@tanstack/react-query";
import { updateProfile } from "../api/updateProfile";
import { updateProfileProps } from "../types";
import { toast } from "@/shared/ui/ui/use-toast";
import { useUser } from "@/shared/context/UserProvider";
import { Loader } from "lucide-react";
import { ErrorResponse } from "@/shared/types";
import { getServerError } from "@/shared/helpers/helpers";

const Profile = () => {
  const [statusCounter, setStatusCounter] = useState<number>(0);
  const { refetchUser } = useUser();

  const { mutate: updateProfileFn, isPending: isSubmitting } = useMutation({
    mutationFn: (values: updateProfileProps) => updateProfile(values),
    onSuccess: () => {
      toast({
        title: "Profile Updated Successfully",
        description:
          "We are looking how can you show off your status sit tight untill than!",
      });
      refetchUser();
    },
    onError: (err: ErrorResponse) => {
      toast({
        title: getServerError(err)?.message,
      });
    },
  });
  const { values, handleChange, handleSubmit, touched, errors, dirty } =
    useProfileForm((values: updateProfileProps) => {
      updateProfileFn(values);
      setStatusCounter(0);
    });

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleChange(e);
    setStatusCounter(e.target.value.length);
  };

  return (
    <>
      <div className={styles.profile_form_container}>
        <div className="text-xl font-medium">
          <p className="text-primary">Profile</p>
          <p className="text-muted-foreground text-sm font-normal">
            This is how others will see you on the application
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.profile_form_container}>
            <Label htmlFor="username" className="text-primary">
              Username
            </Label>
            <Input
              id="username"
              type="text"
              value={values.username}
              onChange={handleChange}
              placeholder="Something like Joe Miller"
            />
            {errors.username && touched.username ? (
              <div className={"error_control"}>
                <p>{errors.username}</p>
              </div>
            ) : null}
            <Label htmlFor="email" className="text-primary">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Something like joe.miller@lastofus.io"
              disabled
              className="opacity-50"
            />
            {errors.email && touched.email ? (
              <div className={"error_control"}>
                <p>{errors.email}</p>
              </div>
            ) : null}
            <div className="grid gap-2">
              <Label htmlFor="status" className="text-primary">
                Status
              </Label>
              <div className="relative">
                <Textarea
                  id="status"
                  className="resize-y max-h-20 min-h-10 no-scrollbar"
                  maxLength={280}
                  onChange={handleTextAreaChange}
                  value={values.status}
                />
                <p
                  className={clsx(
                    "absolute right-2 bottom-1 text-xs text-primary mt-2",
                    { "text-crimsonred": statusCounter === 120 }
                  )}
                >
                  {statusCounter}
                </p>
              </div>
              {errors.status && touched.status ? (
                <div className={"error_control"}>
                  <p>{errors.status}</p>
                </div>
              ) : null}
            </div>
            <Button
              type="submit"
              variant={"default"}
              className="w-1/4"
              disabled={!dirty || isSubmitting}
            >
              {isSubmitting ? <Loader /> : "Update Profile"}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
