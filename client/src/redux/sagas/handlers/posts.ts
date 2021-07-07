import { call, put, takeLatest } from "redux-saga/effects";
import { GET_POST, PostsResponse, setPost } from "src/redux/ducks/posts";
import { requestGetPosts } from "../requests/posts";

function* handleGetPosts() {
  try {
    const response: PostsResponse = yield call(requestGetPosts);
    const { data } = response;
    yield put(setPost(data));
  } catch (error) {
    console.log(error);
  }
}

export function* watcherPostSaga() {
  yield takeLatest(GET_POST, handleGetPosts);
}
