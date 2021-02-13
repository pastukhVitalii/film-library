import {AppStateType} from "../redux/store";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {setFilmsTC} from "../redux/films-reducer";
import {FilmType} from "../api/api";

export const Films = React.memo(() => {

  const films = useSelector<AppStateType, Array<FilmType>>(state => state.films.films);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setFilmsTC());
  }, [dispatch]);

  return (
    <div>

    </div>
  );
});