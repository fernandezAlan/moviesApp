import React, { useEffect, useState } from "react";
import { Link, Router, useNavigate } from "react-router-dom";
import {
  MediaTypeSelector,
  ButtonFilter,
  NextPrevButton
} from "../../styledComponents/buttons/buttons";
import { filtersMovie, filtersTv } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import TitleContainer from "../../components/TitleContainer/TitleContainer";
import { setMovies } from "../../reducers/moviesReducer";
import {
  AllTitlesContainer,
  Container,
} from "../../styledComponents/containers/containers";
import { AddPopularTvSeries } from "../../reducers/TvShowsReducer";

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
  const [page,setPage] = useState(1)
  const URLmediaType = mediaTypeConfig.movie ? "/movie/" : "/tv/";
  const typeFilter = selectedFilter.type
  /*-----------------USE DISPATCH----------------*/
  const dispatch = useDispatch();

  /*-----------------USE NAVIGATE----------------*/
  const navigate = useNavigate();

  /*-----------------USE SELECTOR----------------*/
  const moviesState = useSelector((state) => state.movies.allMovies);
  const tvState = useSelector((state) => state.tvSeries.TvSeries);
  const titles = mediaTypeConfig.movie
    ? moviesState[typeFilter][page]
    : tvState[typeFilter];
    console.log('moviesState',moviesState)
  /*------------------USE EFFECT-----------------*/
  useEffect(() => {
    if (mediaTypeConfig.movie && !moviesState[typeFilter][page]?.results) {
      dispatch(setMovies({type:typeFilter,page}));
    } else if (!tvState[typeFilter]?.results) {
      dispatch(AddPopularTvSeries(typeFilter));
    }
  }, [selectedFilter, mediaTypeConfig,page]);

  /*------------------FILTER CONFIG-----------------*/
  const filter = mediaTypeConfig.movie ? filtersMovie : filtersTv;

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
       onClick={()=>{
        if(page>1){
          setPage(page-1)
        }
      }}
      >-</NextPrevButton>
      <span>{`página ${page}`}</span>
      <NextPrevButton
     onClick={()=>setPage(page+1)}
      >+</NextPrevButton>
    </div>
  );
};
export default Home;
