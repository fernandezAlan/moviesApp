import React from "react";
import classes from './genre.module.css'
const Genre = ({genreName})=>{
    return(<span className={classes.genre}>{genreName}</span>)
}
export default Genre