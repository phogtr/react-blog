import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  Posts,
  Login,
  Register,
  CreatePost,
  SinglePost,
  EditPost,
  ProtectedRoute,
} from "../../index";

interface RouteWrapperProps {}

export const RouteWrapper: React.FC<RouteWrapperProps> = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Posts />
      </Route>
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
  );
};
