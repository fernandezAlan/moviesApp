import React from "react";
import classes from "./previousTitles.module.css";
import TitleContainer from "../TitleContainer/TitleContainer";
import { useNavigate } from "react-router-dom";
const PreviousTitles = ({ titles, type, name }) => {
  const paths = {
    películas: "movie",
    series: "tv",
  };
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      {titles? (
        <>
        <h6>
        {`${type} similares a `}
        <strong>{name}</strong>
      </h6>
      <section className={classes.previos_container}>
        {titles.map((title) => (
          <TitleContainer
            size={"s"}
            imgURL={title.poster_path}
            name={title.title ? title.title : title.name}
            selectMovieHandle={() => navigate(`/${paths[type]}/${title.id}`)}
          />
        ))}
        <section className={classes.show_more_container}>
          <div className={classes.show_more}>+</div>
          <span>ver más</span>
        </section>
      </section>
        </>
      ): null}
      
    </div>
  );
};

export default PreviousTitles;
