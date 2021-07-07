import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost, PostData } from "src/redux/ducks/posts";

interface EachPostProps {
  post: PostData;
}

export const EachPost: React.FC<EachPostProps> = ({ post }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Link to={`/post/${post.postId}`}>title: {post.title}</Link>
      <div>content: {post.content}</div>
      <div>by: {post.author}</div>
      <button onClick={() => dispatch(deletePost(post.postId!))}>Delete</button>
      <Link to={`/edit/${post.postId}`}>
        <button>Edit</button>
      </Link>
      <br />
      <br />
    </div>
  );
};
