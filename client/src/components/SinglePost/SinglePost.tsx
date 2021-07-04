import axios from "../../config/axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface SinglePostProps {}

interface RouteParams {
  id: string;
}

export const SinglePost: React.FC<SinglePostProps> = () => {
  const [post, setPost] = useState<any>([]); // todo: handle generics type => provide interface for whatever the api gives
  const params = useParams<RouteParams>();

  const getPost = async () => {
    const res = await axios.get(`http://localhost:5000/api/post/${params.id}`);
    setPost(res.data[0]);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      <h3>SinglePost</h3>
      <div>{post.content}</div>
    </div>
  );
};
