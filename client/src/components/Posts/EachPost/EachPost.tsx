import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deletePostRequest } from "src/redux/ducks/posts/action";
import { PostData } from "src/redux/ducks/posts/postsReducer";
import { UserContext } from "src/utils/UserContext";

interface EachPostProps {
  post: PostData;
}

export const EachPost: React.FC<EachPostProps> = ({ post }) => {
  const { userData } = useContext(UserContext);
  const dispatch = useDispatch();

  return (
    <div>
      <Link to={`/post/${post.postId}`}>title: {post.title}</Link>
      <div>content: {post.content}</div>
      <div>by: {post.author}</div>
      {userData?.userName === post.author ? (
        <>
          <button onClick={() => dispatch(deletePostRequest(post.postId!))}>Delete</button>
          <Link to={`/edit/${post.postId}`}>
            <button>Edit</button>
          </Link>
        </>
      ) : (
        <></>
      )}
      <br />
      <br />
    </div>
  );
};
