import { Outlet, Route, Routes } from "react-router-dom";
import "./assets/css/global.css";
import Login from "./modules/auth/login";
import Signup from "./modules/auth/signup";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import withAuthentication from "./shared/helpers/withAuthentication";
import Home from "./modules/home/Home";
import withoutAuthentication from "./shared/helpers/withoutAuthentication";
import LandingPage from "./modules/landing";
import { useEffect } from "react";
import { isTokenExpired } from "./shared/helpers/helpers";

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
    console.log(isTokenExpired());
  }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route index path="/*" element={withAuthentication(Home)} />
          <Route path="/" element={withoutAuthentication(unAuthenticated)}>
            <Route index element={<LandingPage />} />
            <Route index path="signin" element={<Login />} />
            <Route index path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </>
  );
};

export default App;
