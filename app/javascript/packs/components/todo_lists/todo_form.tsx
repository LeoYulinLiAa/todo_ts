import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo, receiveTodo } from "../../store/todo/actions";

const TodoForm: FC = () => {

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const dispatch = useDispatch()

    function generateId() {
        return new Date().getTime();
    }

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        const newTodo = {
            id: generateId(),
            title,
            body,
            done: false
        }
        setTitle("");
        setBody("");
        dispatch(createTodo(newTodo));
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
