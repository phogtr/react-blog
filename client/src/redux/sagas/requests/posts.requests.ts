import axios from "src/config/axios";
import { url } from "src/config/url";

export function requestGetPosts() {
  return axios.request({
    method: "GET",
    url: url.url + "/api/getPosts",
  });
}

export function requestDeletePost(id: string) {
  return axios.request({
    method: "DELETE",
    url: url.url + `/api/post/${id}`,
  });
}

// export function requestCreatePost(newPost: PostData) {
//   return axios.request({
//     method: "POST",
//     url: "http://localhost:5000/api/createPost",
//     data: newPost,
//   });
// }

// export function requestEditPost(id: string, editPost: PostData) {
//   return axios.request({
//     method: "PUT",
//     url: `http://localhost:5000/api/post/${id}`,
//     data: editPost,
//   });
// }
