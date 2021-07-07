import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "src/redux/configureStore";
import { getPost } from "src/redux/ducks/posts/action";
import { PostData } from "src/redux/ducks/posts/postsReducer";
import { EachPost } from "..";

interface PostsProps {}

interface PostDataArray {
  posts: PostData[];
}

export const Posts: React.FC<PostsProps> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost());
  }, []);

  const posts: PostDataArray = useSelector((state: ReduxState) => state.posts);

  return (
    <>
      <h1>Posts</h1>
      {posts.posts.map((post: PostData) => (
        <EachPost key={post.postId} post={post} />
      ))}
    </>
  );
};
