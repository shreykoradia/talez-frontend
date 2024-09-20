import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { setCookie } from "typescript-cookie";

const AuthRedirect: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      setCookie("accessToken", token);
      navigate("/dashboard");
    } else {
      navigate("/signin");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Loading...</div>;
};

export default AuthRedirect;
