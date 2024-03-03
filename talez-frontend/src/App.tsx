import { Route, Routes } from "react-router-dom";
import "./assets/css/global.css";
import Login from "./modules/auth/login/Login";
import Signup from "./modules/auth/signup/Signup";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route index path="signin" element={<Login />} />
          <Route index path="signup" element={<Signup />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
};

export default App;
