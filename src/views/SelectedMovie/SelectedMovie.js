import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectMovie, getCredits } from "../../reducers/moviesReducer";
import classes from "./selectedMovie.module.css";
import Genre from "../../components/Genre/Genre";
import ActorCasting from "../../components/ActorCasting/ActorCasting";
const SelectedMovie = () => {
  const param = useParams();
  const selectedMovie = useSelector((state) => state.movies.selectedMovie);
  const credits = useSelector((state) => state.movies.movieCredits);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectMovie(param.movieId));
    dispatch(getCredits(param.movieId));
  }, []);
  useEffect(() => {
    console.log("selectedMovie:", selectedMovie);
    console.log("credits", credits);
  }, [selectedMovie, credits]);

  return (
    <div>
      {selectedMovie && credits ? (
        <div className={classes.container}>
          <section className={classes.sub_container}>
            <span>{selectedMovie.title}</span>
            <img
              src={
                "https://image.tmdb.org/t/p/original" +
                selectedMovie.poster_path
              }
              alt="movie_poster"
              className={classes.img_poster}
            />
          </section>
          <section>
            <h6 className={classes.title_movie}>sinopsis</h6>
            <p className={classes.overview}>{selectedMovie.overview}</p>
            <div className={classes.genre_container}>
              {selectedMovie?.genres?.map((genre) => (
                <Genre genreName={genre.name} />
              ))}
            </div>
            <div>
              <h6 className={classes.title_movie}>casting</h6>
              <div className={classes.actors_container}>
                {credits.cast.map((actor) => (
                    <ActorCasting
                    ActorName={actor.name}
                    characterName={actor.character}
                    imgURL={actor.profile_path}
                    />
                ))}
              </div>
            </div>
          </section>
        </div>
      ) : (
        <span>loading</span>
      )}
    </div>
  );
};
export default SelectedMovie;
