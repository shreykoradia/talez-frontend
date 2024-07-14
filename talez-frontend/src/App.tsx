import { Outlet, Route, Routes } from "react-router-dom";
import "./assets/css/global.css";
import Login from "./modules/auth/login";
import Signup from "./modules/auth/signup";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import withAuthentication from "./shared/helpers/withAuthentication";
import Home from "./modules/home/Home";
import withoutAuthentication from "./shared/helpers/withoutAuthentication";
import { useEffect } from "react";
import { isTokenExpired } from "./shared/helpers/helpers";
import LandingPage from "./modules/landing";
import ProductInformation from "./modules/landing/components/ProductInformation";
import AuthRedirect from "./shared/components/auth-redirect/AuthRedirect";
import HelmetLoader from "./shared/components/loader/Loader";

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
            <Route index path="/*" element={<LandingPage />} />
            <Route path="product" element={<ProductInformation />} />
            <Route path="signin" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="auth-redirect" element={<AuthRedirect />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </>
  );
};

export default App;
