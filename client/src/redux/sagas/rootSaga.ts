import { all } from "redux-saga/effects";
import { watcherPostSaga } from "./handlers/posts";

export default function* rootSaga() {
  yield all([watcherPostSaga()]);
}
