import { RECEIVE_TODO, RECEIVE_TODOS, Todo } from "./types";

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