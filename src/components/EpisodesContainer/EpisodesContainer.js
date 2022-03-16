import React, { useEffect, useState } from "react";
import classes from "./episodesContainer.module.css";
import Image from "../Images/Images";
const EpisodesContainer = ({ episodes }) => {
  const [selectedEpisode, setSelectedEpisode] = useState(episodes[0]);
  useEffect(()=>{
  })
  return (
    <>
      <section className={classes.episodes_container}>
        <div>{`${episodes.length} capítulos`}</div>
        <section className={classes.episodes_sub_container}>
          {episodes.map((ep, i) => (
            <div
              className={
                selectedEpisode.id === ep.id
                  ? classes.selected_episode
                  : classes.episode
              }
              onClick={() => setSelectedEpisode(ep)}
            >{`capítulo ${i + 1}`}</div>
          ))}
        </section>
      </section>
      <section>
        <section className={classes.selected_episode_container}>
          <div>
            <img src={`https://image.tmdb.org/t/p/original${selectedEpisode?.still_path}`}
            className={classes.img_poster}
            />
          </div>
          <div className={classes.content_container}>
            <div>{`${selectedEpisode?.episode_number}.${selectedEpisode?.name}`}</div>
            <p className={classes.overview}>{selectedEpisode?.overview}</p>
            <div></div>
          </div>
        </section>
        <section></section>
      </section>
    </>
  );
};

export default EpisodesContainer;
