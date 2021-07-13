import { Box, Container } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  CreatePost,
  EditPost,
  Login,
  Posts,
  ProtectedRoute,
  Register,
  SinglePost,
} from "../../index";

interface RouteWrapperProps {}

export const RouteWrapper: React.FC<RouteWrapperProps> = () => {
  return (
    <>
      <Route exact path="/">
        <Posts />
      </Route>
      <Box pt={4}>
        <Container maxWidth="md">
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <ProtectedRoute path="/create-post">{() => <CreatePost />}</ProtectedRoute>
            <Route path="/post/:id">
              <SinglePost />
            </Route>
            <Route path="/edit/:id">
              <EditPost />
            </Route>
          </Switch>
        </Container>
      </Box>
    </>
  );
};
