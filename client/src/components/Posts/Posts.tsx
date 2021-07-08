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
  console.log(postsData);

  useEffect(() => {
    dispatch(getPost());
  }, []);

  return (
    <>
      <h1>Posts</h1>
      {postsData.posts.map((post: PostData) => (
        <EachPost key={post.postId} post={post} />
      ))}
    </>
  );
};
