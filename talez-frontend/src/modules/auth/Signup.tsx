import { Button } from "@/shared/ui/ui/button";
import styles from "../../assets/css/auth.module.css";
import { Input } from "@/shared/ui/ui/input";
import { Label } from "@radix-ui/react-label";

const Signup = () => {
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
          <form>
            <div className={styles.signup_form_container}>
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
                disabled={false}
              />
              <Input
                id="password"
                placeholder="Enter Password"
                type="password"
                autoCorrect="off"
                disabled={false}
              />
              <Button disabled={false}>Sign up with Email</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
