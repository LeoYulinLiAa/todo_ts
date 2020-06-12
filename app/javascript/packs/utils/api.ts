import $ from "jquery";
import { Todo } from "../store/todo/types";

export const createTodo = (todo: Todo) => $.ajax({
    headers: { 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')},
    type: 'POST',
    url: '/api/todos',
    data: { todo },
    dataType: "json"
});

export const fetchTodos = () => $.ajax({
    url: '/api/todos'
});

export const updateTodo = (id: number, todo: Todo) => $.ajax({
    headers: { 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')},
    type: 'PATCH',
    url: `/api/todos/${id}`,
    data: { todo },
    dataType: "json"
});

