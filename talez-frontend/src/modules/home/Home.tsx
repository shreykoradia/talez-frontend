import { Route, Routes } from "react-router";
import Workflows from "../workflows/Workflows";

const Home = () => {
  return (
    <>
      <Routes>
        <Route path="/workflows" index element={<Workflows />} />;
        {/* <Route path="/talez" element={<Workflows />} />;
      <Route path="/talez/:id" element={<Workflows />} />; */}
      </Routes>
    </>
  );
};

export default Home;
