import { Typography } from "@material-ui/core";
import React from "react";

interface NotFoundRouteProps {}

export const NotFoundRoute: React.FC<NotFoundRouteProps> = () => {
  return (
    <>
      <Typography variant="h3" component="h1">
        Could not find this route
      </Typography>
    </>
  );
};
