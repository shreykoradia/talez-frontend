import { Navigate } from "react-router-dom";
import { checkToken } from "./helpers";

const withoutAuthentication = (ComposedComponent: () => JSX.Element) => {
  const Component: React.FC = (props) => {
    if (checkToken()) {
      return <Navigate to="/workflows" />;
    }
    return <ComposedComponent {...props} />;
  };
  return <Component />;
};

export default withoutAuthentication;
