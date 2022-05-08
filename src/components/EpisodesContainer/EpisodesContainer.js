import React, {useState } from "react";
import {
  Container,
  EpisodesContainerStyle,
  Episode,
  InformationEpisode,
  ContentEpisodeContainer,
  EpisodeOverview
} from "../../styledComponents/containers/containers";
import { MoreButton } from "../../styledComponents/buttons/buttons";
const EpisodesContainer = ({ episodes }) => {
  const [selectedEpisode, setSelectedEpisode] = useState(episodes[0]);
  const nextEpisode = () => {
    const next = +selectedEpisode.episode_number;
    if (next < episodes.length) {
      setSelectedEpisode(episodes[next]);
    }
  };
  const prevEpisode = () => {
    const prev = selectedEpisode.episode_number - 2;
    if (prev >= 0) {
      setSelectedEpisode(episodes[prev]);
    }
  };

  return (
    <>
      <Container
        desktop={{ display: "none" }}
      >{`${episodes.length} capítulos`}</Container>
      <Container desktop={{ justifyContent: "space-between", width: "55vw" }}>
        <Container desktop={{ width: "30vw" }} mobile={{ width: "60vw" }}>
          <Container desktop={{display:'none'}}>
            <MoreButton onClick={prevEpisode}>-</MoreButton>
            <Episode
              selected={true}
            >{`capítulo ${selectedEpisode.episode_number}`}</Episode>
            <MoreButton onClick={nextEpisode}>+</MoreButton>
          </Container>
          <Container mobile={{ display: "none" }} desktop={{width:'100%'}}>
            {`${episodes.length} capítulos`}
            <EpisodesContainerStyle>
              {episodes.map((ep, i) => (
                <Episode
                  selected={selectedEpisode.id === ep.id}
                  onClick={() => setSelectedEpisode(ep)}
                >{`capítulo ${i + 1}`}</Episode>
              ))}
            </EpisodesContainerStyle>
          </Container>
        </Container>
        <InformationEpisode>
          <div>
            <img
              style={{width:'100%'}}
              src={`https://image.tmdb.org/t/p/original${selectedEpisode?.still_path}`}
            />
          </div>
          <ContentEpisodeContainer>
            <div>{`${selectedEpisode?.episode_number}.${selectedEpisode?.name}`}</div>
            <EpisodeOverview>{selectedEpisode?.overview}</EpisodeOverview>
            <div></div>
          </ContentEpisodeContainer>
        </InformationEpisode>
      </Container>
    </>
  );
};

export default EpisodesContainer;
