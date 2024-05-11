import { Navigate } from "react-router-dom";
import { checkToken } from "./helpers";
import { UserProvider } from "../context/UserProvider";

const withAuthentication = (ComposedComponent: () => JSX.Element) => {
  const Component: React.FC = (props) => {
    if (checkToken()) {
      return (
        <>
          <UserProvider>
            <ComposedComponent {...props} />
          </UserProvider>
        </>
      );
    }
    return <Navigate to="signin" />;
  };
  return <Component />;
};

export default withAuthentication;
