import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  deletePostSuccess,
  DELETE_POST_REQUEST,
  getPostSuccess,
  GET_POST_REQUEST,
} from "src/redux/ducks/posts/action";
import { Actions, PostsArrayResponse } from "src/redux/ducks/posts/postsReducer";
import { requestDeletePost, requestGetPosts } from "../requests/posts.requests";

function* handleGetPosts() {
  try {
    const response: PostsArrayResponse = yield call(requestGetPosts);
    const { data } = response;
    yield put(getPostSuccess(data, false));
  } catch (error) {
    console.log(error);
  }
}

// extract dicriminated union
function* handleDeletePost(action: Extract<Actions, { type: "DELETE_POST_REQUEST" }>) {
  try {
    yield call(requestDeletePost, action.id);
    yield put(deletePostSuccess(action.id));
  } catch (error) {
    console.log(error);
  }
}

// function* handleCreatePost(action: Extract<Actions, { type: "CREATE_POST_REQUEST" }>) {
//   try {
//     yield call(requestCreatePost, action.newPost);
//   } catch (error) {
//     console.log(error);
//   }
// }

// function* handleEditPost(action: Extract<Actions, { type: "EDIT_POST_REQUEST" }>) {
//   try {
//     yield call(requestEditPost, action.id, action.editPost);
//   } catch (error) {
//     console.log(error);
//   }
// }

export function* watcherPostSaga() {
  yield takeLatest(GET_POST_REQUEST, handleGetPosts);
  yield takeEvery(DELETE_POST_REQUEST, handleDeletePost);
  // yield takeEvery(CREATE_POST_REQUEST, handleCreatePost);
  // yield takeLatest(EDIT_POST_REQUEST, handleEditPost);
}
