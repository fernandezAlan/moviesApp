import React, { useEffect, useState } from "react";
import { Link, Router, useNavigate } from "react-router-dom";
import classes from "./home.module.css";
import {
  MediaTypeSelector,
  ButtonFilter,
} from "../../styledComponents/buttons/buttons";
import { filtersMovie,filtersTv } from "../../utils";
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
    type: 'popular',
  });
  const [mediaTypeConfig, setMediaTypeConfig] = useState({
    movie: true,
    tv: false,
  });
  const URLmediaType = mediaTypeConfig.movie ? '/movie/' : '/tv/'
  
  /*-----------------USE DISPATCH----------------*/
  const dispatch = useDispatch();

  /*-----------------USE NAVIGATE----------------*/
  const navigate = useNavigate()

  /*-----------------USE SELECTOR----------------*/
  const moviesState = useSelector((state) => state.movies.allMovies);
  const tvState = useSelector((state) => state.tvSeries.TvSeries);
  const titles = mediaTypeConfig.movie ? moviesState[selectedFilter.type] : tvState[selectedFilter.type];
 
  /*------------------USE EFFECT-----------------*/
  useEffect(() => {
      if(mediaTypeConfig.movie && !moviesState[selectedFilter.type].results){
        dispatch(setMovies(selectedFilter.type));
    }
    else if(!tvState[selectedFilter.type]?.results){
        dispatch(AddPopularTvSeries(selectedFilter.type))
    }
  }, [selectedFilter,mediaTypeConfig]);

/*------------------FILTER CONFIG-----------------*/
const filter = mediaTypeConfig.movie ? filtersMovie : filtersTv;

  return (
    <div>
      <section>
        <MediaTypeSelector
          selected={mediaTypeConfig.movie}
          onClick={() =>{
            setMediaTypeConfig({
              movie: true,
              tv: false,
            })
            setSelectedFilters(filtersMovie[0])
        }
          }
        >
          Películas
        </MediaTypeSelector>
        <span>{"&"}</span>
        <MediaTypeSelector
          selected={mediaTypeConfig.tv}
          onClick={() =>{
            setMediaTypeConfig({
              movie: false,
              tv: true,
            })
            setSelectedFilters(filtersTv[0])
        }
          }
        >
          Series
        </MediaTypeSelector>
      </section>
      <section>
        {filter.map((option) => (
          <ButtonFilter
            selected={selectedFilter.type === option.type}
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
    </div>
  );
};
export default Home;
