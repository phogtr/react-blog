import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { PostsReducer } from "./ducks/posts";
import { watcherSaga } from "./sagas/rootSaga";

const reducer = combineReducers({
  posts: PostsReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export type ReduxState = ReturnType<typeof reducer>;
export default store;
