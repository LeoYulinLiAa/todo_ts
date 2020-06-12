import React from "react";
import { Provider } from "react-redux"
import App from "./app";
import { Store } from "redux";

type RootProps = {
    store: Store
}

export default function Root({ store }: RootProps) {
    return <Provider store={store}>
        <App />
    </Provider>
}