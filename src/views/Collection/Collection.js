import React, { useEffect } from "react";
import classes from "./collection.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addCollection } from "../../reducers/CollectionReducer";
import { useNavigate, useParams } from "react-router-dom";
import MoviesContainer from "../../components/MoviesContainer/MoviesContainer";
const Collection = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const selectedCollection = useSelector(
    (state) => state.collection.selectedCollection
  );
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(addCollection(params.id));
  }, []);

  useEffect(() => {
    console.log({ selectedCollection });
  }, [selectedCollection]);

  return (
    <div>
      {selectedCollection ? (
        <div className={classes.principal_container}>
          <h4>{selectedCollection.name}</h4>
          <div className={classes.content}>
              <div>
                <img
                    src={
                    "https://image.tmdb.org/t/p/original" +
                    selectedCollection.poster_path
                    }
                    alt="poster de colleción"
                    className={classes.principal_img}
                />
              
              </div>
            <section className={classes.container_collection}>
              <div>
                <p className={classes.overview}>
                  {selectedCollection.overview}
                </p>
              </div>
              <div className={classes.movies_collection} >
              {selectedCollection.parts.map((movie) => (
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
      ) : null}
    </div>
  );
};

export default Collection;
