import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "src/config/axios";
import { ReduxState } from "src/redux/configureStore";
import { getPost, PostData } from "src/redux/ducks/posts";
import { EachPost } from "..";

interface PostsProps {}

interface PostDataArray {
  posts: PostData[];
}

export const Posts: React.FC<PostsProps> = () => {
  // const [arr, setArr] = useState<PostData[]>([]);

  const dispatch = useDispatch();

  // const getData = async () => {
  //   const url = "http://localhost:5000/api/getPosts";
  //   const res = await axios.get(url);
  //   setArr(res.data);
  // };

  useEffect(() => {
    // getData();
    dispatch(getPost());
  }, []);

  const posts: PostDataArray = useSelector((state: ReduxState) => state.posts);

  const deletePost = async (id: string) => {
    axios.delete(`http://localhost:5000/api/post/${id}`);
    // setArr(arr.filter((p: PostData) => p.postId !== id));
  };

  return (
    <>
      <h1>Posts</h1>
      {posts.posts.map((post: PostData) => (
        <EachPost key={post.postId} post={post} deletePost={deletePost} />
      ))}
    </>
  );
};
