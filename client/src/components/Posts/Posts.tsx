import React, { useEffect, useState } from "react";
import axios from "../../config/axios";
import { EachPost } from "../index";

interface PostsProps {}

export interface PostData {
  title?: string;
  content?: string;
  author?: string;
  postId?: string;
}

export const Posts: React.FC<PostsProps> = () => {
  const [arr, setArr] = useState<PostData[]>([]);

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
    setArr(arr.filter((p: PostData) => p.postId !== id));
  };

  return (
    <>
      <h1>Posts</h1>
      {arr.map((post: PostData) => (
        <EachPost key={post.postId} post={post} deletePost={deletePost} />
      ))}
    </>
  );
};
