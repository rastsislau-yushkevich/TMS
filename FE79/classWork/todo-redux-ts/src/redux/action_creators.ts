import { ADD_TODO, DELETE_TODO, LOAD_TODOS, REPLACE_TODOS } from "./action_types"
import { put } from "../../node_modules/redux-saga/effects"
import { takeEvery } from "../../node_modules/redux-saga/effects"
import { ITodo } from "./types";
import { ServerResponse } from "http";
let idCounter = 0;

const addTodo = (text: string) => ({
    type: ADD_TODO,
    newTodo: {
        id: ++idCounter,
        text
    }
});

const deleteTodo = (id: number) => ({
    type: DELETE_TODO,
    id
})

const loadTodos = () => {
    return {
        type: LOAD_TODOS
    }
}

export const replaceTodos = (todos: any) => ({
    type: REPLACE_TODOS,
    todos
});

function* fetchTodos(): any {
    const data = yield fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = yield data.json();

    yield put(replaceTodos(todos.map((todo: any) => (
        {id: todo.id, text: todo.title}
    ))))
    
}

function* watcherTodos() {
    yield takeEvery(LOAD_TODOS, fetchTodos)
}

export { addTodo, deleteTodo, loadTodos, fetchTodos, watcherTodos }