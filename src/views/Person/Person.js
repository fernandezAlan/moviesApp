import React, { useEffect } from "react";
import classes from "./person.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addPerson,
  addPersonCredits,
  clearSelectedPerson,
} from "../../reducers/PersonReducer";
import { useNavigate } from "react-router-dom";
import MoviesContainer from "../../components/MoviesContainer/MoviesContainer";
import Image from "../../components/Images/Images";
import InformationContainer from "../../components/InformationContainer/InformationContainer";
import MorePopular from "../../components/MorePopular/MorePopular";
import PlusButton from "../../components/PlusButton/PlusButton";
import PersonStatistics from "../../components/PersonStatistics/PersonStatistics";
import { addMovieGenres } from "../../reducers/moviesReducer";
const Person = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const selectedPerson = useSelector((state) => state.person.selectedPerson);
  const personCredits = useSelector((state) => state.person.personCredits);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(addPerson(params.id));
    dispatch(addPersonCredits(params.id));
    dispatch(addMovieGenres());
    return () => {
      dispatch(clearSelectedPerson());
    };
  }, []);

  useEffect(() => {
    console.log("person view", { personCredits, selectedPerson });
  }, [selectedPerson, personCredits]);

  return (
    <div>
      {selectedPerson && personCredits ? (
        <div className={classes.actor_container}>
          <section className={classes.MP_container}>
            <MorePopular type={"película"} />
            <MorePopular type={"serie"} />
          </section>
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
