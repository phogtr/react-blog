import {
  CREATE_POST_REQUEST,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  EDIT_POST_REQUEST,
  GET_POST_SUCCESS,
} from "./action";

export interface PostData {
  title?: string;
  content?: string;
  authorId?: string;
  author?: string;
  postId?: string;
}

export interface PostsResponse {
  data: PostData;
}

export interface PostsArrayResponse {
  data: PostData[];
}

export interface PostDataState {
  posts: PostData[];
}

export type Actions =
  | { type: typeof GET_POST_SUCCESS; posts: PostData[] }
  | { type: typeof CREATE_POST_REQUEST; newPost: PostData }
  | { type: typeof DELETE_POST_REQUEST; id: string }
  | { type: typeof DELETE_POST_SUCCESS; id: string }
  | { type: typeof EDIT_POST_REQUEST; id: string; editPost: PostData };

const initialState: PostDataState = { posts: [] };

export const PostsReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case GET_POST_SUCCESS:
      const { posts } = action;
      return {
        ...state,
        posts: posts,
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
