import { takeLatest } from "redux-saga/effects";
import { GET_POST } from "../ducks/posts";
import { handleGetPosts } from "./handler/posts";

export function* watcherSaga() {
  yield takeLatest(GET_POST, handleGetPosts);
}
