import React, { useEffect, useState } from "react";
import classes from "./navbar.module.css";
import { Link, useParams } from "react-router-dom";
import SearchInput from "../SearchInput/SearchInput";
const Navbar = () => {
  return (
    <nav className={classes.nabvar_container}>
      <div className={classes.container}>
        <section className={classes.title}>
          <h1>
            Movie App
          </h1>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
