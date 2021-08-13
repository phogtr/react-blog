import { Box, CircularProgress, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReduxReducer } from "src/redux/configureStore";
import { getPost } from "src/redux/ducks/posts/action";
import { PostData, PostDataState } from "src/redux/ducks/posts/postsReducer";
import { EachPost } from "..";

interface PostsProps {}

export const Posts: React.FC<PostsProps> = () => {
  const dispatch = useDispatch();
  const postsData: PostDataState = useSelector((state: ReduxReducer) => state.posts);
  // console.log(postsData);

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  return (
    <Box pt={4}>
      {postsData.isLoading === true ? (
        <Box display="flex" alignItems="center" justifyContent="center">
          <CircularProgress />
        </Box>
      ) : (
        <Grid component="section" container spacing={5}>
          {postsData.posts.map((post: PostData) => (
            <EachPost key={post.postId} post={post} />
          ))}
        </Grid>
      )}
    </Box>
  );
};
