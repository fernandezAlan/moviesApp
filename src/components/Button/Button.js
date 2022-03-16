import React from "react";
import classes from "./button.module.css";

const Button = ({ label, click }) => {
  return (
    <button className={classes.button} onClick={click}>
      {label}
    </button>
  );
};
export default Button;
