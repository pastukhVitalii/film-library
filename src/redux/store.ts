import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {filmsReducer} from "./films-reducer";
import {genresReducer} from "./genres-reducer";

let rootReducer = combineReducers({
  films: filmsReducer,
  genres: genresReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;

// @ts-ignore
window.store = store