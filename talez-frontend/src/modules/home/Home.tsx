import { Route, Routes } from "react-router";

import { useUser } from "@/shared/context/UserProvider";
import VerifyModal from "@/shared/components/verify-modal/VerifyModal";
import Dashboard from "../dashboard";
import HeaderV2 from "@/shared/components/header/HeaderV2";
import TalezV2 from "../talez/TalezV2";
import TalezMobileView from "../talez/TalezMobileView";

const Home = () => {
  const { user } = useUser();

  if (!user?.isVerified) {
    return <VerifyModal />;
  }

  return (
    <>
      <div className="talez_application_container">
        <HeaderV2 />
        <Routes>
          <Route index path="/dashboard" element={<Dashboard />} />
          <Route path="/:workflowId/talez" index element={<TalezV2 />} />
          <Route path="/:taleId/tale" element={<TalezMobileView />} />
        </Routes>
      </div>
    </>
  );
};

export default Home;
