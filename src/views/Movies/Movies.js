import React, { useEffect, useState } from "react";
import {
  setMovies,
  selectMovie,
  addFindMovie,
  addMovieGenres,
} from "../../reducers/moviesReducer";
import { useSelector, useDispatch } from "react-redux";
import TitleContainer from "../../components/TitleContainer/TitleContainer";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import classes from "./movies.module.css";
import { ButtonFilter } from "../../styledComponents/buttons/buttons";
import { filtersMovie } from "../../utils";
import SelectionBars from "../../components/SelectionBars/SelectionBars";
import { getMovieGenres } from "../../api/genres";
const Movies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.allMovies);
  const params = useParams();
  const [selectedFilter, setSelectedFilters] = useState("popular");

  useEffect(() => {
    if (params.movieName) {
      dispatch(addFindMovie(params.movieName));
    } else {
      dispatch(setMovies(selectedFilter));
    }
  }, [params,selectedFilter]);

  const navigate = useNavigate();
  return (
    <div className={classes.movie_container}>
      <div className={classes.container}>
        <div className={classes.selection_container}>
          <section>
            <div>
              {filtersMovie.map((option) => (
                <ButtonFilter
                  selected={selectedFilter === option.type}
                  onClick={() => setSelectedFilters(option.type)}
                >
                  {option.label.toUpperCase()}
                </ButtonFilter>
              ))}
            </div>
            <div className={classes.sub_container}>
              {movies?.results?.map((movie) => (
                <TitleContainer
                  key={movie.title}
                  imgURL={movie.poster_path}
                  name={movie.title}
                  selectMovieHandle={() => navigate("/movie/" + movie.id)}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Movies;
