import React from "react";
import classes from './actorCasting.module.css'
const ActorCasting = ({ ActorName, characterName, imgURL }) => {
  return (
  <div className={classes.container}>
      <img 
      src={'https://image.tmdb.org/t/p/original'+imgURL}
      alt='actor_profile'
      className={classes.img_actor}
      />
      <span className={classes.characterName}>{characterName}</span>
      <span className={classes.actorName}>{ActorName}</span>
  </div>
  );
};

export default ActorCasting