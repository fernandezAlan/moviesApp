import React, { useState } from "react";
import Episode from "../Episode/Episode";
import classes from "./episodes.module.css";

const Episodes = ({ episodes }) => {
  const [selectedEpisode, setSelectedEpisode] = useState(episodes[0]);
  return (
    <section className={classes.container}>
      <section>
        {episodes.map((episode) => (
          <div className={classes.episode_container}>
            <span>{"episodio: " + episode.episode_number}</span>
          </div>
        ))}
      </section>
      <section>
          <Episode 
          imgURL={selectedEpisode.still_path}
          title={selectedEpisode.name}
          episodeNumber={selectedEpisode.episode_number}
          overview={selectedEpisode.overview}
          airDate={selectedEpisode.air_date}
          />
      </section>
    </section>
  );
};

export default Episodes;
