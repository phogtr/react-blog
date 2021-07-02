import React from "react";
import { Route, Switch } from "react-router-dom";
import { Posts, Login, Register, CreatePost } from "../index";

interface RouteWrapperProps {
  setUser: (_: any) => void;
}

export const RouteWrapper: React.FC<RouteWrapperProps> = ({ setUser }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Posts />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login setUser={setUser} />
      </Route>
      <Route path="/create-post">
        <CreatePost />
      </Route>
    </Switch>
  );
};
