import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "../../views/Home/Home";
import Movies from "../../views/Movies/Movies";
import SelectedMovie from "../../views/SelectedMovie/SelectedMovie";
const App = ()=>{
    return(
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<SelectedMovie />} />
      </Routes>
    )
}

export default App