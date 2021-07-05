import React from "react";
import { Link } from "react-router-dom";
import { PostData } from "../Posts";

interface EachPostProps {
  post: PostData;
  deletePost: (id: string) => void;
}

export const EachPost: React.FC<EachPostProps> = ({ post, deletePost }) => {
  return (
    <div>
      <Link to={`/post/${post.postId}`}>title: {post.title}</Link>
      <div>content: {post.content}</div>
      <div>by: {post.author}</div>
      <button onClick={() => deletePost(post.postId!)}>Delete</button>
      <Link to={`/edit/${post.postId}`}>
        <button>Edit</button>
      </Link>
      <br />
      <br />
    </div>
  );
};
