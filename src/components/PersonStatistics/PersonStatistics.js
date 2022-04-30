import React from "react";
import classes from "./personStatistics.module.css";
import { useSelector } from "react-redux";
import { getPersonStatistics, getRecurrentGenre, job } from "../../utils";
const PersonStatistics = () => {
  const selectedPerson = useSelector((state) => state.person.selectedPerson);
  const personCredits = useSelector((state) => state.person.personCredits);
  const allGenres = useSelector((state) => state.movies.genres);
  const departament = selectedPerson.known_for_department;
  const genre = selectedPerson.gender;
  const { allMovies, allSeries, director, ExecutiveProducer } =
    getPersonStatistics(personCredits);
  const recurrentGenre = getRecurrentGenre({
    movies: departament === "Acting" ? personCredits.cast : personCredits.crew,
    allGenres,
  });
console.log('debug',{job,departament,genre})
  return (
    <div>
      <h2>{selectedPerson.name}</h2>
      <h3 className={classes.departament}>{job[departament][genre - 1]}</h3>
      <section className={classes.extra_information}>
        {departament === "Acting" ? (
          <span>{`${job[departament][genre - 1]} de ${
            allMovies.length
          } películas`}</span>
        ) : null}

        {allSeries.length && departament === "Acting" ? (
          <span>{`y ${allSeries.length} series`}</span>
        ) : null}
        {director.length ? (
          <span>{`Dirigío ${director.length} película`}</span>
        ) : null}
        {ExecutiveProducer.length ? (
          <span>{`Productor de ${ExecutiveProducer.length} películas`}</span>
        ) : null}
        {recurrentGenre ? (
          <span>{`Generó recurrente: ${recurrentGenre.name}`}</span>
        ) : null}
      </section>
    </div>
  );
};
export default PersonStatistics;
