import { Button } from "@/shared/ui/ui/button";
import { Input } from "@/shared/ui/ui/input";
import styles from "@/assets/css/auth.module.css";
import { Label } from "@/shared/ui/ui/label";
import { useLoginForm } from "../hooks/useLoginForm";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/login";

interface loginFormProps {
  email: string;
  password: string;
}

const Login = () => {
  const { mutate: loginMutateFn } = useMutation({
    mutationFn: (values: loginFormProps) => login(values),
    onSuccess: (res) => console.log(res),
    onError: (err) => console.log(err),
  });

  const { values, handleChange, errors, touched } = useLoginForm();

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
          <form>
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
              <Button type="button" onClick={() => loginMutateFn(values)}>
                Sign in with Email
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
