import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectMovie,
  getCredits,
  clearSelectedMovie,
} from "../../reducers/moviesReducer";

import SelectedTitle from "../../components/SelectedTitle/SelectedTitle";
const SelectedMovie = () => {
  const param = useParams();
  const selectedMovie = useSelector((state) => state.movies.selectedMovie);
  const credits = useSelector((state) => state.movies.movieCredits);
  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch(selectMovie(param.id));
    dispatch(getCredits(param.id));
    return () => {
      dispatch(clearSelectedMovie());
    };
  }, [param]);

  return (
    <SelectedTitle selectedTitle={selectedMovie} credits={credits}/>
  );
};
export default SelectedMovie;
