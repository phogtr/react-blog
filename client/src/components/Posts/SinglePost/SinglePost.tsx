import { Box, IconButton, Typography } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getSinglePost } from "src/api/post/postApi";
import { deletePostRequest } from "src/redux/ducks/posts/action";
import { PostData } from "src/redux/ducks/posts/postsReducer";
import { UserContext } from "src/utils/UserContext";

interface SinglePostProps {}

interface RouteParams {
  id: string;
}

export const SinglePost: React.FC<SinglePostProps> = () => {
  const [singlePost, setSinglePost] = useState<PostData>({ title: "", content: "" });
  const params = useParams<RouteParams>();
  const { userData } = useContext(UserContext);
  const dispatch = useDispatch();

  useEffect(() => {
    getSinglePost(params.id).then((data) => {
      setSinglePost(data);
    });
  }, []);

  if (!singlePost) {
    return (
      <div>
        <h1>Could not find this post</h1>
      </div>
    );
  }

  return (
    <>
      <Typography variant="h3">{singlePost.title}</Typography>
      <Box mb={3.5}>
        <Typography variant="h6">Posted by {singlePost.author}</Typography>
      </Box>
      <Typography variant="body1" component="p">
        {singlePost.content}
      </Typography>
      {userData?.userName === singlePost.author ? (
        <Box mt={2}>
          <IconButton aria-label="edit" component={Link} to={`/edit/${singlePost.postId}`}>
            <EditOutlinedIcon fontSize="large" />
          </IconButton>

          <IconButton
            aria-label="delete"
            onClick={() => dispatch(deletePostRequest(singlePost.postId!))}
          >
            <DeleteOutlineIcon fontSize="large" />
          </IconButton>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};
