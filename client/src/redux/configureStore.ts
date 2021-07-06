import { combineReducers, createStore } from "redux";
import { PostsReducer } from "./ducks/posts";

const reducer = combineReducers({
  posts: PostsReducer,
});

const store = createStore(reducer);

export default store;
