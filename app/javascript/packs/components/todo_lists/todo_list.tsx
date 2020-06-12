import { TodoState } from "../../store/todo/reducers";
import { allTodos } from "../../store/todo/selectors";
import { receiveTodo } from "../../store/todo/actions";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import TodoItem from "./todo_item";

const TodoList: FC = () => {
    return <ul>
        {useSelector(selectAllTodos).map(todo => {
            return <TodoItem todo={todo} key={todo.id} />
        })}
    </ul>
};

function selectAllTodos(state: { todos: TodoState }) {
    return allTodos(state)
}

function mapDispatcherToProps(dispatcher) {
    return {addTodo: () => dispatcher(receiveTodo)}
}

export default TodoList;
