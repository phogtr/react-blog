import React from "react";
import { HeaderData } from "../NavBar";
import { DesktopScreen } from "../Screens/DesktopScreen";
import { MobileScreen } from "../Screens/MobileScreen";

interface UserNavProps {
  isMobile: Boolean;
  username: string;
}

export const UserNav: React.FC<UserNavProps> = ({ isMobile, username }) => {
  const userHeader: HeaderData[] = [
    {
      label: "Create Post",
      href: "/create-post",
    },
    {
      label: username,
      href: "/",
    },
  ];

  return (
    <>{isMobile ? <MobileScreen header={userHeader} /> : <DesktopScreen header={userHeader} />}</>
  );
};
