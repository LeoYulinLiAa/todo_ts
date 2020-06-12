export interface Todo {
    id: number,
    title: string,
    body: string,
    done: boolean
}

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

export interface ReceiveTodosAction {
    type: typeof RECEIVE_TODOS,
    todos: Todo[]
}

export interface ReceiveTodoAction {
    type: typeof RECEIVE_TODO,
    todo: Todo | null
}