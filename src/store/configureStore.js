import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
