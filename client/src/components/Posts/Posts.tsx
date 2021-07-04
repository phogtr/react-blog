import axios from "../../config/axios";
import React, { useEffect, useState } from "react";
import { EachPost } from "../index";

interface PostsProps {}

export const Posts: React.FC<PostsProps> = () => {
  const [arr, setArr] = useState<any>([]); // todo: handle generics type => provide interface for whatever the api gives

  const getData = async () => {
    const url = "http://localhost:5000/api/getPosts";
    const res = await axios.get(url);
    // console.log(data);
    setArr(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  // todo: handle post (any) types
  return (
    <>
      <h1>Posts</h1>
      {arr.map((post: any) => (
        <EachPost
          key={post.postId}
          id={post.postId}
          title={post.title}
          content={post.content}
          author={post.author}
        />
      ))}
    </>
  );
};
