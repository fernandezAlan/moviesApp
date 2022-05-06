import React from "react";
import classes from "./moviesContainer.module.css";
import { toggleElement } from "../../utils/index";
import { MediaTypeLabel } from "../../styledComponents/labels/labels.js";
import { CardContainer } from "../../styledComponents/containers/containers";
const TitleContainer = ({
  imgURL,
  name,
  selectMovieHandle,
  size,
  showMediaType,
  mediaType,
  id,
}) => {
  const AllSizes = {
    s: "70px",
    m: "100px",
    l: "150px",
  };
  const mediaTypesManager = {
      movie:'película',
      tv:'serie de tv'
  }
  return (
    <CardContainer
      width={size ? AllSizes[size] : '100px'}
      onClick={selectMovieHandle}
      onMouseEnter={() =>
        toggleElement("title_" + name + id, "flex", "enter")
      }
      onMouseLeave={() =>
        toggleElement("title_" + name + id, "flex", "leave")
      }
    >
      {showMediaType ? <MediaTypeLabel>{mediaTypesManager[mediaType]}</MediaTypeLabel> : ""}

      <div className={classes.sub_container}>
        <div id={"title_" + name + id} className={classes.tittle}>
          <p className={classes.text}>{name}</p>
        </div>
        <img
          className={classes.img_movie}
          src={
            imgURL
              ? "https://image.tmdb.org/t/p/w500" + imgURL
              : "https://www.tiendalincoln.com.py/static/products/DEFAULT/846242/SMALL/846242+LENTES+DE+SEGURIDAD.jpg"
          }
          alt="movie_poster"
        />
      </div>
    </CardContainer>
  );
};
export default TitleContainer;
