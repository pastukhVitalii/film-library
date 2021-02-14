import {AppStateType} from "../../redux/store";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {setFilmsTC} from "../../redux/films-reducer";
import {FilmType, GenreType} from "../../api/api";
import {MyCard} from "../Card/Card";
import {setGenresTC} from "../../redux/genres-reducer";
import {MySelect} from "../Select/Select";

export const Films = React.memo(() => {

  const films = useSelector<AppStateType, Array<FilmType>>(state => state.films.films);
  const filterItems = useSelector<AppStateType, Array<GenreType>>(state => state.genres.genres);

  const dispatch = useDispatch();
  // https://api.themoviedb.org/3/genre/28?api_key=0a581495ea21f59d39155d84302f6785
  useEffect(() => {
    dispatch(setGenresTC());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setFilmsTC());
  }, [dispatch]);

  console.log(filterItems)
  return (
    <div>
      <MySelect filterLabel={'Genres'} filterItems={filterItems}/>
      {films.map(f => <MyCard key={f.id} film={f}/>)}
    </div>
  );
});