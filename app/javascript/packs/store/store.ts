import { createStore } from "redux";
import rootReducer, { RootState } from "./root/reducers";

// TODO: wat?
export function configStore(preloadedState = {}) {
    return createStore(rootReducer, preloadedState);
}

export default configStore()