import React, { useEffect } from "react";
import classes from "./person.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addPerson,
  addPersonCredits,
  clearSelectedPerson,
} from "../../reducers/PersonReducer";
import Image from "../../components/Images/Images";
import InformationContainer from "../../components/InformationContainer/InformationContainer";
import PersonStatistics from "../../components/PersonStatistics/PersonStatistics";
import { addMovieGenres } from "../../reducers/moviesReducer";
import { Container,PersonBio } from "../../styledComponents/containers/containers";
const Person = () => {
  /*------USE PARAMS-------*/
  const params = useParams();

  /*------USE DISPATCH-----*/
  const dispatch = useDispatch();

  /*------USE SELECTOR-----*/
  const selectedPerson = useSelector((state) => state.person.selectedPerson);
  const personCredits = useSelector((state) => state.person.personCredits);

  /*------USE EFFECT--------*/
  useEffect(() => {
    dispatch(addPerson(params.id));
    dispatch(addPersonCredits(params.id));
    dispatch(addMovieGenres());
    return () => {
      dispatch(clearSelectedPerson());
    };
  }, []);

  return (
    <div>
      {selectedPerson && personCredits ? (
        <div>
          <Container>
            <Container
              desktop={{ width: "430px", height: "200px",alignItems:'start' }}
            >
              <Container desktop={{ width: "30%",height:'100%' }} mobile={{ width: "40%" }}>
                <Image allImg={selectedPerson?.allImg?.profiles} />
              </Container>
              <PersonBio>{selectedPerson.biography}</PersonBio>
            </Container>
          </Container>
        </div>
      ) : (
        <span>Loading..</span>
      )}
    </div>
  );
};

export default Person;
