import {
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  GET_POST,
  SET_POST,
} from "./action";

export interface PostData {
  title?: string;
  content?: string;
  author?: string;
  postId?: string;
}

export interface PostsResponse {
  data: PostData;
}

interface PostDataState {
  posts: PostData[];
}

export type Actions =
  | { type: typeof GET_POST }
  | { type: typeof SET_POST; posts: PostData }
  | { type: typeof CREATE_POST_REQUEST; newPost: PostData }
  | { type: typeof CREATE_POST_SUCCESS; successPost: PostData }
  | { type: typeof DELETE_POST_REQUEST; id: string }
  | { type: typeof DELETE_POST_SUCCESS; id: string };

const initialState: PostDataState = { posts: [] };

export const PostsReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case SET_POST:
      const { posts } = action;
      return { ...state, posts };
    case CREATE_POST_SUCCESS:
      const { successPost } = action;
      return {
        ...state,
        ...successPost,
      };
    case DELETE_POST_SUCCESS:
      const { id } = action;
      return {
        ...state,
        posts: state.posts.filter((p) => p.postId !== id),
      };
    default:
      return state;
  }
};
