import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  // ...settings
})

// api
export const filmsApi = {
  getFilms() {
    return instance.get<ResponseFilmsType>(`/discover/movie?api_key=0a581495ea21f59d39155d84302f6785`);
  },
  getGenres() {
    return instance.get<ResponseGenresType>(`/genre/movie/list?api_key=0a581495ea21f59d39155d84302f6785`);
  },
  getFilteredEpisodes(e: string) {
    return instance.get<ResponseFilmsType>(`/discover/movie?api_key=0a581495ea21f59d39155d84302f6785&with_genres=${e}`);
  },

}

// types
export type ResponseFilmsType = {
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

export type ResponseGenresType = {
  results: Array<GenreType>
}

export type ResGenresType = {
  genres: Array<GenreType>
}

export type GenreType = {
  id: number
  name: string
}