import axios from "src/config/axios";
import { url } from "src/config/url";
import { PostData } from "src/redux/ducks/posts/postsReducer";

export const getSinglePost = async (id: string) => {
  const res = await axios.get(url.url + `/api/post/${id}`);
  return await res.data[0];
};

export const createPostHandler = async (data: PostData) => {
  return await axios.post(url.url + "/api/createPost", data);
};

export const editPostHandler = async (id: string, data: PostData) => {
  return await axios.put(url.url + `/api/post/${id}`, data);
};
