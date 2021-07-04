import React from "react";
import { Link } from "react-router-dom";

interface EachPostProps {
  id: string;
  title: string;
  content: string;
  author: string;
}

export const EachPost: React.FC<EachPostProps> = ({ id, title, content, author }) => {
  return (
    <div>
      <Link to={`/post/${id}`}>title: {title}</Link>
      <div>content: {content}</div>
      <div>by: {author}</div>
      <br />
    </div>
  );
};
