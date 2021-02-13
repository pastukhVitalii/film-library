import {AppStateType} from "../../redux/store";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {setFilmsTC} from "../../redux/films-reducer";
import {FilmType} from "../../api/api";
import {MyCard} from "../Card/Card";

export const Films = React.memo(() => {

  const films = useSelector<AppStateType, Array<FilmType>>(state => state.films.films);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setFilmsTC());
  }, [dispatch]);

  console.log(films)
  return (
    <div>
      {films.map(f => <MyCard key={f.id} film={f}/>)}
      {/*{films.map(f => <div key={f.id}>{f.backdrop_path}
        <img src={`https://image.tmdb.org/t/p/w500${f.backdrop_path}`} alt={f.title}/>*/}

    </div>
  );
});