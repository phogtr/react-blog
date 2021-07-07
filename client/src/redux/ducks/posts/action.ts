import { PostData } from "./postsReducer";

export const GET_POST = "GET_POST";
export const SET_POST = "SET_POST";
export const DELETE_POST = "DELETE_POST";
export const CREATE_POST_REQUEST = "CREATE_POST_REQUEST";
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";

export const getPost = () => ({
  type: GET_POST,
});

export const setPost = (posts: PostData) => ({
  type: SET_POST,
  posts,
});

export const createPostRequest = (newPost: PostData) => ({
  type: CREATE_POST_REQUEST,
  newPost,
});

export const createPostSuccess = (successPost: PostData) => ({
  type: CREATE_POST_SUCCESS,
  successPost,
});

export const deletePost = (id: string) => ({
  type: DELETE_POST,
  id,
});
