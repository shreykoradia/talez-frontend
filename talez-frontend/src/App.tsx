import { Route, Routes } from "react-router-dom";
import "./assets/css/global.css";
import Login from "./modules/auth/Login";
import Signup from "./modules/auth/Signup";

const App = () => {
  return (
    <>
      <Routes>
        <Route index path="signin" element={<Login />} />
        <Route index path="signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
