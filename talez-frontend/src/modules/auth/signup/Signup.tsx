import { Button } from "@/shared/ui/ui/button";
import { Input } from "@/shared/ui/ui/input";
import styles from "@/assets/css/auth.module.css";
import { Label } from "@/shared/ui/ui/label";
import { useSignupForm } from "../hooks/useSignupForm";
import { useMutation } from "@tanstack/react-query";
import { signup } from "../api/signup";
import { useNavigate } from "react-router-dom";
import { toast } from "@/shared/ui/ui/use-toast";

interface signupFormProps {
  email: string;
  password: string;
}

const Signup = () => {
  const navigate = useNavigate();
  const { mutate: singUpMutateFn } = useMutation({
    mutationFn: (values: signupFormProps) => signup(values),
    onSuccess: () => {
      navigate("/signin");
    },
    onError: () => {
      toast({ title: "Something Went Wrong!" });
    },
  });
  const { values, handleChange, handleSubmit, errors, touched } =
    useSignupForm(singUpMutateFn);
  return (
    <>
      <div className={styles.signup_parent_container}>
        <div className="grid w-[500px] gap-4">
          <div className={styles.signup_title_container}>
            <p className="text-2xl font-semibold">
              Create an account on <em>Talez</em> for awesomeness.
            </p>
            <p className="text-[1rem] font-light">
              Streamline Workflows, Unleash Creativity
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.signup_form_container}>
              <Label className="sr-only" htmlFor="username">
                username
              </Label>
              <Input
                id="username"
                placeholder="username"
                type="username"
                autoCapitalize="none"
                autoComplete="username"
                autoCorrect="off"
                value={values?.username}
                onChange={handleChange}
                disabled={false}
              />
              {errors.username && touched.username ? (
                <div className={"error_control"}>
                  <p>{errors.username}</p>
                </div>
              ) : null}
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
                disabled={false}
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
                disabled={false}
              />
              {errors.password && touched.password ? (
                <div className={"error_control"}>
                  <p>{errors.password}</p>
                </div>
              ) : null}
              <Button type="submit" disabled={false}>
                Sign up with Email
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
