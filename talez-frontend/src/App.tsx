import { Outlet, Route, Routes } from "react-router-dom";
import "./assets/css/global.css";
import Login from "./modules/auth/login/Login";
import Signup from "./modules/auth/signup/Signup";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import withAuthentication from "./shared/helpers/withAuthentication";
import Home from "./modules/home/Home";
import withoutAuthentication from "./shared/helpers/withoutAuthentication";

const App = () => {
  const queryClient = new QueryClient();

  const unAuthenticated = () => <Outlet />;

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route index path="/*" element={withAuthentication(Home)} />
          <Route path="/" element={withoutAuthentication(unAuthenticated)}>
            <Route index path="signin" element={<Login />} />
            <Route index path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </>
  );
};

export default App;
