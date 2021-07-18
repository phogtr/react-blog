import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { deleteUserRequest, updateUserRequest } from "src/api/user/userApi";
import { DialogConfirm } from "src/components";
import { UserContext } from "src/utils/UserContext";
import { UserData } from "../Admin";

interface EachUserProps {
  user: UserData;
}

export const EachUser: React.FC<EachUserProps> = ({ user }) => {
  const [openDialogDelete, setOpenDialogDelete] = React.useState(false);
  const [openDialogUpdate, setOpenDialogUpdate] = React.useState(false);
  const { userData } = useContext(UserContext);
  let history = useHistory();

  // const handleDeleteDialogCancel = () => {
  //   setOpenDialogDelete(false);
  // };

  // const handleUpdateDialogCancel = () => {
  //   setOpenDialogDelete(false);
  // };

  const handleDeleteConfirm = async () => {
    await deleteUserRequest(user.userId);
    setOpenDialogDelete(false);
    history.push("/");
    history.push("/admin");
  };

  const handleUpdateConfirm = async () => {
    await updateUserRequest(user.userId);
    setOpenDialogUpdate(false);
    history.push("/");
    history.push("/admin");
  };

  return (
    <Grid item xs={12}>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h5" component="h2" noWrap>
            Username: {user.name}
          </Typography>
          {user.userId === process.env.ADMIN_ID ? (
            <></>
          ) : (
            <Typography variant="h6" component="h3" noWrap>
              UserId: {user.userId}
            </Typography>
          )}
          <Typography variant="h6" component="h4" noWrap>
            Role: {user.isAdmin ? "Admin" : "User"}
          </Typography>
        </CardContent>

        {user.userId === process.env.ADMIN_ID || userData.userId === user._id ? (
          <Box mb={2}></Box>
        ) : (
          <>
            <CardActions>
              <Box ml={1}>
                <Button variant="outlined" onClick={() => setOpenDialogUpdate(true)}>
                  {user.isAdmin ? "Demote User" : "Promote User"}
                </Button>
              </Box>
            </CardActions>
            <CardActions>
              <Box ml={1} mb={2}>
                <Button variant="contained" onClick={() => setOpenDialogDelete(true)}>
                  Delete user
                </Button>
              </Box>
            </CardActions>
          </>
        )}
      </Card>
      <DialogConfirm
        openDialog={openDialogDelete}
        prompt={"Do you want to delete this user?"}
        isDeleteBtn={true}
        handleCloseDialog={() => setOpenDialogDelete(false)}
        handleCloseDialogConfirm={handleDeleteConfirm}
      />
      <DialogConfirm
        openDialog={openDialogUpdate}
        prompt={"Do you want to change the role of this user?"}
        isDeleteBtn={true}
        handleCloseDialog={() => setOpenDialogUpdate(false)}
        handleCloseDialogConfirm={handleUpdateConfirm}
      />
    </Grid>
  );
};
