import React from "react";
import classes from "./informationContainer.module.css";

const InformationContainer = ({ information }) => {
  return (
    <section className={classes.container}>
      {information ? (
        <p className={classes.information}>{information}</p>
      ) : (
        <p className={classes.information}>información no disponible</p>
      )}
    </section>
  );
};

export default InformationContainer;
