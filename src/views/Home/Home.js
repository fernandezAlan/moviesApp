import React, { useEffect, useState } from "react";
import { Link, Router, useNavigate } from "react-router-dom";
import {
  MediaTypeSelector,
  ButtonFilter,
  NextPrevButton,
  SearchButton,
} from "../../styledComponents/buttons/buttons";
import { filtersMovie, filtersTv } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import TitleContainer from "../../components/TitleContainer/TitleContainer";
import {
  setMovies,
  setNextPageMovie,
  setPrevPageMovie,
} from "../../reducers/moviesReducer";
import {
  AllTitlesContainer,
  Container,
  ButtonNextPrevContainer,
} from "../../styledComponents/containers/containers";
import {
  AddTvSeries,
  setNextPageTV,
  setPrevPageTV,
} from "../../reducers/TvShowsReducer";
import SearchInput from "../../components/SearchInput/SearchInput";
import AllTitles from "../../components/AllTitles/AllTitles";
import { addMovieGenres } from "../../reducers/moviesReducer";
import { GenreLabel } from "../../styledComponents/labels/labels";
import { SubTitle } from "../../styledComponents/texts/texts";

const Home = () => {
  /*------------------USE STATE-----------------*/
  const [selectedFilter, setSelectedFilters] = useState({
    label: "populares",
    type: "popular",
  });
  const [mediaTypeConfig, setMediaTypeConfig] = useState({
    movie: true,
    tv: false,
  });
  const [genreSelected, setGenreSelected] = useState();
  /*-----------------USE DISPATCH----------------*/
  const dispatch = useDispatch();

  /*-----------------USE SELECTOR----------------*/
  const moviesState = useSelector((state) => state.movies.allMovies);
  const tvState = useSelector((state) => state.tvSeries.TvSeries);
  const moviesGenres = useSelector((state) => state.movies.moviesGenres);
  /*------------------GENERAL CONFIGURATION-----------------*/

  const URLmediaType = mediaTypeConfig.movie ? "/movie/" : "/tv/";
  const typeFilter = selectedFilter.type;
  const filter = mediaTypeConfig.movie ? filtersMovie : filtersTv;

  /*------------------USE EFFECT-----------------*/

  useEffect(() => {
    if (mediaTypeConfig.movie && !moviesState[typeFilter]?.results.length) {
      dispatch(setMovies({ type: typeFilter }));
      if (!moviesGenres.length) {
        dispatch(addMovieGenres());
      }
    } else if (!tvState[typeFilter]?.results.length) {
      dispatch(AddTvSeries({ type: typeFilter }));
    }
  }, [selectedFilter, mediaTypeConfig, moviesState]);

  return (
    <div>
      <Container>
        <Container width={"25vw"} height={'85vh'}>
          <Container justifyContent={'start'}>
            <SubTitle>Géneros disponibles</SubTitle>
            <Container>
            {moviesGenres.map((genre) => {
              return (
                <GenreLabel 
                selected={genreSelected === genre.id}
                onClick={()=>setGenreSelected(genre.id)}
                >
                  {genre.name}
                </GenreLabel>
              );
            })}
            </Container>
          </Container>
        </Container>
        <Container flexDirection={"column"} width={"70vw"} height={'85vh'}>
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
          <AllTitles
            titlesInfo={
              mediaTypeConfig.movie
                ? moviesState[typeFilter]
                : tvState[typeFilter]
            }
            URLmediaType={URLmediaType}
            typeFilter={typeFilter}
            mediaType={mediaTypeConfig.movie ? "movie" : "tv"}
            setNextPage={() =>
              mediaTypeConfig.movie
                ? setNextPageMovie({ type: typeFilter })
                : setNextPageTV({ type: typeFilter })
            }
            setPrevPage={() =>
              mediaTypeConfig.movie
                ? setPrevPageMovie({ type: typeFilter })
                : setPrevPageTV({ type: typeFilter })
            }
            getMediaType={() => {
              return mediaTypeConfig.movie
                ? (page) => setMovies({ type: typeFilter, page: page })
                : (page) => AddTvSeries({ type: typeFilter, page: page });
            }}
          />
        </Container>
      </Container>
    </div>
  );
};
export default Home;
