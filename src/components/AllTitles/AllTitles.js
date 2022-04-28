import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AllTitlesContainer,
  ButtonNextPrevContainer,
} from "../../styledComponents/containers/containers";
import TitleContainer from "../TitleContainer/TitleContainer";
import { NextPrevButton } from "../../styledComponents/buttons/buttons";
import { useDispatch } from "react-redux";

const AllTitles = ({
  titlesInfo,
  URLmediaType,
  typeFilter,
  mediaType,
  setNextPage,
  setPrevPage,
  getMediaType,
}) => {
  /*-----USE STATE-----------*/
  const [page, setPage] = useState(titlesInfo.actualPage);
  const [titles, setTitles] = useState(titlesInfo.results[page - 1]?.results);
  const [actualTypeFilter, setActualTypeFilter] = useState(typeFilter);
  const [actualMediaType, setActualMediaType] = useState(mediaType);
  /*-----USE NAVIGATE--------*/
  const navigate = useNavigate();

  /*-----USE DISPATCH-------*/
  const dispatch = useDispatch();

  /*-----USE EFFECT---------*/

  //aquí revisamos si el usuario cambio entre tv o movie o entre los filtros para setear correctamente la página
  useEffect(() => {
    if (typeFilter !== actualTypeFilter || mediaType !== actualMediaType) {
      setPage(titlesInfo.actualPage);
      setActualTypeFilter(typeFilter);
      setActualMediaType(mediaType);
    }
  }, [typeFilter, mediaType]);

  //una vez que la página es correcta, buscamos los titulos en el store
  useEffect(() => {
    (function updateTitles() {
      setTitles(titlesInfo.results[page - 1]?.results);
    })();
  }, [titlesInfo, page]);

  /*----------- BUTTON'S FUNCTIONS------------------*/
  const nextPage = () => {
    if (page < titlesInfo.totalPages) {
      //hacemos dispatch para guardar el numero de página en el store
      dispatch(setNextPage());
      //actualizamos el numero de la página para mostrarlo al usuario
      setPage(page + 1);
      //verificamos que los titulos de la siguiente pagina estan o no en el store
      const nextTitles = titlesInfo.results.find((el) => el.page === page + 1);
      //si no estan, hacemos la llamada a la api
      if (!nextTitles) {
        //la funcion getMediaType me devuelve otra funcion que que contiene la action correcta para cada tipo(pelicula o serie)
        const setMediaType = getMediaType();
        dispatch(setMediaType(page + 1));
      }
    }
  };

  const prevPage = () => {
    if (page > 1) {
      dispatch(setPrevPage());
      setPage(page - 1);
    }
  };
  /*---------------------------------------------------------*/

  return (
    <>
      <AllTitlesContainer>
        {titles?.map((movie) => (
          <TitleContainer
            key={movie.title ? movie.title : movie.name}
            imgURL={movie.poster_path}
            name={movie.title ? movie.title : movie.name}
            selectMovieHandle={() =>
              navigate(
                `/${movie.media_type ? movie.media_type : mediaType}/${
                  movie.id
                }/`
              )
            }
            showMediaType={mediaType === "movies&tv"}
            id={movie.id}
            mediaType={movie.media_type}
          />
        ))}
      </AllTitlesContainer>
      <ButtonNextPrevContainer>
        <NextPrevButton onClick={prevPage}>-</NextPrevButton>
        <span>{`página ${page}`}</span>
        <NextPrevButton
          onClick={nextPage}
          disabled={page === titlesInfo.totalPages}
        >
          +
        </NextPrevButton>
      </ButtonNextPrevContainer>
    </>
  );
};

export default AllTitles;
