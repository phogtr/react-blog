import { PostData } from "./postsReducer";

export const GET_POST = "GET_POST";
export const SET_POST = "SET_POST";
export const DELETE_POST_REQUEST = "DELETE_POST_REQUEST";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const CREATE_POST_REQUEST = "CREATE_POST_REQUEST";
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
export const GET_SINGLE_POST_REQUEST = "GET_SINGLE_POST_REQUEST";
export const GET_SINGLE_POST_SUCCESS = "GET_SINGLE_POST_SUCCESS";

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

export const deletePostRequest = (id: string) => ({
  type: DELETE_POST_REQUEST,
  id,
});

export const deletePostSuccess = (id: string) => ({
  type: DELETE_POST_SUCCESS,
  id,
});

export const getSinglePostRequest = (id: string) => ({
  type: GET_SINGLE_POST_REQUEST,
  id,
});

export const getSinglePostSuccess = (singlePostId: string) => ({
  type: GET_SINGLE_POST_SUCCESS,
  singlePostId,
});
