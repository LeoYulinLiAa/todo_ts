import { TodoState } from "./reducers";

export function allTodos({ todos }: { todos: TodoState }) {
    return Object.keys(todos).map(id => todos[id]);
}