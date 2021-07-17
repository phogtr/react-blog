import { Grid, Typography } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { getAllUsersRequest } from "src/api/user/userApi";
import { UserContext } from "src/utils/UserContext";
import { EachUser } from "./EachUser/EachUser";

interface AdminProps {}

export interface UserData {
  isAdmin: boolean;
  name: string;
  email: string;
  userId: string;
  _id: string;
}

export const Admin: React.FC<AdminProps> = () => {
  const [userArr, setUserArr] = useState<UserData[]>([]);
  const { userData } = useContext(UserContext);

  useEffect(() => {
    getAllUsersRequest().then((data: UserData[]) => {
      setUserArr(data);
    });
  }, []);

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
      <Grid container spacing={5}>
        {userArr.map((user: UserData) => (
          <EachUser key={user.userId} user={user} />
        ))}
      </Grid>
    </>
  );
};
