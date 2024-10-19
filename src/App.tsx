import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import "./assets/css/global.css";
import Login from "./modules/auth/login";
import Signup from "./modules/auth/signup";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import withAuthentication from "./shared/helpers/withAuthentication";
import Home from "./modules/home/Home";
import withoutAuthentication from "./shared/helpers/withoutAuthentication";
import { useEffect } from "react";
import { isTokenExpired } from "./shared/helpers/helpers";
import AuthRedirect from "./shared/components/auth-redirect/AuthRedirect";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 1,
      },
    },
  });

  const unAuthenticated = () => <Outlet />;

  useEffect(() => {
    isTokenExpired();
  }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route index path="/*" element={withAuthentication(Home)} />

          <Route path="/*" element={withoutAuthentication(unAuthenticated)}>
            <Route path="signin" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="auth-redirect" element={<AuthRedirect />} />
            <Route path="*" element={<Navigate to="/signin" replace />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </>
  );
};

export default App;
