import { useState } from "react";

export interface UserDataObj {
  accessToken?: string;
  userId?: string;
  userName?: string;
}

export const useSession = () => {
  // initially get data from localStorage
  const getUser = () => {
    // console.log("getUser");
    const userString = localStorage.getItem("user");
    const userData: UserDataObj = JSON.parse(userString || "{}");
    return userData;
  };

  const [userData, setUser] = useState(getUser());

  const saveUser = (userData: UserDataObj) => {
    // console.log("saveUser");
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData); // trigger re-render => go to getUser() again
  };

  return {
    setUser: saveUser,
    userData,
  };
};
