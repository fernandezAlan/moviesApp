import React, { useState } from "react";
import classes from "./morePopular.module.css";
import Image from "../Images/Images";
import { useSelector } from "react-redux";
import { filterLastFirstAndPopular } from "../../utils";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
const MorePopular = ({ type }) => {
  const personCredits = useSelector((state) => state.person.personCredits);
  const Person = useSelector((state) => state.person.selectedPerson);
  console.log("MorePopular", { personCredits, Person });
  const navigate = useNavigate();
  const mediaTypes = {
    película: "movie",
    serie: "tv",
  };
  const dateFormat = {
    película: "release_date",
    serie: "first_air_date",
  };
  const nameFormat = {
    película: "title",
    serie: "name",
  };

  const selectedMediaType = mediaTypes[type];

  const titlesCast = personCredits?.cast?.filter(
    (title) => title.media_type === selectedMediaType
  );

  const titlesCrew = personCredits?.crew?.filter(
    (title) =>
      title.media_type === selectedMediaType && title.job === "Director"
  );

  const { popular, first, last } = filterLastFirstAndPopular(
    Person.known_for_department === "Acting" ? titlesCast : titlesCrew,
    dateFormat[type]
  );
  const titleName ={
    película:popular.title,
    serie:popular.name
  }
  
  console.log("popular", popular);

  return (
    <div className={classes.container}>
      <section className={classes.container_titles}>
        <span>{`${type} más popular`}</span>
        <div className={classes.line}></div>
        <div
          className={classes.img_container}
          onClick={() => navigate(`/${selectedMediaType}/${popular?.id}`)}
        >
          <Image singleURL={popular?.poster_path} />
          <span>{titleName[type]}</span>
        </div>
      </section>
        <Button
          label={`ver todas las ${type}s`}
          click={() => console.log("click")}
        />
    </div>
  );
};
export default MorePopular;
