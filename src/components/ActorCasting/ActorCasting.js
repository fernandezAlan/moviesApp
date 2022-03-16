import React from "react";
import classes from "./actorCasting.module.css";
import { formatName } from "../../utils";
const ActorCasting = ({ ActorName, characterName, imgURL, goToPersonPage }) => {
  return (
    <div className={classes.container} onClick={goToPersonPage}>
      <section className={classes.names_container}>
          <span className={classes.characterName}>
            {formatName(characterName)}
          </span>
          <span className={classes.actorName}>{formatName(ActorName)}</span>
      </section>
      <section className={classes.img_container}>
        <img
          src={
            imgURL
              ? "https://image.tmdb.org/t/p/original" + imgURL
              : "https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/styles/full_width/public/thumbnails/image/placeholder-profile_3_5.png?itok=4Oh1ZY3T"
          }
          alt="actor_profile"
          className={classes.img_actor}
        />
      </section>
    </div>
  );
};

export default ActorCasting;
