import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  createPostSuccess,
  CREATE_POST_REQUEST,
  deletePostSuccess,
  DELETE_POST_REQUEST,
  getSinglePostSuccess,
  GET_POST,
  GET_SINGLE_POST_REQUEST,
  setPost,
} from "src/redux/ducks/posts/action";
import { Actions, PostsArrayResponse, PostsResponse } from "src/redux/ducks/posts/postsReducer";
import { requestCreatePost, requestDeletePost, requestGetPosts } from "../requests/posts.requests";

function* handleGetPosts() {
  try {
    const response: PostsArrayResponse = yield call(requestGetPosts);
    const { data } = response;
    yield put(setPost(data));
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

function* handleCreatePost(action: Extract<Actions, { type: "CREATE_POST_REQUEST" }>) {
  try {
    const response: PostsResponse = yield call(requestCreatePost, action.newPost);
    const { data } = response;
    yield put(createPostSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

function* handleGetSinglePost(action: Extract<Actions, { type: "GET_SINGLE_POST_REQUEST" }>) {
  try {
    yield put(getSinglePostSuccess(action.id));
  } catch (error) {
    console.log(error);
  }
}

export function* watcherPostSaga() {
  yield takeLatest(GET_POST, handleGetPosts);
  yield takeEvery(DELETE_POST_REQUEST, handleDeletePost);
  yield takeEvery(CREATE_POST_REQUEST, handleCreatePost);
  yield takeLatest(GET_SINGLE_POST_REQUEST, handleGetSinglePost);
}
