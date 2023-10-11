import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga"
import { watcherPost } from "./action_creators/posts_action_creators";
import posts_reducer from "./reducers/posts_reducer";
import themes_reducer from "./reducers/themes_reducer";
import user_reducer from "./reducers/user_reducer";
import { all } from "redux-saga/effects"
import { watcherUser } from "./action_creators/user_action_creators";


const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield all([
        watcherPost(),
        watcherUser()
    ])
}

export default createStore(combineReducers({ posts: posts_reducer, themes: themes_reducer, user: user_reducer }), applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);