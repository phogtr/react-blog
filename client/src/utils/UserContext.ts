import { createContext } from "react";
import { UserDataObj } from "./useSession";

export const UserContext = createContext({
  userData: {} as UserDataObj,
  setUser: (data: UserDataObj) => {},
});
