import React from "react";
import classes from './director.module.css'
import Images from '../Images/Images'
import { formatName } from "../../utils";
const Director  = ({name,imgURL,goToPersonPage})=>{

    return(
    <div className={classes.container} onClick={goToPersonPage}>
        <section >
            <img 
            src={`https://image.tmdb.org/t/p/original${imgURL}`} 
            alt={'foto del director'}
            className={classes.img_director}
            />
        </section>
        <div className={classes.div}></div>
        <section className={classes.name}>
            <span>{formatName(name)}</span>
        </section>
    </div>
    )

}

export default Director
