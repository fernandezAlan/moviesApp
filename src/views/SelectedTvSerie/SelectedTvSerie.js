import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SelectedTitle from "../../components/SelectedTitle/SelectedTitle";
import {
  clearSelectedTvSerie,
  addSelectedTvSerie,
  addTvSerieCredits,
} from "../../reducers/TvShowsReducer";

const SelectedTvSerie = () => {
  const param = useParams();
  const selectedTvSerie = useSelector(
    (state) => state.tvSeries.selectedTvSerie
  );
  const tvSerieCredits = useSelector(
    (state) => state.tvSeries.selectedTvSerieCredits
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addSelectedTvSerie(param.id));
    dispatch(addTvSerieCredits(param.id));
    return () => {
      dispatch(clearSelectedTvSerie());
    };
  }, []);

  useEffect(() => {
    console.log("SELECTED TV SERIE:", { selectedTvSerie, tvSerieCredits });
  }, [selectedTvSerie, tvSerieCredits]);

  return (
    <SelectedTitle
      selectedTitle={selectedTvSerie}
      credits={tvSerieCredits}
      type={"tvserie"}
    />
  );
};

export default SelectedTvSerie;
