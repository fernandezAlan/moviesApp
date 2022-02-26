import React,{useEffect} from "react";
import { setMovies,selectMovie } from "../../reducers/moviesReducer";
import { useSelector, useDispatch } from 'react-redux';
import MoviesContainer from "../../components/MoviesContainer/MoviesContainer";
import { useNavigate } from "react-router-dom";
import classes from './movies.module.css'
const Movies = ()=>{
    const dispatch = useDispatch()
    const movies = useSelector(state=>state.movies.allMovies)
    useEffect(()=>{
        dispatch(setMovies())
    },[])
    const navigate = useNavigate()
    return(
        <div className={classes.container}>
            {movies?.results?.map(movie=>
            (<MoviesContainer
                key={movie.title} 
                imgURL={movie.backdrop_path} 
                name={movie.title}
                selectMovieHandle={()=>navigate('/movies/'+movie.id)}
                />)
            )}
        </div>
        )
}

export default Movies