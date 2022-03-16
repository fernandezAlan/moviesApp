import React from "react";
import classes from "./navbar.module.css";
import { Link } from "react-router-dom";
import SearchInput from "../SearchInput/SearchInput";
const Navbar = () => {
  return (
    <div className={classes.nabvar_container}>
      <div className={classes.container}>
        <div className={classes.background}>
        </div>
          <section className={classes.link_container}>
            <Link to="/">
              <span>Inicio</span>
            </Link>
            <Link to="/movie">
              <span className={classes.selected}>Películas</span>
            </Link>
            <Link to="/tv">
              <span>Series</span>
            </Link>
          </section>
      </div>
    </div>
  );
};

export default Navbar;
