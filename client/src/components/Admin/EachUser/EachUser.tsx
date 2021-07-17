import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { deleteUserRequest } from "src/api/user/userApi";
import { DialogConfirm } from "src/components";
import { admin } from "src/config/admin";
import { UserContext } from "src/utils/UserContext";
import { UserData } from "../Admin";

interface EachUserProps {
  user: UserData;
}

export const EachUser: React.FC<EachUserProps> = ({ user }) => {
  const [openDialog, setOpenDialog] = React.useState(false);
  const { userData } = useContext(UserContext);
  let history = useHistory();

  const handleDeleteCancel = () => {
    setOpenDialog(false);
  };

  const handleDeleteConfirm = async () => {
    await deleteUserRequest(user.userId);
    setOpenDialog(false);
    history.go(0);
  };

  return (
    <Grid item xs={12}>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h5" component="h2" noWrap>
            Username: {user.name}
          </Typography>
          {user.userId === admin.adminId ? (
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

        {user.userId === admin.adminId || userData.userId === user._id ? (
          <Box mb={2}></Box>
        ) : (
          <>
            <CardActions>
              <Box ml={1}>
                <Button variant="outlined" onClick={() => console.log("Delete")}>
                  Promote user
                </Button>
              </Box>
            </CardActions>
            <CardActions>
              <Box ml={1} mb={2}>
                <Button variant="contained" onClick={() => setOpenDialog(true)}>
                  Delete user
                </Button>
              </Box>
            </CardActions>
          </>
        )}
      </Card>
      <DialogConfirm
        openDialog={openDialog}
        prompt={"Do you want to delete this user?"}
        isDeleteBtn={true}
        handleCloseDialog={handleDeleteCancel}
        handleCloseDialogConfirm={handleDeleteConfirm}
      />
    </Grid>
  );
};
