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
import { Container } from "../../styledComponents/containers/containers";
import {
  AddTvSeries,
  setNextPageTV,
  setPrevPageTV,
} from "../../reducers/TvShowsReducer";
import SearchInput from "../../components/SearchInput/SearchInput";
import AllTitles from "../../components/AllTitles/AllTitles";
import {
  addMovieGenres,
  addMoviesSameGenre,
} from "../../reducers/moviesReducer";
import { GenreLabel } from "../../styledComponents/labels/labels";
import { SubTitle } from "../../styledComponents/texts/texts";
import { addTVgenres, addTVSameGenre } from "../../reducers/TvShowsReducer";

const Home = () => {
  /*------------------USE STATE-----------------*/
  const [selectedFilter, setSelectedFilters] = useState({
    label: "populares",
    type: "popular",
  });
  const [selectedMediaType, setSelectedMediaType] = useState("movie");
  const [genreSelected, setGenreSelected] = useState(null);
  /*-----------------USE DISPATCH----------------*/
  const dispatch = useDispatch();

  /*-----------------USE SELECTOR----------------*/
  const moviesState = useSelector((state) => state.movies.allMovies);
  const tvState = useSelector((state) => state.tvSeries.TvSeries);
  const moviesGenres = useSelector((state) => state.movies.genres);
  const tvGenres = useSelector((state) => state.tvSeries.genres);
  /*------------------GENERAL CONFIGURATION-----------------*/

  const URLmediaType = `/${selectedMediaType}/`;
  const typeFilter = selectedFilter.type;
  const filter = selectedMediaType === "movie" ? filtersMovie : filtersTv;
  const genres = selectedMediaType === "movie" ? moviesGenres : tvGenres;
  const state = selectedMediaType === "movie" ? moviesState : tvState;
  const addTitles = typeFilter.includes("genre_id_")
    ? selectedMediaType === "movie"
      ? addMoviesSameGenre
      : addTVSameGenre
    : selectedMediaType === "movie"
    ? setMovies
    : AddTvSeries;
  const addGenres =
    selectedMediaType === "movie" ? addMovieGenres : addTVgenres;
  /*-----------------GENERAL FUNCTIONS-----------*/
  const changeMediaType = (type) => {
    setSelectedMediaType(type);
    setSelectedFilters({
      label: "populares",
      type: "popular",
    });
    setGenreSelected(null);
  };

  const selectGenre = ({ genre }) => {
    setGenreSelected(genre);
    if (filtersMovie.length > 4) {
      filtersMovie.shift();
    }
    if (filtersTv.length > 3) {
      filtersTv.shift();
    }
    filter.unshift({
      label: genre.name.toUpperCase(),
      type: "genre_id_" + genre.id,
    });
    setSelectedFilters(filter[0]);
  };

  /*------------------USE EFFECT-----------------*/

  useEffect(() => {
    if (!state[typeFilter]?.results.length) {
      dispatch(
        addTitles({
          mediaType: selectedMediaType,
          genreId: genreSelected?.id,
          page: 1,
          type: typeFilter,
        })
      );
    }
    if (!genres.length) {
      dispatch(addGenres());
    }
  }, [selectedFilter, selectedMediaType, state]);

  return (
    <div>
      <Container>
        <Container desktop ={{width:"25vw", height:"85vh"}} mobile={{display:'none'}}>
          <Container desktop = {{justifyContent:"start"}}>
            <SubTitle>Géneros disponibles</SubTitle>
            <Container>
              {genres.map((genre) => {
                return (
                  <GenreLabel
                    selected={genreSelected?.id === genre.id}
                    onClick={() => selectGenre({ genre })}
                  >
                    {genre.name}
                  </GenreLabel>
                );
              })}
            </Container>
          </Container>
        </Container>
        <Container 
        desktop={{flexDirection:"column", width:"70vw", height:"85vh"}}
        mobile={{flexDirection:"column", width:"100vw", height:'95vh'}}
        >
          <section>
            <MediaTypeSelector
              selected={selectedMediaType === "movie"}
              onClick={() => changeMediaType("movie")}
            >
              Películas
            </MediaTypeSelector>
            <span>{"&"}</span>
            <MediaTypeSelector
              selected={selectedMediaType === "tv"}
              onClick={() => changeMediaType("tv")}
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
          {state[typeFilter] ? (
            <AllTitles
              titlesInfo={state[typeFilter]}
              URLmediaType={URLmediaType}
              typeFilter={typeFilter}
              mediaType={selectedMediaType}
              setNextPage={() =>
                selectedMediaType === "movie"
                  ? setNextPageMovie({ type: typeFilter })
                  : setNextPageTV({ type: typeFilter })
              }
              setPrevPage={() =>
                selectedMediaType === "movie"
                  ? setPrevPageMovie({ type: typeFilter })
                  : setPrevPageTV({ type: typeFilter })
              }
              getMediaType={() => {
                return (page)=>addTitles({
                  mediaType: selectedMediaType,
                  genreId: genreSelected?.id,
                  page: page,
                  type: typeFilter,
                })
              }}
            />
          ) : (
            <span>loading</span>
          )}
        </Container>
      </Container>
    </div>
  );
};
export default Home;
