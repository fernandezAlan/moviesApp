import React from "react";
import classes from './prodCompany.module.css'

const ProductionCompany = ({imgURL})=>{
    console.log('https://image.tmdb.org/t/p/original'+imgURL)
    return(
    <>
    <img className={classes.img_logo} src={'https://image.tmdb.org/t/p/original'+imgURL}/>
    </>
    )
}

export default ProductionCompany