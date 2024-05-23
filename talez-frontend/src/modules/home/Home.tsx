import { Route, Routes } from "react-router";

import { useUser } from "@/shared/context/UserProvider";
import VerifyModal from "@/shared/components/verify-modal/VerifyModal";
import Dashboard from "../dashboard";
import HeaderV2 from "@/shared/components/header/HeaderV2";

const Home = () => {
  const { user } = useUser();

  if (!user?.isVerified) {
    return <VerifyModal />;
  }

  return (
    <>
      {/* <Routes>
            <Route path="/workflows" index element={<Workflows />} />;
            <Route path="/:workflowId/tale" index element={<Talez />} />
            <Route path="/tale/:taleId" element={<TalezView />} />
            <Route path="/settings/*" element={<Settings />} />
          </Routes> */}
      <HeaderV2 />
      <Routes>
        <Route index path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default Home;
