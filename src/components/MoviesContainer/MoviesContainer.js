import React from "react";
import classes from './moviesContainer.module.css'
const MoviesContainer=({imgURL,name, selectMovieHandle})=>{
return(
    <section 
        className={classes.container} 
        onClick={selectMovieHandle}  
        >
            <div className={classes.sub_container}>
                <span className={classes.tittle}>{name}</span>
                <img
                className={classes.img_movie} 
                src={'https://image.tmdb.org/t/p/w500'+imgURL} 
                alt='movie_poster'/>
            </div>
    </section>
)
}
export default MoviesContainer