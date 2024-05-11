import { useQuery } from "@tanstack/react-query";
import React, { PropsWithChildren } from "react";
import { getUser } from "@/shared/api/getUser";
import { User } from "../types";

interface UserProviderProps {
  user: User;
  refetchUser: CallableFunction;
  isLoadingUser: boolean;
}

export const UserContext = React.createContext({} as UserProviderProps);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const {
    isLoading: isLoadingUser,
    data: response,
    refetch: refetchUser,
  } = useQuery({
    queryKey: ["get-user"],
    queryFn: () => getUser(),
  });
  if (!response?.data) {
    return null;
  }
  return (
    <UserContext.Provider
      value={{
        user: response?.data?.user,
        refetchUser: refetchUser,
        isLoadingUser: isLoadingUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => {
  return React.useContext(UserContext);
};
