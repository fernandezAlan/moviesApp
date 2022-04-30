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
        <div className={classes.actor_container}>
          <section className={classes.sub_container}>
            <div className={classes.circle_container}>
              <div className={classes.circle_bg}></div>
            </div>
            <section className={classes.img_container}>
              <Image allImg={selectedPerson?.allImg?.profiles} />
            </section>
            <section>
              <PersonStatistics />
            </section>
            <div className={classes.biography}>
              <InformationContainer information={selectedPerson.biography} />
            </div>
          </section>
        </div>
      ) : (
        <span>Loading..</span>
      )}
    </div>
  );
};

export default Person;
