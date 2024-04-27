import { Button } from "@/shared/ui/ui/button";
import { Input } from "@/shared/ui/ui/input";
import styles from "@/assets/css/auth.module.css";
import { Label } from "@/shared/ui/ui/label";
import { useLoginForm } from "../hooks/useLoginForm";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/login";
import { toast } from "@/shared/ui/ui/use-toast";
import { setCookie } from "typescript-cookie";
import { useNavigate } from "react-router";

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
        <div className="grid w-[500px] gap-4">
          <div className={styles.login_title_container}>
            <p className="text-2xl font-semibold">
              Join and streamline Workflows on <em>Talez</em>
            </p>
            <p className="text-[1rem] font-light">
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
        </div>
      </div>
    </>
  );
};

export default Login;
