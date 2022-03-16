import React from "react";
import classes from "./episodesLink.module.css";
const EpisodesLink = ({ seasons,goToSeason}) => {

  return (
    <div className={classes.container}>
      {seasons.map((season) => {
        return (
          <div 
          className={classes.episode_container}
          onClick={()=>goToSeason(season.season_number)}
          >
            <span>{`${season.name}: `}</span>
            <span>{`${season.episode_count} capítulos`}</span>
            <img
              src={"https://image.tmdb.org/t/p/original" + season.poster_path}
              className={classes.img_poster}
            />
          </div>
        );
      })}
    </div>
  );
};

export default EpisodesLink;
