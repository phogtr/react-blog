const GET_POST = "GET_POST";
const SET_POST = "SET_POST";

interface PostData {
  title: string;
  content: string;
  author: string;
  postId: string;
}
type Actions = { type: typeof GET_POST } | { type: typeof SET_POST; post: PostData };

export const getPost = () => ({
  type: GET_POST,
});

export const setPost = () => ({
  type: SET_POST,
});

type State = PostData[];

export const PostsReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case SET_POST:
      const { post } = action;
      return { ...state, post };
    default:
      return state;
  }
};
