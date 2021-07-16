import { Box, Container } from "@material-ui/core";
import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "src/utils/UserContext";

interface ProtectedRouteProps {
  path: string;
  children: () => JSX.Element;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ path, children }) => {
  const { userData } = useContext(UserContext);
  return (
    <>
      {userData?.accessToken ? (
        <Box pt={4}>
          <Container maxWidth="md">
            <Route path={path}>{children}</Route>
          </Container>
        </Box>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};
