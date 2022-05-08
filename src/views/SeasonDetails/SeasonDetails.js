import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSeasonDetails,
  addSelectedTvSerie,
  clearSelectedTvSerie,
  clearSeasonDetails,
} from "../../reducers/TvShowsReducer";
import { useNavigate, useParams } from "react-router-dom";
import Episodes from "../../components/Episodes/Episodes";
import EpisodesContainer from "../../components/EpisodesContainer/EpisodesContainer";
import Image from "../../components/Images/Images";
import {Container,SeasonContainer} from "../../styledComponents/containers/containers"
import { NextPrevButton } from "../../styledComponents/buttons/buttons";
const SeasonDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const seasonDetails = useSelector((state) => state.tvSeries.seasonDetails);
  const navigate = useNavigate();
  const SelectedTvSerie = useSelector(
    (state) => state.tvSeries.selectedTvSerie
  );
  useEffect(() => {
    dispatch(addSeasonDetails(params));
    dispatch(addSelectedTvSerie(params.id));
    return () => {
      dispatch(clearSelectedTvSerie());
      dispatch(clearSeasonDetails());
    };
  }, [params]);
  const handleNextPrev = (type) => {
    switch (type) {
      case "next":
        if (+params.seasonNumber + 1 <= SelectedTvSerie.number_of_seasons) {
          navigate(
            `/tv/${SelectedTvSerie.id}/season/${
              +params.seasonNumber + 1
            }/details`
          );
        }
        break;
      case "prev":
        const firstTemp =
        (SelectedTvSerie.number_of_seasons-SelectedTvSerie.seasons.length) +1 ;
        if (+params.seasonNumber - 1 >= firstTemp) {
          navigate(
            `/tv/${SelectedTvSerie.id}/season/${
              +params.seasonNumber - 1
            }/details`
          );
        }
        break;

      default:
        break;
    }
  };
 
  return (
    <Container>
      {seasonDetails && SelectedTvSerie ? (
        <Container desktop={{width:'100vw',flexDirection:'column'}}>
          <SeasonContainer>
           
              <h2>{SelectedTvSerie.name}</h2>
              <Container>
                <NextPrevButton
                  onClick={() => handleNextPrev("prev")}
                >
                  {"-"}
                </NextPrevButton>
                <Container>
                  {seasonDetails.name}
                </Container>
                <NextPrevButton
                  onClick={() => handleNextPrev("next")}
                >
                  {"+"}
                </NextPrevButton>
              </Container>
          
            <Container desktop={{justifyContent:'space-evenly'}} mobile={{flexDirection:'column'}}>
              <Container desktop={{width:'20vw'}} mobile={{width:'60vw'}}>
                  <Image singleURL={seasonDetails.poster_path} />
              </Container>
              <EpisodesContainer episodes={seasonDetails.episodes} />
            </Container>
          </SeasonContainer>
        </Container>
      ) : (
        "loading"
      )}
    </Container>
  );
};

export default SeasonDetails;
