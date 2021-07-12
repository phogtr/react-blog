import React from "react";
import { HeaderData } from "../NavBar";
import { DesktopScreen } from "../Screens/DesktopScreen";
import { MobileScreen } from "../Screens/MobileScreen";

const guessHeader: HeaderData[] = [
  {
    label: "Login",
    href: "/login",
  },
  {
    label: "Register",
    href: "/register",
  },
];

interface GuessNavProps {
  isMobile: Boolean;
  logoutBtn: () => void;
}

export const GuessNav: React.FC<GuessNavProps> = ({ isMobile, logoutBtn }) => {
  return (
    <>
      {isMobile ? (
        <MobileScreen header={guessHeader} isLogin={false} logoutBtn={logoutBtn} />
      ) : (
        <DesktopScreen header={guessHeader} isLogin={false} logoutBtn={logoutBtn} />
      )}
    </>
  );
};
