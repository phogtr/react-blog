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
}

export const GuessNav: React.FC<GuessNavProps> = ({ isMobile }) => {
  return (
    <>{isMobile ? <MobileScreen header={guessHeader} /> : <DesktopScreen header={guessHeader} />}</>
  );
};
