import { createStore, applyMiddleware } from "redux";
import todo_reducer from "./reducers/todo_reducer";
import createSagaMiddleware from "redux-saga";
import { watcherTodos } from "./action_creators";

const sagaMiddleware = createSagaMiddleware();

export default createStore(todo_reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watcherTodos);