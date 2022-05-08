import React from "react";
import classes from "./informationContainer.module.css";
import { Information } from "../../styledComponents/containers/containers";
const InformationContainer = ({ information }) => {
  return (
    <Information>
      {information ? (
        <p className={classes.information}>{information}</p>
      ) : (
        <p className={classes.information}>información no disponible</p>
      )}
    </Information>
  );
};

export default InformationContainer;
