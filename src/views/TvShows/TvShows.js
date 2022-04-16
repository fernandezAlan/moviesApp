import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TitleContainer from "../../components/TitleContainer/TitleContainer";
import {
  AddPopularTvSeries,
  clearPopularTvSerie,
} from "../../reducers/TvShowsReducer";
import classes from "./tvShows.module.css";
const TvShows = () => {
  const dispatch = useDispatch();
  const popularTvSeries = useSelector(
    (state) => state.tvSeries.popularTvSeries
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (!popularTvSeries) {
      dispatch(AddPopularTvSeries());
    }
  }, []);

  useEffect(() => {
    console.log("popularTvSeries", popularTvSeries);
  }, [popularTvSeries]);

  return (
    <div className={classes.container}>
      <h4>Las series de televisión más populares del momento</h4>
      <div className={classes.tv_serie_container}>
        {popularTvSeries
          ? popularTvSeries.results.map((serie) => (
              <TitleContainer
                key={serie.name}
                imgURL={serie.poster_path}
                name={serie.name}
                selectMovieHandle={() => {
                  navigate("/tv/" + serie.id);
                }}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default TvShows;
