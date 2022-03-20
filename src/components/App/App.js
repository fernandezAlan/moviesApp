import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import Home from "../../views/Home/Home";
import Movies from "../../views/Movies/Movies";
import SelectedMovie from "../../views/SelectedMovie/SelectedMovie";
import SelectedTvSerie from "../../views/SelectedTvSerie/SelectedTvSerie";
import TvShows from "../../views/TvShows/TvShows";
import Person from "../../views/Person/Person";
import Navbar from "../Navbar/Navbar";
import Collection from "../../views/Collection/Collection";
import SeasonDetails from "../../views/SeasonDetails/SeasonDetails";
import classes from './app.module.css'
import Seasons from "../../views/Seasons/Seasons";
const App = () => {
  return (
    <div className={classes.container}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/movie"/>} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/movie/:id" element={<SelectedMovie />} />
        <Route path="/tv/:id" element={<SelectedTvSerie />}  />
        <Route path="/tv" element={<TvShows />} />
        <Route path="/person/:id" element={<Person />} />
        <Route path="/person/:id/jobs" element={<Person />} />
        <Route path="/collection/:id" element={<Collection />} />
        <Route path="/search/:movieName" element={<Movies />} />
        <Route path="/tv/:id/seasons" element={<Seasons />} />
        <Route path="/tv/:id/season/:seasonNumber/details" element={<SeasonDetails />} />
      </Routes>
    </div>
  );
};

export default App;
