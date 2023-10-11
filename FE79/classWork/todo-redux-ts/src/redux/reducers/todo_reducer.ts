import { ADD_TODO, DELETE_TODO, REPLACE_TODOS } from "../action_types";
import { IStore, ITodo } from "../types";

const initialState = {
    todos: []
};

export default (state: IStore = initialState, action: any) => {
    switch(action.type) {
        case ADD_TODO: {
            const {id, text} = action.newTodo;
            return({
                ...state,
                todos: [...state.todos, {id, text}]
            })
        }
        case DELETE_TODO: {
            const { id } = action;
            const newTodos = [...state.todos];
            const searchedIndex = newTodos.findIndex((el) => el.id === id);
            newTodos.splice(searchedIndex, 1);

            return({
                ...state,
                todos: newTodos
            })
        }
        case REPLACE_TODOS: {
            const { todos } = action;
            return({
                ...state,
                todos
            })
        }
        default: {
            return state
        }
    }
    
}
