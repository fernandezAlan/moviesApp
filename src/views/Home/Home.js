import React, { useEffect, useState } from "react";
import { Link, Router, useNavigate } from "react-router-dom";
import {
  MediaTypeSelector,
  ButtonFilter,
  NextPrevButton,
} from "../../styledComponents/buttons/buttons";
import { filtersMovie, filtersTv } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import TitleContainer from "../../components/TitleContainer/TitleContainer";
import { setMovies } from "../../reducers/moviesReducer";
import {
  AllTitlesContainer,
  Container,
} from "../../styledComponents/containers/containers";
import { AddTvSeries } from "../../reducers/TvShowsReducer";

const Home = () => {
  /*------------------USE STATE-----------------*/
  const [pageMovies, setPageMovies] = useState(1);
  const [pageTv, setPageTv] = useState(1);
  const [selectedFilter, setSelectedFilters] = useState({
    label: "populares",
    type: "popular",
  });
  const [mediaTypeConfig, setMediaTypeConfig] = useState({
    movie: true,
    tv: false,
  });

  /*-----------------USE DISPATCH----------------*/
  const dispatch = useDispatch();

  /*-----------------USE NAVIGATE----------------*/
  const navigate = useNavigate();

  /*-----------------USE SELECTOR----------------*/
  const moviesState = useSelector((state) => state.movies.allMovies);
  const tvState = useSelector((state) => state.tvSeries.TvSeries);

  /*------------------GENERAL CONFIGURATION-----------------*/
  const page = mediaTypeConfig.movie ? pageMovies : pageTv;
  const setPage = mediaTypeConfig.movie ? setPageMovies : setPageTv;
  const URLmediaType = mediaTypeConfig.movie ? "/movie/" : "/tv/";
  const typeFilter = selectedFilter.type;
  const titles = mediaTypeConfig.movie
    ? moviesState[typeFilter][page]
    : tvState[typeFilter][page];
  const filter = mediaTypeConfig.movie ? filtersMovie : filtersTv;

  /*------------------USE EFFECT-----------------*/
  useEffect(() => {
    if (mediaTypeConfig.movie && !moviesState[typeFilter][page]?.results) {
      dispatch(setMovies({ type: typeFilter, page }));
    } else if (!tvState[typeFilter]?.results) {
      dispatch(AddTvSeries({ type: typeFilter, page }));
    }
  }, [selectedFilter, mediaTypeConfig, page]);

  return (
    <div>
      <section>
        <MediaTypeSelector
          selected={mediaTypeConfig.movie}
          onClick={() => {
            setMediaTypeConfig({
              movie: true,
              tv: false,
            });
            setSelectedFilters(filtersMovie[0]);
          }}
        >
          Películas
        </MediaTypeSelector>
        <span>{"&"}</span>
        <MediaTypeSelector
          selected={mediaTypeConfig.tv}
          onClick={() => {
            setMediaTypeConfig({
              movie: false,
              tv: true,
            });
            setSelectedFilters(filtersTv[0]);
          }}
        >
          Series
        </MediaTypeSelector>
      </section>
      <section>
        {filter.map((option) => (
          <ButtonFilter
            selected={typeFilter === option.type}
            onClick={() => setSelectedFilters(option)}
          >
            {option.label.toUpperCase()}
          </ButtonFilter>
        ))}
      </section>
      <Container>
        <AllTitlesContainer>
          {titles?.results?.map((movie) => (
            <TitleContainer
              key={movie.title ? movie.title : movie.name}
              imgURL={movie.poster_path}
              name={movie.title ? movie.title : movie.name}
              selectMovieHandle={() => navigate(URLmediaType + movie.id)}
            />
          ))}
        </AllTitlesContainer>
      </Container>
      <NextPrevButton
        onClick={() => {
          if (page > 1) {
            setPage(page - 1);
          }
        }}
      >
        -
      </NextPrevButton>
      <span>{`página ${page}`}</span>
      <NextPrevButton onClick={() => setPage(page + 1)}>+</NextPrevButton>
    </div>
  );
};
export default Home;
