import React, { FC, useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { receiveTodo } from "../../store/todo/actions";

const TodoForm: FC = () => {

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const dispatch = useDispatch()

    function generateId() {
        return new Date().getTime();
    }

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        dispatch(receiveTodo({
            id: generateId(),
            title,
            body,
            done: false
        }));
    }

    return <form onSubmit={ handleSubmit }>
        <label htmlFor="title">Title</label>
        <input value={title} id="title" onChange={ e => setTitle(e.target.value) }/>
        <label htmlFor="body">Body</label>
        <input value={body} id="body" onChange={ e => setBody(e.target.value) }/>
        <button type="submit">Create</button>
    </form>
}

export default TodoForm;
