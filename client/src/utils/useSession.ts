import { useState } from "react";

export interface UserDataObj {
  accessToken?: string;
  refreshToken?: string;
  userName?: string;
}

export const useSession = () => {
  // initially get data from sessionStorage
  const getUser = () => {
    // console.log("getUser");
    const userString = sessionStorage.getItem("user");
    const userData: UserDataObj = JSON.parse(userString || "{}");
    return userData;
  };

  const [userData, setUser] = useState(getUser());

  const saveUser = (userData: UserDataObj) => {
    // console.log("saveUser");
    sessionStorage.setItem("user", JSON.stringify(userData));
    setUser(userData); // trigger re-render => go to getUser() again
  };

  return {
    setUser: saveUser,
    userData,
  };
};