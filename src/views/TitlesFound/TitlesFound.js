import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  setTitlesFound,
  clearTitlesFound,
  setNextPageFT,
  setPrevPageFT
} from "../../reducers/TitlesFoundReducer";
import AllTitles from "../../components/AllTitles/AllTitles";
import { Container } from "../../styledComponents/containers/containers";
const TitlesFound = () => {
  /*--------USE STATE------------*/
  const [page, setPage] = useState(1);

  /*--------USE SELECTOR---------*/
  const titlesFound = useSelector((state) => state.titlesFound);

  /*--------USE PARAMS-----------*/
  const params = useParams();
  const { name } = params;
  /*--------USE DISPATCH---------*/
  const dispatch = useDispatch();

  /*--------USE DISPATCH---------*/
  useEffect(() => {
    if (!titlesFound?.results?.length) {
     
      dispatch(setTitlesFound({ name, page }));
    }
  }, [params, titlesFound]);


  useEffect(() => {
    return () => {
      dispatch(clearTitlesFound());
    };
  }, []);

  return (
    <Container mobile={{height:'80vh',justifyContent:'space-evenly',flexDirection:'column'}}>
      <Container desktop={{flexDirection:'column'}} mobile={{display:"none"}}>
        <h1>{`resultado de la búsqueda de ${params.name}`}</h1>
        <h3>{`total de resultados: ${titlesFound.totalResults}`}</h3>
      </Container>
      <Container desktop={{display:'none'}} mobile={{display:'block'}}>
        <div>{`buscaste: ${params.name.toUpperCase()}`}</div>
        <div>{`resultados: ${titlesFound.totalResults}`}</div>
      </Container>
      <Container desktop={{flexDirection:"column"}}>
        <AllTitles
          titlesInfo={titlesFound}
          mediaType={"movies&tv"}
          setNextPage={setNextPageFT}
          setPrevPage={setPrevPageFT}
          getMediaType={()=>(page)=>setTitlesFound({ name, page })}
        />
      </Container>
    </Container>
  );
};

export default TitlesFound;
