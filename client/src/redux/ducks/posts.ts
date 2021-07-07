export const GET_POST = "GET_POST";
export const DELETE_POST = "DELETE_POST";
const SET_POST = "SET_POST";

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
  | { type: typeof DELETE_POST; id: string };

export const getPost = () => ({
  type: GET_POST,
});

export const setPost = (posts: PostData) => ({
  type: SET_POST,
  posts,
});

export const deletePost = (id: string) => ({
  type: DELETE_POST,
  id,
});

const initialState: PostDataState = { posts: [] };

export const PostsReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case SET_POST:
      const { posts } = action;
      return { ...state, posts };
    case DELETE_POST:
      const { id } = action;
      return {
        ...state,
        posts: state.posts.filter((p) => p.postId !== id),
      };
    default:
      return state;
  }
};
