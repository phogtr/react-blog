import { Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { UserContext } from "src/utils/UserContext";

interface AdminProps {}

export const Admin: React.FC<AdminProps> = () => {
  const { userData } = useContext(UserContext);

  if (userData?.isAdmin !== true) {
    return (
      <>
        <Typography variant="h3" component="h1">
          Not Authorized
        </Typography>
      </>
    );
  }

  return (
    <>
      <h1>This is admin page</h1>
    </>
  );
};
