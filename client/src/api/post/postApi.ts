import axios from "src/config/axios";
import { PostData } from "src/redux/ducks/posts/postsReducer";

export const getSinglePost = async (id: string) => {
  const res = await axios.get(`http://localhost:5000/api/post/${id}`);
  return await res.data[0];
};

export const createPostHandler = async (data: PostData) => {
  return await axios.post("http://localhost:5000/api/createPost", data);
};

export const editPostHandler = async (id: string, data: PostData) => {
  return await axios.put(`http://localhost:5000/api/post/${id}`, data);
};
