import { combineReducers } from "redux";
import { todosReducer } from "../todo/reducers";

const rootReducer = combineReducers({
    todos: todosReducer
})

export default rootReducer;

// TODO: wat?
export type RootState = ReturnType<typeof rootReducer>;
