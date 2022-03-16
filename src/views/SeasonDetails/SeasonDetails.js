import React, { useEffect, useState } from "react";
import classes from "./seasonDetails.module.css";
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
  useEffect(() => {
    console.log("params", { seasonDetails, SelectedTvSerie, params });
  }, [seasonDetails, SelectedTvSerie, params]);
  return (
    <div className={classes.container}>
      {seasonDetails && SelectedTvSerie ? (
        <div className={classes.sub_container}>
          <section className={classes.content_container}>
            <section>
              <h2>{SelectedTvSerie.name}</h2>
              <div className={classes.temp_container}>
                <div
                  className={classes.next_prev_button}
                  onClick={() => handleNextPrev("prev")}
                >
                  {"◀"}
                </div>
                <span className={classes.current_season}>
                  {seasonDetails.name}
                </span>
                <div
                  className={classes.next_prev_button}
                  onClick={() => handleNextPrev("next")}
                >
                  {"▶"}
                </div>
              </div>
            </section>
            <section className={classes.sub_content}>
              <section className={classes.img_container}>
                <div className={classes.img_sub_container}>
                  <Image singleURL={seasonDetails.poster_path} />
                </div>
              </section>
              <EpisodesContainer episodes={seasonDetails.episodes} />
            </section>
          </section>
          {/*
          <h3>{seasonDetails.name}</h3>
          <div className={classes.data_container}>
            <section className={classes.img_container}>
              
            </section>
            <section className={classes.episodes_container}>
              <Episodes episodes={seasonDetails.episodes} />
            </section>
          </div>
        */}
        </div>
      ) : (
        "loading"
      )}
    </div>
  );
};

export default SeasonDetails;
