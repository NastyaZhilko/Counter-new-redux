import {combineReducers, createStore, Store} from "redux";
import {countReducer} from "./redux";


let reducers=combineReducers({
    counter: countReducer

})
export type AppStateType=ReturnType<typeof reducers>

export let store: Store=createStore(reducers);

type Window = typeof window & { store: Store }
(window as Window).store = store;
export default store;