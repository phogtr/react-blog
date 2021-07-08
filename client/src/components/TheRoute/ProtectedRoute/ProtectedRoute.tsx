import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "src/utils/UserContext";

interface ProtectedRouteProps {
  path: string;
  children: () => JSX.Element | null;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ path, children }) => {
  const { userData } = useContext(UserContext);
  return (
    <>{userData?.accessToken ? <Route path={path}>{children}</Route> : <Redirect to="/login" />}</>
  );
};
