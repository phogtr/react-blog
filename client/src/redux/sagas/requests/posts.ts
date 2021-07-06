import axios from "src/config/axios";

export function requestGetPosts() {
  return axios.request({
    method: "GET",
    url: "http://localhost:5000/api/getPosts",
  });
}
