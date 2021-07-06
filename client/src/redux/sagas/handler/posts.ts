import { call, put } from "redux-saga/effects";
import { PostsResponse, setPost } from "src/redux/ducks/posts";
import { requestGetPosts } from "../requests/posts";

export function* handleGetPosts() {
  try {
    const response: PostsResponse = yield call(requestGetPosts);
    const { data } = response;
    yield put(setPost(data));
  } catch (error) {
    console.log(error);
  }
}
