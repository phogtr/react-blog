import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  Admin,
  ContainerWrapperRoute,
  CreatePost,
  EditPost,
  Login,
  Posts,
  ProtectedRoute,
  Register,
  SinglePost,
} from "../../index";
import { NotFoundRoute } from "../NotFoundRoute/NotFoundRoute";

interface RouteWrapperProps {}

export const RouteWrapper: React.FC<RouteWrapperProps> = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Posts />
        </Route>
        <ContainerWrapperRoute path="/register">{() => <Register />}</ContainerWrapperRoute>
        <ContainerWrapperRoute path="/login">{() => <Login />}</ContainerWrapperRoute>
        <ProtectedRoute path="/create-post">{() => <CreatePost />}</ProtectedRoute>
        <ContainerWrapperRoute path="/post/:id">{() => <SinglePost />}</ContainerWrapperRoute>
        <ContainerWrapperRoute path="/edit/:id">{() => <EditPost />}</ContainerWrapperRoute>
        <ContainerWrapperRoute path="/admin">{() => <Admin />}</ContainerWrapperRoute>
        <ContainerWrapperRoute>{() => <NotFoundRoute />}</ContainerWrapperRoute>
      </Switch>
    </>
  );
};
