import React from "react";
import TodoList from "./todo_lists/todo_list";
import TodoForm from "./todo_lists/todo_form";

const App = () => {
    return <>
        <h1>App Main</h1>
        <TodoList />
        <TodoForm />
        </>
}

export default App;