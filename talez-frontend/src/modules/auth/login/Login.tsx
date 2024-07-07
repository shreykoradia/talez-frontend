import { setCookie } from "typescript-cookie";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import { Button, buttonVariants } from "@/shared/ui/ui/button";
import { Input } from "@/shared/ui/ui/input";
import { toast } from "@/shared/ui/ui/use-toast";
import { Label } from "@/shared/ui/ui/label";
import styles from "@/assets/css/auth.module.css";
import Sitting from "@/assets/icons/sitting.svg?react";

import { useLoginForm } from "../hooks/useLoginForm";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/login";
import { cn } from "@/shared/lib/utils";
import { ErrorResponse } from "@/shared/types";
import { getServerError } from "@/shared/helpers/helpers";
import { Github } from "lucide-react";

interface loginFormProps {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();

  const { mutate: loginMutateFn } = useMutation({
    mutationFn: (values: loginFormProps) => login(values),
    onSuccess: (res) => {
      if (res?.data) {
        setCookie("accessToken", res?.data?.access_token);
      }
      resetForm();
      navigate("/dashboard");
    },
    onError: (err: ErrorResponse) => {
      toast({
        title: getServerError(err)?.message,
      });
      return err;
    },
  });

  const { values, handleChange, handleSubmit, errors, touched, resetForm } =
    useLoginForm((values: loginFormProps) => loginMutateFn(values));

  const handleGithubSignin = () => {
    window.location.href = `${import.meta.env.VITE_BACKEND_URL}auth/github`;
  };

  return (
    <>
      <div className={styles.login_parent_container}>
        <div className="grid w-[500px] gap-4 maxLg:w-full maxLg:px-8">
          <div className={styles.login_title_container}>
            <p className="text-4xl w-full font-bold">
              Join and streamline Workflows on <em>Talez</em>
            </p>
            <p className="text-md text-muted font-normal">
              Why worry when you can write <em>Talez</em>.
            </p>
          </div>
          <form autoComplete="false" onSubmit={handleSubmit}>
            <div className={styles.login_form_container}>
              <Label className="sr-only" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="new-password"
                autoCorrect="off"
                value={values?.email}
                onChange={handleChange}
              />
              {errors.email && touched.email ? (
                <div className={"error_control"}>
                  <p>{errors.email}</p>
                </div>
              ) : null}
              <Input
                id="password"
                placeholder="Enter Password"
                type="password"
                autoCorrect="off"
                autoComplete="new-password"
                value={values?.password}
                onChange={handleChange}
              />
              {errors.password && touched.password ? (
                <div className={"error_control"}>
                  <p>{errors.password}</p>
                </div>
              ) : null}
              <Button type="submit">Sign in with Email</Button>
            </div>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-muted" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2">Or continue with</span>
            </div>
          </div>
          <Button variant={"default"} onClick={handleGithubSignin}>
            <Github className="mr-2" size={16} />
            Sign In with Github
          </Button>
          <Link className={cn(buttonVariants({ variant: "outline" }))} to={"/"}>
            Missed something, want to go back?
          </Link>
          <Link
            to={"/signup"}
            className={cn(buttonVariants({ variant: "link" }))}
          >
            New to brainstorming products? Signup
          </Link>
        </div>
        <div className="maxLg:hidden">
          <Sitting height={500} width={500} />
        </div>
      </div>
    </>
  );
};

export default Login;
