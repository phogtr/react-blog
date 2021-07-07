import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  Actions,
  deletePost,
  DELETE_POST,
  GET_POST,
  PostsResponse,
  setPost,
} from "src/redux/ducks/posts";
import { requestDeletePost, requestGetPosts } from "../requests/posts";

function* handleGetPosts() {
  try {
    const response: PostsResponse = yield call(requestGetPosts);
    const { data } = response;
    yield put(setPost(data));
  } catch (error) {
    console.log(error);
  }
}

// extract dicriminated union
function* handleDeletePost(action: Extract<Actions, { type: "DELETE_POST" }>) {
  try {
    yield call(requestDeletePost, action.id);
    yield put(deletePost(action.id));
  } catch (error) {
    console.log(error);
  }
}

export function* watcherPostSaga() {
  yield takeLatest(GET_POST, handleGetPosts);
  yield takeEvery(DELETE_POST, handleDeletePost);
}
