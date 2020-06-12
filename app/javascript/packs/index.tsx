import { render } from "react-dom";
import React from "react";
import App from "./components/app";
import { receiveTodo, receiveTodos } from "./store/todo/actions";
import { configStore } from "./store/store";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {

    const store = configStore();

    // @ts-ignore
    window.store = store;
    // @ts-ignore
    window.receiveTodo = receiveTodo;
    // @ts-ignore
    window.receiveTodos = receiveTodos;
    render(<Root store={ store } />, document.getElementById("content"));
})