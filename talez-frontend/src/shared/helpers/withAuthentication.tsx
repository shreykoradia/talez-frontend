import { Navigate } from "react-router-dom";
import { checkToken } from "./helpers";

const withAuthentication = (ComposedComponent: () => JSX.Element) => {
  const Component: React.FC = (props) => {
    if (checkToken()) {
      return <ComposedComponent {...props} />;
    }
    return <Navigate to="signin" />;
  };
  return <Component />;
};

export default withAuthentication;
