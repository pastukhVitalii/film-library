import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/discover/movie?api_key=0a581495ea21f59d39155d84302f6785',
  // ...settings
})

// api
export const filmsApi = {
  getFilms() {
    return instance.get<ResponseType>(``);
  },
}

// types
export type ResponseType = {
  results: Array<FilmType>
}

export type ResFilmsType = {
  films: Array<FilmType>
}

export type FilmType = {
  id: string
  title: string
  release_date: string
  genre_ids: Array<number>
  backdrop_path: string
}
