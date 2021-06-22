import React, { useEffect, useState } from "react";

interface PostsProps {}

export const Posts: React.FC<PostsProps> = () => {
  const [arr, setArr] = useState<any>([]); // todo: handle generics type => provide interface for whatever the api gives

  const getData = async () => {
    const url = "http://localhost:5000/api/getPosts";
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setArr(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Posts</h1>
      {arr.map(
        (
          post: any, // todo: handle types
          idx: any // todo: handle types
        ) => (
          <div key={idx}>
            <div>{post.title}</div>
          </div>
        )
      )}
    </>
  );
};
