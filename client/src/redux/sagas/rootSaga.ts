import { all } from "redux-saga/effects";
import { watcherPostSaga } from "./handlers/posts.handlers";

export default function* rootSaga() {
  yield all([watcherPostSaga()]);
}
