import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {filmsReducer} from "./films-reducer";

let rootReducer = combineReducers({
  films: filmsReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;

// @ts-ignore
window.store = store