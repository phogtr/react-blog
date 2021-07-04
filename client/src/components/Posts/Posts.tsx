import axios from "../../config/axios";
import React, { useEffect, useState } from "react";
import { EachPost } from "../index";

interface PostsProps {}

export const Posts: React.FC<PostsProps> = () => {
  const [arr, setArr] = useState<any>([]); // todo: handle generics type => provide interface for whatever the api gives

  const getData = async () => {
    const url = "http://localhost:5000/api/getPosts";
    const res = await axios.get(url);
    setArr(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const deletePost = async (id: string) => {
    axios.delete(`http://localhost:5000/api/post/${id}`);
    setArr(arr.filter((p: any) => p.postId !== id));
  };

  // todo: handle post (any) types
  return (
    <>
      <h1>Posts</h1>
      {arr.map((post: any) => (
        <EachPost key={post.postId} post={post} deletePost={deletePost} />
      ))}
    </>
  );
};
