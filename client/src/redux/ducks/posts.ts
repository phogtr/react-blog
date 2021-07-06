export const GET_POST = "GET_POST";
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

type Actions = { type: typeof GET_POST } | { type: typeof SET_POST; posts: PostData };

export const getPost = () => ({
  type: GET_POST,
});

export const setPost = (posts: PostData) => ({
  type: SET_POST,
  posts,
});

const initialState: PostDataState = { posts: [] };

export const PostsReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case SET_POST:
      const { posts } = action;
      return { ...state, posts };
    default:
      return state;
  }
};
