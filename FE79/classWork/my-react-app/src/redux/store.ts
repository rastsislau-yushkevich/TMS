import { combineReducers, createStore, applyMiddleware } from "redux"
import post_reducer from "./reducers/post_reducer";
import theme_reducer from "./reducers/theme_reducer"
import user_reducer from "./reducers/user_reducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga, watcherPost, watcherUser } from "./action_creators";
import { all } from "redux-saga/effects";

const sagaMiddleware = createSagaMiddleware();

export default createStore(combineReducers({theme: theme_reducer, user: user_reducer, posts: post_reducer}), applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);