import { ReceiveTodoAction, ReceiveTodosAction, Todo } from "./types";

export type TodoState = {[key: number]: Todo};

const initialState: TodoState = {
    1: {
        id: 1,
        title: "wash car",
        body: "with soap",
        done: false
    },
    2: {
        id: 2,
        title: "wash dog",
        body: "with shampoo",
        done: true
    }
};

export function todosReducer(state = initialState, action: ReceiveTodosAction | ReceiveTodoAction): TodoState {
    switch (action.type) {
        case "RECEIVE_TODOS":
            return action.todos.reduce((obj, todo) => obj[todo.id] = todo, {});
        case "RECEIVE_TODO":
            const newState = { ...state };
            newState[action.todo.id] = action.todo;
            return newState;
        default:
            return state;
    }
}