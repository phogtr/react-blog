import axios from "src/config/axios";

export function requestGetPosts() {
  return axios.request({
    method: "GET",
    url: "http://localhost:5000/api/getPosts",
  });
}

export function requestDeletePost(id: string) {
  return axios.request({
    method: "DELETE",
    url: `http://localhost:5000/api/post/${id}`,
  });
}
