import { Todo } from "../../store/todo/types";
import React, { FC } from "react";

const TodoItem: FC<{ todo: Todo }> = ({todo}) => {
    return <li>
        <strong>{todo.title}</strong>
        <span> {todo.body}</span>
        <span> {todo.done ? "Done" : "Meh"}</span>
    </li>
};

export default TodoItem;