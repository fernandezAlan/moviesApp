import React, { useEffect } from "react";
import {
  setMovies,
  selectMovie,
  addFindMovie,
  addMovieGenres,
} from "../../reducers/moviesReducer";
import { useSelector, useDispatch } from "react-redux";
import MoviesContainer from "../../components/MoviesContainer/MoviesContainer";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import classes from "./movies.module.css";
import SelectionBars from "../../components/SelectionBars/SelectionBars";
import { getMovieGenres } from "../../api/genres";
const Movies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.allMovies);
  const params = useParams();
  
  useEffect(() => {
    if (params.movieName) {
      dispatch(addFindMovie(params.movieName));
    } else {
      dispatch(setMovies());
    }
  }, [params]);

  const navigate = useNavigate();
  return (
    <div className={classes.movie_container}>
      <div className={classes.container}>
        <div className={classes.selection_container}>
          <section className={classes.bars_container}>
            <SelectionBars
              labels={[
                "POPULARES",
                "CLÁSICOS",
                "ÚLTIMOS AGREGADOS",
                "PRÓXIMOS ESTRENOS",
              ]}
            />
          </section>
          <section >
          <h3 className={classes.title}>Las películas más populares</h3>
          <div className={classes.sub_container}>
            {movies?.results?.map((movie) => (
              <MoviesContainer
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
