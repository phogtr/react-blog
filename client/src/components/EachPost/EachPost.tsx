import React from "react";
import { Link } from "react-router-dom";

interface EachPostProps {
  post: any; // todo: handle (any) type
  deletePost: (id: string) => void;
}

export const EachPost: React.FC<EachPostProps> = ({ post, deletePost }) => {
  return (
    <div>
      <Link to={`/post/${post.postId}`}>title: {post.title}</Link>
      <div>content: {post.content}</div>
      <div>by: {post.author}</div>
      <button onClick={() => deletePost(post.postId)}>Delete</button>
      <br />
      <br />
    </div>
  );
};
