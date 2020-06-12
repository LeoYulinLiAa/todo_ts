import { applyMiddleware, createStore } from "redux";
import rootReducer, { RootState } from "./root/reducers";
import { thunk } from "./todo/middleware";

// TODO: wat?
export function configStore(preloadedState = {}) {
    return createStore(rootReducer, preloadedState, applyMiddleware(thunk));
}

export default configStore()