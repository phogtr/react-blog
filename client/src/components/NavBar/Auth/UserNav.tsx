import React from "react";
import { HeaderData } from "../NavBar";
import { DesktopScreen } from "../Screens/DesktopScreen";
import { MobileScreen } from "../Screens/MobileScreen";

interface UserNavProps {
  isMobile: Boolean;
  username: string;
  isAdmin: Boolean | undefined;
  logoutBtn: () => void;
}

export const UserNav: React.FC<UserNavProps> = ({ isMobile, username, isAdmin, logoutBtn }) => {
  const userHeader: HeaderData[] = [
    {
      label: "Create Post",
      href: "/create-post",
    },
    {
      label: username,
      href: "",
    },
  ];

  return (
    <>
      {isMobile ? (
        <MobileScreen header={userHeader} isLogin={true} isAdmin={isAdmin} logoutBtn={logoutBtn} />
      ) : (
        <DesktopScreen header={userHeader} isLogin={true} isAdmin={isAdmin} logoutBtn={logoutBtn} />
      )}
    </>
  );
};
