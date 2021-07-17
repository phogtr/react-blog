import { Box, CircularProgress, IconButton, Typography } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { getSinglePost } from "src/api/post/postApi";
import { DialogConfirm } from "src/components";
import { deletePostRequest } from "src/redux/ducks/posts/action";
import { PostData } from "src/redux/ducks/posts/postsReducer";
import { UserContext } from "src/utils/UserContext";

interface SinglePostProps {}

interface RouteParams {
  id: string;
}

export const SinglePost: React.FC<SinglePostProps> = () => {
  const [postLoaded, setPostLoaded] = useState(Boolean);
  const [singlePost, setSinglePost] = useState<PostData>({ title: "", content: "" });
  const [openDialog, setOpenDialog] = React.useState(false);
  const params = useParams<RouteParams>();
  const { userData } = useContext(UserContext);
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    getSinglePost(params.id).then((data) => {
      setSinglePost(data);
      setPostLoaded(true);
    });
  }, []);

  const handleDeleteCancel = () => {
    setOpenDialog(false);
  };

  const handleDeleteConfirm = () => {
    dispatch(deletePostRequest(singlePost.postId!));
    setOpenDialog(false);
    history.push("/");
  };

  if (!singlePost) {
    return (
      <>
        <Typography variant="h3" component="h1">
          Could not find this post
        </Typography>
      </>
    );
  }

  return (
    <>
      {!postLoaded ? (
        <div>
          <CircularProgress />
        </div>
      ) : (
        <>
          <Typography variant="h3">{singlePost.title}</Typography>
          <Box mb={3.5}>
            <Typography variant="h6">Posted by {singlePost.author}</Typography>
          </Box>
          <Typography variant="body1" component="p">
            {singlePost.content}
          </Typography>

          {userData.userId === singlePost.authorId || userData?.isAdmin === true ? (
            <>
              <Box mt={2}>
                <Box display="inline" mr={1}>
                  {userData?.userId === singlePost.authorId || userData?.isAdmin === false ? (
                    <>
                      <IconButton
                        aria-label="edit"
                        component={Link}
                        to={`/edit/${singlePost.postId}`}
                      >
                        <EditOutlinedIcon fontSize="large" />
                      </IconButton>
                    </>
                  ) : (
                    <></>
                  )}
                </Box>
                <Box display="inline" ml={1}>
                  <IconButton aria-label="delete" onClick={() => setOpenDialog(true)}>
                    <DeleteOutlineIcon fontSize="large" />
                  </IconButton>
                </Box>
              </Box>
              <DialogConfirm
                openDialog={openDialog}
                prompt={"Do you want to delete this post?"}
                isDeleteBtn={true}
                handleCloseDialog={handleDeleteCancel}
                handleCloseDialogConfirm={handleDeleteConfirm}
              />
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
};
