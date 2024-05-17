import { setCookie } from "typescript-cookie";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import { Button, buttonVariants } from "@/shared/ui/ui/button";
import { Input } from "@/shared/ui/ui/input";
import { toast } from "@/shared/ui/ui/use-toast";
import { Label } from "@/shared/ui/ui/label";
import styles from "@/assets/css/auth.module.css";
import Messy from "@/assets/icons/messy.svg?react";

import { useLoginForm } from "../hooks/useLoginForm";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/login";
import { cn } from "@/shared/lib/utils";

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
      navigate("/workflows");
    },
    onError: (err) => {
      toast({
        title: "Invalid Credentials",
        description:
          "Oops! The email or password provided does not match our records. Please check your credentials and try again.",
      });
      return err;
    },
  });

  const { values, handleChange, handleSubmit, errors, touched, resetForm } =
    useLoginForm((values: loginFormProps) => loginMutateFn(values));

  return (
    <>
      <div className={styles.login_parent_container}>
        <div className="grid w-[500px] gap-4 maxLg:w-full maxLg:px-8">
          <div className={styles.login_title_container}>
            <p className="text-4xl w-full font-bold text-primary">
              Join and streamline Workflows on <em>Talez</em>
            </p>
            <p className="text-md text-muted-foreground font-normal hover:text-black">
              Why worry when you can write <em>Talez</em>?.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.login_form_container}>
              <Label className="sr-only" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
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
          <Messy height={500} width={500} />
        </div>
      </div>
    </>
  );
};

export default Login;
