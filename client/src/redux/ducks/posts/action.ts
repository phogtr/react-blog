import { PostData } from "./postsReducer";

export const GET_POST_REQUEST = "GET_POST_REQUEST";
export const GET_POST_SUCCESS = "SET_POST_SUCCESS";
export const DELETE_POST_REQUEST = "DELETE_POST_REQUEST";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const CREATE_POST_REQUEST = "CREATE_POST_REQUEST";
export const EDIT_POST_REQUEST = "EDIT_POST_REQUEST";

export const getPost = () => ({
  type: GET_POST_REQUEST,
});

export const getPostSuccess = (posts: PostData[]) => ({
  type: GET_POST_SUCCESS,
  posts,
});

export const createPostRequest = (newPost: PostData) => ({
  type: CREATE_POST_REQUEST,
  newPost,
});

export const deletePostRequest = (id: string) => ({
  type: DELETE_POST_REQUEST,
  id,
});

export const deletePostSuccess = (id: string) => ({
  type: DELETE_POST_SUCCESS,
  id,
});

export const editPostRequest = (id: string, editPost: PostData) => ({
  type: EDIT_POST_REQUEST,
  id,
  editPost,
});
