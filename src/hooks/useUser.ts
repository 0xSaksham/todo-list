import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

/**
 * Custom hook to access and update user name
 * @returns Object with userName and updateUserName function
 */
export const useUser = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useUser must be used within an AppProvider");
  }

  const updateUserName = (name: string) => {
    context.setUserName(name);
  };

  return {
    userName: context.userName,
    updateUserName,
  };
};
