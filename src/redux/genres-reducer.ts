import {Dispatch} from 'redux'
import {filmsApi, GenreType, ResGenresType} from "../api/api";

const initialState: ResGenresType = {
  genres: []
}

export const genresReducer = (state: ResGenresType = initialState, action: ActionsType1): ResGenresType => {
  switch (action.type) {
    case "SET-GENRES":
      return {
        ...state,
        genres: action.genres
      }
    default:
      return state
  }
}

// actions

export const setGenresAC = (genres: Array<GenreType>) => ({type: 'SET-GENRES', genres} as const)

// thunks
export const setGenresTC = () => {
  return (dispatch: ThunkDispatch) => {
    filmsApi.getGenres()
      .then((res) => {
        // @ts-ignore                               // !!
        dispatch(setGenresAC(res.data.genres))
      })
      .catch(error => {
        console.log(error, dispatch);
      })
  }
}

// types

export type SetGenresActionType = ReturnType<typeof setGenresAC>;
type ActionsType1 = SetGenresActionType

type ThunkDispatch = Dispatch<ActionsType1>
