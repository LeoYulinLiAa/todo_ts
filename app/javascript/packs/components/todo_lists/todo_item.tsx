import { Todo } from "../../store/todo/types";
import React, { FC } from "react";

const TodoItem: FC<{ todo: Todo }> = ({todo}) => {
    return <li>
        <strong>{todo.title}</strong>
        <p>{todo.body}</p>
        <p>{todo.done ? "Done" : "Meh"}</p>
    </li>
};

export default TodoItem;