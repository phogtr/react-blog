import { Box, Container } from "@material-ui/core";
import React from "react";
import { Route } from "react-router-dom";

interface ContainerWrapperRouteProps {
  path?: string;
  children: () => JSX.Element;
}

export const ContainerWrapperRoute: React.FC<ContainerWrapperRouteProps> = ({ path, children }) => {
  return (
    <Box pt={4}>
      <Container maxWidth="md">
        {path ? <Route path={path}>{children}</Route> : <Route>{children}</Route>}
      </Container>
    </Box>
  );
};
