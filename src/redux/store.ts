import {countReducer} from "./redux-counter";
import {combineReducers, createStore} from "redux";

const rootReducer=combineReducers({
    counter: countReducer
})

export type AppStateType=ReturnType<typeof rootReducer>

export const store=createStore (rootReducer)

// @ts-ignore
window.store = store;