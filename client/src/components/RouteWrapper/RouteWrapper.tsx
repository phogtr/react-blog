import React from "react";
import { Route, Switch } from "react-router-dom";
import { Posts, Login, Register, CreatePost, SinglePost } from "../index";

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
      <Route path="/create-post">
        <CreatePost />
      </Route>
      <Route path="/post/:id">
        <SinglePost />
      </Route>
    </Switch>
  );
};
