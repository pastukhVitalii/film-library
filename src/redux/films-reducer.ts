import {Dispatch} from 'redux'
import {filmsApi, FilmType, ResFilmsType} from "../api/api";

const initialState: ResFilmsType = {
    films: []
}

export const filmsReducer = (state: ResFilmsType = initialState, action: ActionsType): ResFilmsType => {
    switch (action.type) {
        case "SET-FILMS":
            return {
                ...state,
                films: action.films
            }
        default:
            return state
    }
}

// actions

export const setFilmsAC = (films: Array<FilmType>) => ({type: 'SET-FILMS', films} as const)

// thunks
export const setFilmsTC = () => {
    return (dispatch: ThunkDispatch) => {
        filmsApi.getFilms()
            .then((res) => {
                dispatch(setFilmsAC(res.data.results))
            })
            .catch(error => {
                console.log(error, dispatch);
            })
    }
}

// types

export type SetFilmsActionType = ReturnType<typeof setFilmsAC>;
type ActionsType = SetFilmsActionType

type ThunkDispatch = Dispatch<ActionsType>
