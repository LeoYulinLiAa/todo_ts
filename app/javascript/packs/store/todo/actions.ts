import { RECEIVE_TODO, RECEIVE_TODOS, Todo } from "./types";
import { ThunkDispatch } from "redux-thunk";
import * as API from "../../utils/api";

export function receiveTodos(todos: Todo[]) {
    return {
        type: RECEIVE_TODOS,
        todos
    }
}

export function receiveTodo(todo: Todo) {
    return {
        type: RECEIVE_TODO,
        todo
    }
}

export function fetchAllTodos() {
    return function (dispatch: ThunkDispatch<any, any, any>) {
        return API.fetchTodos().then((todos: Todo[]) => {
            dispatch(receiveTodos(todos));
        })
    }
}

export function createTodo(todo: Todo) {
    return function (dispatch) {
        return API.createTodo(todo).then((todo: Todo) => {
            dispatch(receiveTodo(todo));
        })
    }
}