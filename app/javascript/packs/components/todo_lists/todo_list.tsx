import { TodoState } from "../../store/todo/reducers";
import { allTodos } from "../../store/todo/selectors";
import { fetchAllTodos, receiveTodo, receiveTodos } from "../../store/todo/actions";
import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./todo_item";
import { fetchTodos } from "../../utils/api";
import { Todo } from "../../store/todo/types";

const TodoList: FC = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        // fetchTodos().then(
        //     todos => dispatch(receiveTodos(todos)),
        //     err => console.log(err)
        // );
        dispatch(fetchAllTodos());
    }, []);

    return <ul>
        {useSelector(selectAllTodos).map(todo => {
            return <TodoItem todo={todo} key={todo.id} />
        })}
    </ul>
};

function selectAllTodos(state: { todos: TodoState }) {
    return allTodos(state);
}

export default TodoList;
